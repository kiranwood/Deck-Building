<template>
  <div class="main-layout">
    <!-- LEFT: Collection -->
    <div class="coll-panel">
      <div class="panel-hdr">
        <div class="panel-title">
          Card Collection
          <small>{{ cardStore.collection.length }} cards</small>
        </div>
        <button class="btn-leave">← LEAVE</button>
      </div>

      <div class="card-scroll" id="collection">
        <div class="coll-hint">Click a card to add to the active panel · Drag to slots</div>
        <div v-if="cardStore.collection.length === 0" class="coll-empty">
          No cards in collection
        </div>
        <GameCard
          v-for="card in cardStore.collection"
          :key="card.uid"
          :card="card"
          hint="fuse"
          @card-click="onCardClick"
        />
      </div>
    </div>

    <!-- RIGHT: Trade / Fuse tabs -->
    <div class="right-panel">
      <div class="tab-bar">
        <button
          :class="['tab-btn', 'trade', activeTab === 'trade' ? 'active' : '']"
          @click="activeTab = 'trade'"
        >⚖️ Trade</button>
        <button
          :class="['tab-btn', 'fuse', activeTab === 'fuse' ? 'active' : '']"
          @click="activeTab = 'fuse'"
        >⚗️ Fuse</button>
      </div>

      <div class="panel-content">
        <TradePanel v-show="activeTab === 'trade'" ref="tradeRef" />
        <FusePanel  v-show="activeTab === 'fuse'"  ref="fuseRef" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GameCard   from '@/components/GameCard.vue'
import TradePanel from '@/components/TradePanel.vue'
import FusePanel  from '@/components/FusePanel.vue'
import { useCardStore } from '@/stores/cardStore.js'

const cardStore  = useCardStore()
const activeTab  = ref('trade')
const tradeRef   = ref(null)
const fuseRef    = ref(null)

function onCardClick(card) {
  if (activeTab.value === 'trade') {
    tradeRef.value?.receiveClickedCard(card)
  } else {
    fuseRef.value?.receiveClickedCard(card)
  }
}
</script>

<style scoped>
.main-layout {
  display: grid;
  grid-template-columns: 1fr 430px;
  flex: 1;
  overflow: hidden;
}
.coll-panel {
  display: flex; flex-direction: column;
  border-right: 1px solid var(--border-mid);
  overflow: hidden;
}
.coll-hint {
  grid-column: 1/-1; text-align: center; padding: 4px 0 6px;
  font-size: .58rem; color: var(--text-dim); font-style: italic;
}
.right-panel {
  display: flex; flex-direction: column;
  background: linear-gradient(180deg, rgba(11,26,66,.45), rgba(23,15,56,.45));
  overflow: hidden;
}
.tab-bar { display: grid; grid-template-columns: 1fr 1fr; flex-shrink: 0; }
.tab-btn {
  padding: 13px; border: none; cursor: pointer;
  font-family: 'Cinzel', serif; font-size: .83rem; letter-spacing: .08em;
  transition: all .3s; position: relative;
  border-bottom: 1px solid var(--border-subtle);
}
.tab-btn::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: transparent; transition: background .3s; }
.tab-btn.trade { background: rgba(45,27,110,.28); color: var(--text-secondary); }
.tab-btn.trade.active { background: linear-gradient(135deg, rgba(45,27,110,.55), rgba(23,15,56,.55)); color: var(--purple-glow); }
.tab-btn.trade.active::after { background: linear-gradient(90deg, var(--purple-glow), var(--blue-glow)); }
.tab-btn.fuse { background: rgba(11,26,66,.28); color: var(--text-secondary); border-left: 1px solid var(--border-subtle); }
.tab-btn.fuse.active { background: linear-gradient(135deg, rgba(11,26,66,.55), rgba(23,15,56,.55)); color: var(--blue-glow); }
.tab-btn.fuse.active::after { background: linear-gradient(90deg, var(--blue-glow), var(--purple-glow)); }
.panel-content { flex: 1; overflow: hidden; }
</style>
