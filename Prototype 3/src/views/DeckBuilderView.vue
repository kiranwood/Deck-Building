<template>
  <div class="deck-screen">
    <!-- Header -->
    <header class="deck-header">
      <div class="deck-header-left">
        <RouterLink to="/" class="btn-back">← Back</RouterLink>
        <div>
          <div class="deck-title">⚔ Deck Builder</div>
          <div class="deck-subtitle">Build your ultimate cat squad</div>
        </div>
      </div>
      <div class="deck-header-right">
        <div class="deck-counter">
          DECK:
          <span :class="deckStore.isFull ? 'over' : ''">{{ deckStore.count }}</span>
          / 30 cards
        </div>
        <button class="btn-save-deck" @click="saveDeck">✦ Save Deck</button>
      </div>
    </header>

    <!-- Body -->
    <div :class="['deck-layout', flashSave ? 'saved-flash' : '']">
      <!-- LEFT: collection -->
      <div class="deck-half collection-half">
        <div class="deck-panel-hdr">
          <div class="deck-panel-title left">
            Card Collection
            <small>{{ availableCards.length }} available</small>
          </div>
        </div>

        <!-- Filter bar -->
        <div class="deck-filter-bar">
          <button
            v-for="f in filters"
            :key="f.value"
            :class="['filter-btn', f.cls, activeFilter === f.value ? 'active' : '']"
            @click="activeFilter = f.value"
          >{{ f.label }}</button>
        </div>

        <!-- Cards -->
        <div
          class="deck-card-grid"
          @dragover.prevent
          @drop.prevent="onDropToCollection"
        >
          <div v-if="availableCards.length === 0" class="deck-empty">
            <div class="deck-empty-icon">🐱</div>
            <div>No cards match this filter</div>
          </div>
          <GameCard
            v-for="card in availableCards"
            :key="card.uid"
            :card="card"
            hint="add"
            @card-click="addCard(card.uid)"
            @drag-start="onDragStartCollection"
          />
        </div>
      </div>

      <!-- RIGHT: deck -->
      <div class="deck-half">
        <div class="deck-panel-hdr">
          <div class="deck-panel-title right">
            My Deck
            <small>{{ deckStore.count }} / 30 cards</small>
          </div>
        </div>

        <div
          class="deck-side-grid"
          @dragover.prevent
          @drop.prevent="onDropToDeck"
        >
          <div v-if="deckStore.count === 0" class="deck-empty">
            <div class="deck-empty-icon">⚔</div>
            <div>Your deck is empty<br>Click cards to add them</div>
          </div>
          <GameCard
            v-for="uid in deckStore.deck"
            :key="uid"
            :card="cardByUid(uid)"
            hint="remove"
            @card-click="removeCard(uid)"
            @drag-start="onDragStartDeck"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import GameCard from '@/components/GameCard.vue'
import { useCardStore } from '@/stores/cardStore.js'
import { useDeckStore } from '@/stores/deckStore.js'
import { useToast } from '@/composables/useToast.js'

const cardStore  = useCardStore()
const deckStore  = useDeckStore()
const { showToast } = useToast()

const activeFilter = ref('all')
const flashSave    = ref(false)
let dragSrc        = null   // 'collection' | 'deck'
let dragUid        = null

const filters = [
  { value: 'all',    label: 'All',      cls: '' },
  { value: 'fire',   label: '🔥 Fire',  cls: 'f-fire' },
  { value: 'water',  label: '💧 Water', cls: 'f-water' },
  { value: 'earth',  label: '🌿 Earth', cls: 'f-earth' },
  { value: 'air',    label: '💨 Air',   cls: 'f-air' },
  { value: 'fusion', label: '✦ Fusion', cls: 'f-fusion' },
]

const availableCards = computed(() => {
  const deckSet = new Set(deckStore.deck)
  let cards = cardStore.collection.filter(c => !deckSet.has(c.uid))
  if (activeFilter.value === 'fusion') return cards.filter(c => c.isFusion)
  if (activeFilter.value !== 'all')   return cards.filter(c => c.type === activeFilter.value && !c.isFusion)
  return cards
})

function cardByUid(uid) {
  return cardStore.collection.find(c => c.uid === uid) || {}
}

function addCard(uid) {
  if (!deckStore.addCard(uid)) showToast('⚠ Deck is full! (30 cards max)')
}
function removeCard(uid) { deckStore.removeCard(uid) }

// Drag from collection → deck
function onDragStartCollection(e, card) {
  dragSrc = 'collection'; dragUid = card.uid
  e.dataTransfer.setData('deckDragSrc', 'collection')
  e.dataTransfer.setData('deckDragUid', card.uid)
}
// Drag from deck → collection
function onDragStartDeck(e, card) {
  dragSrc = 'deck'; dragUid = card.uid
  e.dataTransfer.setData('deckDragSrc', 'deck')
  e.dataTransfer.setData('deckDragUid', card.uid)
}

function onDropToDeck(e) {
  const src = e.dataTransfer.getData('deckDragSrc')
  const uid = e.dataTransfer.getData('deckDragUid')
  if (src === 'collection' && uid) addCard(uid)
}
function onDropToCollection(e) {
  const src = e.dataTransfer.getData('deckDragSrc')
  const uid = e.dataTransfer.getData('deckDragUid')
  if (src === 'deck' && uid) removeCard(uid)
}

function saveDeck() {
  if (deckStore.count === 0) { showToast('⚠ Add some cards to your deck first!'); return }
  flashSave.value = true
  setTimeout(() => { flashSave.value = false }, 900)
  showToast('✦ Deck saved! (' + deckStore.count + ' cards)')
}
</script>

<style scoped>
.deck-screen {
  display: flex; flex-direction: column; flex: 1; overflow: hidden;
}

/* Header */
.deck-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 11px 26px;
  background: linear-gradient(135deg, rgba(23,15,56,.97), rgba(11,26,66,.97));
  border-bottom: 1px solid var(--border-mid);
  box-shadow: 0 4px 28px rgba(0,0,0,.55);
  backdrop-filter: blur(12px); flex-shrink: 0;
}
.deck-header-left { display: flex; align-items: center; gap: 16px; }
.deck-title { font-family: 'Cinzel', serif; font-size: 1.2rem; font-weight: 900; background: linear-gradient(135deg, var(--accent-gold), var(--purple-glow)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: .1em; filter: drop-shadow(0 0 10px rgba(232,200,90,.4)); }
.deck-subtitle { font-size: .58rem; color: var(--text-dim); letter-spacing: .25em; text-transform: uppercase; font-family: 'Orbitron', sans-serif; margin-top: 2px; }
.deck-header-right { display: flex; align-items: center; gap: 10px; }
.deck-counter { font-family: 'Orbitron', sans-serif; font-size: .65rem; color: var(--text-dim); background: rgba(0,0,0,.3); border: 1px solid var(--border-subtle); padding: 5px 12px; border-radius: 6px; }
.deck-counter span { color: var(--accent-gold); }
.deck-counter span.over { color: var(--accent-rose); }
.btn-save-deck { background: linear-gradient(135deg, rgba(232,200,90,.2), rgba(232,200,90,.06)); border: 1px solid rgba(232,200,90,.5); color: var(--accent-gold); padding: 6px 20px; border-radius: 7px; cursor: pointer; font-family: 'Cinzel', serif; font-size: .78rem; letter-spacing: .1em; transition: all .3s; position: relative; overflow: hidden; }
.btn-save-deck::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, transparent, rgba(232,200,90,.12), transparent); transform: translateX(-100%); transition: transform .5s; }
.btn-save-deck:hover::before { transform: translateX(100%); }
.btn-save-deck:hover { box-shadow: 0 0 20px rgba(232,200,90,.4); }

/* Layout */
.deck-layout { display: grid; grid-template-columns: 1fr 1fr; flex: 1; overflow: hidden; }
.deck-half { display: flex; flex-direction: column; overflow: hidden; }
.collection-half { border-right: 1px solid var(--border-mid); }

.deck-panel-hdr { display: flex; align-items: center; justify-content: space-between; padding: 12px 18px 10px; background: linear-gradient(135deg, rgba(45,27,110,.3), rgba(23,15,56,.35)); border-bottom: 1px solid var(--border-subtle); flex-shrink: 0; }
.deck-panel-title { font-family: 'Cinzel', serif; font-size: .9rem; font-weight: 600; letter-spacing: .05em; }
.deck-panel-title.left { color: var(--purple-glow); }
.deck-panel-title.right { color: var(--accent-gold); }
.deck-panel-title small { font-size: .6rem; color: var(--text-dim); margin-left: 8px; font-family: 'Raleway', sans-serif; font-weight: 400; }

/* Filter */
.deck-filter-bar { display: flex; align-items: center; gap: 6px; padding: 8px 14px; border-bottom: 1px solid var(--border-subtle); flex-shrink: 0; background: rgba(0,0,0,.15); flex-wrap: wrap; }
.filter-btn { padding: 3px 10px; border: 1px solid var(--border-subtle); border-radius: 20px; background: transparent; color: var(--text-dim); cursor: pointer; font-family: 'Orbitron', sans-serif; font-size: .52rem; letter-spacing: .05em; transition: all .2s; }
.filter-btn:hover { color: var(--text-secondary); border-color: var(--border-mid); }
.filter-btn.active         { border-color: var(--purple-glow); color: var(--purple-glow); background: rgba(155,114,240,.1); }
.filter-btn.f-fire.active  { border-color: #ff6644; color: #ff9966; background: rgba(255,80,40,.1); }
.filter-btn.f-water.active { border-color: #2288ff; color: #66aaff; background: rgba(34,136,255,.1); }
.filter-btn.f-earth.active { border-color: #44bb22; color: #88dd66; background: rgba(68,187,34,.1); }
.filter-btn.f-air.active   { border-color: #aaaaff; color: #ccccff; background: rgba(170,170,255,.1); }
.filter-btn.f-fusion.active{ border-color: var(--accent-gold); color: var(--accent-gold); background: rgba(232,200,90,.1); }
</style>
