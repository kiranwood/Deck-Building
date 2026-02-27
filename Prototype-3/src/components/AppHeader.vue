<template>
  <header class="app-header">
    <div>
      <div class="app-title">⚜ Super Cool Card Game</div>
      <div class="app-sub"> Prototype 3</div>
    </div>
    <div class="hdr-right">
      <RouterLink to="/deck-builder" class="btn-deck-builder">⚔ Build Deck</RouterLink>
      <div class="hdr-info">COLLECTION: <span>{{ cardStore.collection.length }}</span></div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useCardStore } from '@/stores/cardStore.js'
const cardStore = useCardStore()
</script>

<style scoped>
.app-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 11px 26px;
  background: linear-gradient(135deg, rgba(23,15,56,.96), rgba(11,26,66,.96));
  border-bottom: 1px solid var(--border-mid);
  box-shadow: 0 4px 28px rgba(0,0,0,.55);
  backdrop-filter: blur(12px);
  flex-shrink: 0;
}
.app-title {
  font-family: 'Cinzel', serif; font-size: 1.45rem; font-weight: 900;
  background: linear-gradient(135deg, var(--purple-glow), var(--blue-glow), var(--accent-gold));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  letter-spacing: .1em; filter: drop-shadow(0 0 14px rgba(155,114,240,.6));
}
.app-sub {
  font-size: .6rem; color: var(--text-dim); letter-spacing: .3em;
  text-transform: uppercase; font-family: 'Orbitron', sans-serif; margin-top: 2px;
}
.hdr-right { display: flex; align-items: center; gap: 14px; }
.hdr-info {
  font-size: .65rem; color: var(--text-dim); font-family: 'Orbitron', sans-serif;
}
.hdr-info span { color: var(--purple-glow); }
.btn-deck-builder {
  background: linear-gradient(135deg, rgba(232,200,90,.15), rgba(232,200,90,.05));
  border: 1px solid rgba(232,200,90,.45); color: var(--accent-gold);
  padding: 6px 18px; border-radius: 7px; cursor: pointer;
  font-family: 'Cinzel', serif; font-size: .75rem; letter-spacing: .08em;
  transition: all .3s; text-decoration: none;
}
.btn-deck-builder:hover { box-shadow: 0 0 16px rgba(232,200,90,.4); }
</style>
