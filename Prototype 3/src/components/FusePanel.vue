<template>
  <div class="fuse-panel">
    <div class="section-title fuse">
      ⚗️ Card Fusion
      <small>Combine any two cards — any pair can fuse!</small>
    </div>

    <div class="fuse-inputs">
      <CardSlot
        label="Card A"
        icon="🐱"
        placeholder="Drop / Click"
        :card="slotA"
        @remove="slotA = null; computeResult()"
        @drop="onDropA"
      />
      <div class="fuse-x">✕</div>
      <CardSlot
        label="Card B"
        icon="🐱"
        placeholder="Drop / Click"
        :card="slotB"
        @remove="slotB = null; computeResult()"
        @drop="onDropB"
      />
    </div>

    <div :class="['status-box', fusedCard ? 'fusion-found' : '']">
      <div :class="['status-msg', fusedCard ? 'gold' : '']">{{ statusMsg }}</div>
    </div>

    <div class="fuse-arrow-down">▼</div>
    <div class="fuse-result-label">✦ Fusion Result ✦</div>

    <div class="fuse-result-wrap">
      <GameCard
        v-if="fusedCard"
        :card="fusedCard"
        :large="true"
        :no-drag="true"
        :appearing="resultAppearing"
      />
      <div v-else class="empty-slot gold-slot">
        <div class="si">✨</div>
        <div>Fusion appears here</div>
      </div>
    </div>

    <button class="btn-fuse" :disabled="!fusedCard" @click="confirmFusion">
      ⚗️ CONFIRM FUSION
    </button>

    <div class="drag-hint">💡 Click cards from collection to select · Click × to remove</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CardSlot from './CardSlot.vue'
import GameCard from './GameCard.vue'
import { useCardStore } from '@/stores/cardStore.js'
import { useFusionStore } from '@/stores/fusionStore.js'
import { useToast } from '@/composables/useToast.js'

const cardStore   = useCardStore()
const fusionStore = useFusionStore()
const { showToast } = useToast()

const slotA = ref(null)
const slotB = ref(null)
const fusedCard = ref(null)
const resultAppearing = ref(false)

const statusMsg = computed(() => {
  if (!slotA.value || !slotB.value) return '🐾 Click or drag cards to discover a fusion'
  if (!fusedCard.value) return '💔 No fusion for these cards'
  return `✨ Fusion discovered: ${fusedCard.value.name}!`
})

function computeResult() {
  if (slotA.value && slotB.value) {
    fusedCard.value = fusionStore.computeFusedCard(slotA.value, slotB.value)
    resultAppearing.value = true
    setTimeout(() => { resultAppearing.value = false }, 600)
  } else {
    fusedCard.value = null
  }
}

// Called by parent (CollectionView) when a card is clicked in fuse mode
function receiveClickedCard(card) {
  const found = cardStore.collection.find(c => c.uid === card.uid)
  if (!found) return
  if (slotA.value && slotA.value.uid === found.uid) {
    slotA.value = null
  } else if (slotB.value && slotB.value.uid === found.uid) {
    slotB.value = null
  } else if (!slotA.value) {
    slotA.value = found
  } else if (!slotB.value) {
    slotB.value = found
  } else {
    slotA.value = found
  }
  computeResult()
}
defineExpose({ receiveClickedCard })

function onDropA(uid) {
  const card = cardStore.collection.find(c => c.uid === uid)
  if (card && (!slotB.value || slotB.value.uid !== card.uid)) {
    slotA.value = card; computeResult()
  }
}
function onDropB(uid) {
  const card = cardStore.collection.find(c => c.uid === uid)
  if (card && (!slotA.value || slotA.value.uid !== card.uid)) {
    slotB.value = card; computeResult()
  }
}

function confirmFusion() {
  if (!slotA.value || !slotB.value || !fusedCard.value) return
  cardStore.fuseCards(slotA.value.uid, slotB.value.uid, fusedCard.value)
  showToast('✨ Fusion complete! ' + fusedCard.value.name + ' created!')
  slotA.value = null; slotB.value = null; fusedCard.value = null
}

// Keep slots valid when collection changes
cardStore.$subscribe(() => {
  if (slotA.value && !cardStore.collection.find(c => c.uid === slotA.value.uid)) {
    slotA.value = null; computeResult()
  }
  if (slotB.value && !cardStore.collection.find(c => c.uid === slotB.value.uid)) {
    slotB.value = null; computeResult()
  }
})
</script>

<style scoped>
.fuse-panel { display: flex; flex-direction: column; height: 100%; padding: 14px; gap: 10px; overflow-y: auto; }
.fuse-panel::-webkit-scrollbar { width: 4px; }
.fuse-panel::-webkit-scrollbar-thumb { background: var(--purple-mid); }
.section-title { font-family: 'Cinzel', serif; font-size: .82rem; letter-spacing: .08em; text-align: center; }
.section-title.fuse { color: var(--purple-glow); }
.section-title small { display: block; font-size: .58rem; color: var(--text-dim); font-family: 'Raleway', sans-serif; letter-spacing: .04em; margin-top: 2px; }
.fuse-inputs { display: flex; align-items: center; justify-content: center; gap: 8px; }
.fuse-x { font-family: 'Cinzel', serif; font-size: 1.5rem; font-weight: 900; color: var(--accent-rose); opacity: .8; text-shadow: 0 0 14px rgba(240,112,144,.5); }
.status-box { background: rgba(0,0,0,.28); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 8px 12px; text-align: center; }
.status-box.fusion-found { border-color: rgba(232,200,90,.45); background: rgba(232,200,90,.05); }
.status-msg { font-size: .68rem; color: var(--text-secondary); }
.status-msg.gold { color: var(--accent-gold); }
.fuse-arrow-down { text-align: center; color: var(--purple-glow); font-size: 1.1rem; animation: fuseD 1.5s ease-in-out infinite; }
@keyframes fuseD { 0%,100% { transform: translateY(0); opacity: .5 } 50% { transform: translateY(4px); opacity: 1 } }
.fuse-result-label { font-size: .58rem; color: var(--accent-gold); letter-spacing: .15em; text-transform: uppercase; font-family: 'Orbitron', sans-serif; text-align: center; }
.fuse-result-wrap { display: flex; justify-content: center; }
.btn-fuse { width: 100%; padding: 11px; border: none; border-radius: 10px; cursor: pointer; background: linear-gradient(135deg, rgba(155,114,240,.22), rgba(74,45,156,.12)); border: 1px solid rgba(155,114,240,.48); color: var(--purple-glow); font-family: 'Cinzel', serif; font-size: .82rem; letter-spacing: .1em; transition: all .3s; position: relative; overflow: hidden; }
.btn-fuse::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, transparent, rgba(155,114,240,.14), transparent); transform: translateX(-100%); transition: transform .5s; }
.btn-fuse:hover:not(:disabled)::before { transform: translateX(100%); }
.btn-fuse:hover:not(:disabled) { box-shadow: 0 0 22px rgba(155,114,240,.48); }
.btn-fuse:disabled { opacity: .3; cursor: not-allowed; }
.drag-hint { font-size: .56rem; color: var(--text-dim); text-align: center; font-style: italic; padding: 3px; }
</style>
