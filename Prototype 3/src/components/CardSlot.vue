<template>
  <div class="slot-col">
    <div class="slot-label">{{ label }}</div>
    <div v-if="card" class="slot-wrap">
      <GameCard :card="card" :large="true" :no-drag="true" :appearing="appearing" />
      <button class="slot-rm" @click="$emit('remove')">×</button>
    </div>
    <div
      v-else
      :class="['empty-slot', isOver ? 'drop-over' : '', gold ? 'gold-slot' : '']"
      @dragover.prevent="isOver = true"
      @dragleave="isOver = false"
      @drop.prevent="onDrop"
    >
      <div class="si">{{ icon }}</div>
      <div>{{ placeholder }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GameCard from './GameCard.vue'

const props = defineProps({
  card:        { type: Object,  default: null },
  label:       { type: String,  default: '' },
  icon:        { type: String,  default: '🐱' },
  placeholder: { type: String,  default: 'Drop here' },
  appearing:   { type: Boolean, default: false },
  gold:        { type: Boolean, default: false }
})

const emit = defineEmits(['remove', 'drop'])
const isOver = ref(false)

function onDrop(e) {
  isOver.value = false
  const uid = e.dataTransfer.getData('cardUid')
  if (uid) emit('drop', uid)
}
</script>

<style scoped>
.slot-col { display: flex; flex-direction: column; align-items: center; }
.slot-label { font-size: .6rem; color: var(--text-dim); letter-spacing: .1em; text-transform: uppercase; font-family: 'Orbitron', sans-serif; text-align: center; margin-bottom: 6px; }
</style>
