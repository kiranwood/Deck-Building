<template>
  <div
    :class="[
      'game-card',
      'ct-' + card.type,
      large ? 'large' : '',
      card.isFusion ? 'is-fusion' : '',
      selected ? 'is-selected' : '',
      dragging ? 'dragging' : '',
      appearing ? 'appearing' : '',
      hintClass
    ]"
    :draggable="!noDrag"
    @click="$emit('card-click', card)"
    @dragstart="onDragStart"
    @dragend="onDragEnd"
  >
    <div class="card-bg"></div>
    <div class="card-shimmer"></div>
    <div v-if="card.isFusion" class="fusion-watermark">✦ FUSION ✦</div>
    <div class="card-energy">{{ card.energy }}</div>
    <div class="card-name">{{ card.name }}</div>
    <div class="card-type-badge">{{ typeEmoji }}</div>
    <div class="card-art" v-html="artSvg"></div>
    <div class="card-ability">{{ card.ability }}</div>
    <div class="card-stats">
      <div class="stat-atk"><span class="stat-lbl">ATK</span> {{ card.attack }}</div>
      <div class="stat-def">{{ card.defense }} <span class="stat-lbl">DEF</span></div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { CAT_SVG } from '@/data/catSvg.js'
import { TYPE_EMOJI } from '@/data/cards.js'

const props = defineProps({
  card:      { type: Object, required: true },
  large:     { type: Boolean, default: false },
  noDrag:    { type: Boolean, default: false },
  selected:  { type: Boolean, default: false },
  appearing: { type: Boolean, default: false },
  hint:      { type: String,  default: '' }   // 'add' | 'remove' | 'fuse' | ''
})

const emit = defineEmits(['card-click', 'drag-start', 'drag-end'])

const isDragging = ref(false)
const dragging = computed(() => isDragging.value)

const typeEmoji = computed(() => TYPE_EMOJI[props.card.type] || '✨')

const artSvg = computed(() => {
  const seed = props.card.uid ? props.card.uid.slice(-3) : 'x00'
  if (props.card.isFusion) return CAT_SVG.fusion(seed)
  return (CAT_SVG[props.card.type] || CAT_SVG.air)(seed)
})

const hintClass = computed(() => {
  if (!props.hint) return ''
  return 'hint-' + props.hint
})

function onDragStart(e) {
  if (props.noDrag) return
  isDragging.value = true
  e.dataTransfer.setData('cardUid', props.card.uid)
  e.dataTransfer.effectAllowed = 'move'
  emit('drag-start', e, props.card)
}
function onDragEnd(e) {
  isDragging.value = false
  emit('drag-end', e)
}
</script>
