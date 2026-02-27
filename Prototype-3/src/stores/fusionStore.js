import { defineStore } from 'pinia'
import { FUSION_NAMES, FUSION_ABILITIES } from '@/data/fusions.js'

function getFusionKey(typeA, typeB) {
  return [typeA, typeB].sort().join('-')
}

export const useFusionStore = defineStore('fusion', {
  actions: {
    computeFusedCard(cardA, cardB) {
      const key = getFusionKey(cardA.type, cardB.type)
      const names = FUSION_NAMES[key] || ['Mystic Fusion']
      const abilities = FUSION_ABILITIES[key] || ['Arcane Burst: Powerful combined attack.']

      const idx = (cardA.id.charCodeAt(0) + cardB.id.charCodeAt(0)) % names.length
      const abilIdx = (cardA.id.charCodeAt(1) + cardB.id.charCodeAt(1)) % abilities.length

      const types = [cardA.type, cardB.type].sort()
      const resultType = types[Math.floor(Math.random() * types.length)]

      return {
        id: 'fused_' + cardA.id + '_' + cardB.id,
        name: names[idx],
        type: resultType,
        isFusion: true,
        energy: Math.round(((cardA.energy + cardB.energy) / 2) * 1.15),
        attack: Math.round(((cardA.attack + cardB.attack) / 2) * 1.35),
        defense: Math.round(((cardA.defense + cardB.defense) / 2) * 1.35),
        ability: abilities[abilIdx]
      }
    }
  }
})
