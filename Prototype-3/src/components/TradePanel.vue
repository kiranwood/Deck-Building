<template>
  <div class="trade-panel">
    <div class="section-title trade">
      ⚖️ Card Trading
      <small>Drag or click a card from your collection to offer</small>
    </div>

    <div class="trade-arena">
      <CardSlot
        label="Your Card"
        icon="🐱"
        placeholder="Drag or click card"
        :card="myCard"
        @remove="myCard = null"
        @drop="onDropMy"
      />
      <div class="trade-arrows">
        <div class="arr-l">◀</div>
        <div class="vs-txt">VS</div>
        <div class="arr-r">▶</div>
      </div>
      <CardSlot
        label="Their Offer"
        icon="🎴"
        placeholder="Offer pending..."
        :card="oppCard"
        :appearing="oppAppearing"
      />
    </div>

    <div :class="['status-box', phase === 'offered' ? '' : '']">
      <div class="status-msg">{{ statusMsg }}</div>
      <div v-if="phase === 'waiting'" class="trade-timer">
        <div class="trade-timer-bar" :style="{ width: timerPct + '%' }"></div>
      </div>
    </div>

    <div class="trade-btns">
      <button class="btn-accept" :disabled="!canAccept" @click="accept">✓ ACCEPT</button>
      <button class="btn-decline" :disabled="phase !== 'offered'" @click="decline">✗ DECLINE</button>
    </div>

    <div class="drag-hint">💡 Drag or click your card into the slot</div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import CardSlot from './CardSlot.vue'
import { useCardStore } from '@/stores/cardStore.js'
import { useToast } from '@/composables/useToast.js'
import { BASE_CARDS } from '@/data/cards.js'

const props = defineProps({
  clickedCard: { type: Object, default: null }
})

const cardStore = useCardStore()
const { showToast } = useToast()

const myCard     = ref(null)
const oppCard    = ref(null)
const oppAppearing = ref(false)
const phase      = ref('waiting')
const timerPct   = ref(0)
let timerHandle  = null
let restartHandle = null

const canAccept = computed(() => phase.value === 'offered' && !!myCard.value)

const statusMsg = computed(() => {
  if (phase.value === 'offered') return '📬 Trade offer received!'
  return '⏳ Waiting for a trade offer...'
})

// Accept a clicked card from collection
function receiveClickedCard(card) {
  if (!card) return
  const found = cardStore.collection.find(c => c.uid === card.uid)
  if (!found) return
  if (myCard.value && myCard.value.uid === card.uid) {
    myCard.value = null
  } else {
    myCard.value = found
  }
}
defineExpose({ receiveClickedCard })

function onDropMy(uid) {
  const card = cardStore.collection.find(c => c.uid === uid)
  if (card) myCard.value = card
}

function startTimer() {
  timerPct.value = 0
  const dur = 4500 + Math.random() * 4000
  const start = Date.now()
  timerHandle = setInterval(() => {
    timerPct.value = Math.min(100, ((Date.now() - start) / dur) * 100)
    if (timerPct.value >= 100) {
      clearInterval(timerHandle)
      const pick = BASE_CARDS[Math.floor(Math.random() * BASE_CARDS.length)]
      oppCard.value = { ...pick, uid: 'opp_' + Math.random().toString(36).slice(2) }
      oppAppearing.value = true
      phase.value = 'offered'
      setTimeout(() => { oppAppearing.value = false }, 600)
    }
  }, 60)
}

function accept() {
  if (!myCard.value || !oppCard.value) return
  const name = oppCard.value.name
  cardStore.tradeCard(myCard.value.uid, oppCard.value)
  showToast('✨ Trade complete! Gained ' + name)
  myCard.value = null; oppCard.value = null; phase.value = 'waiting'; timerPct.value = 0
  restartHandle = setTimeout(startTimer, 2400)
}

function decline() {
  showToast('❌ Trade declined.')
  oppCard.value = null; phase.value = 'waiting'; timerPct.value = 0
  restartHandle = setTimeout(startTimer, 1800)
}

onMounted(startTimer)
onUnmounted(() => {
  clearInterval(timerHandle)
  clearTimeout(restartHandle)
})
</script>

<style scoped>
.trade-panel { display: flex; flex-direction: column; height: 100%; padding: 14px; gap: 10px; overflow-y: auto; }
.trade-panel::-webkit-scrollbar { width: 4px; }
.trade-panel::-webkit-scrollbar-thumb { background: var(--purple-mid); }
.section-title { font-family: 'Cinzel', serif; font-size: .82rem; letter-spacing: .08em; text-align: center; }
.section-title.trade { color: var(--blue-glow); }
.section-title small { display: block; font-size: .58rem; color: var(--text-dim); font-family: 'Raleway', sans-serif; letter-spacing: .04em; margin-top: 2px; }
.trade-arena { display: flex; align-items: center; justify-content: center; gap: 10px; }
.trade-arrows { display: flex; flex-direction: column; align-items: center; gap: 3px; color: var(--accent-gold); font-size: 1.3rem; }
.arr-r { animation: arrR 1.5s ease-in-out infinite; }
.arr-l { animation: arrL 1.5s ease-in-out infinite; }
@keyframes arrR { 0%,100% { opacity:.35; transform:translateX(0) } 50% { opacity:1; transform:translateX(4px) } }
@keyframes arrL { 0%,100% { opacity:.35; transform:translateX(0) } 50% { opacity:1; transform:translateX(-4px) } }
.vs-txt { font-size: .55rem; color: var(--text-dim); font-family: 'Orbitron', sans-serif; }
.status-box { background: rgba(0,0,0,.28); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 8px 12px; text-align: center; }
.status-msg { font-size: .68rem; color: var(--text-secondary); }
.trade-timer { width: 100%; height: 3px; background: rgba(255,255,255,.08); border-radius: 2px; margin-top: 6px; overflow: hidden; }
.trade-timer-bar { height: 100%; background: linear-gradient(90deg, var(--purple-glow), var(--blue-glow)); border-radius: 2px; transition: width .08s linear; }
.trade-btns { display: flex; gap: 8px; }
.btn-accept { flex: 1; padding: 9px; border: none; border-radius: 8px; cursor: pointer; background: linear-gradient(135deg, rgba(68,187,68,.18), rgba(34,136,34,.08)); border: 1px solid rgba(68,200,68,.38); color: #88ff88; font-family: 'Orbitron', sans-serif; font-size: .58rem; letter-spacing: .1em; transition: all .2s; }
.btn-accept:hover:not(:disabled) { background: linear-gradient(135deg, rgba(68,187,68,.35), rgba(34,136,34,.18)); box-shadow: 0 0 14px rgba(68,187,68,.3); }
.btn-accept:disabled, .btn-decline:disabled { opacity: .3; cursor: not-allowed; }
.btn-decline { flex: 1; padding: 9px; border: none; border-radius: 8px; cursor: pointer; background: linear-gradient(135deg, rgba(240,112,144,.18), rgba(180,60,90,.08)); border: 1px solid rgba(240,112,144,.38); color: var(--accent-rose); font-family: 'Orbitron', sans-serif; font-size: .58rem; letter-spacing: .1em; transition: all .2s; }
.btn-decline:hover:not(:disabled) { background: linear-gradient(135deg, rgba(240,112,144,.35), rgba(180,60,90,.18)); box-shadow: 0 0 14px rgba(240,112,144,.3); }
.drag-hint { font-size: .56rem; color: var(--text-dim); text-align: center; font-style: italic; padding: 3px; }
</style>
