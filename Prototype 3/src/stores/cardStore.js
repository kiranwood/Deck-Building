import { defineStore } from 'pinia'
import { BASE_CARDS } from '@/data/cards.js'

function mkuid() {
  return Math.random().toString(36).slice(2, 8)
}

export const useCardStore = defineStore('cards', {
  state: () => ({
    collection: []
  }),

  actions: {
    init() {
      if (this.collection.length > 0) return // already initialised
      const pool = BASE_CARDS.map(c => ({ ...c, uid: c.id + '_' + mkuid() }))
      // Fill to 45
      while (pool.length < 45) {
        const base = BASE_CARDS[Math.floor(Math.random() * BASE_CARDS.length)]
        pool.push({ ...base, uid: base.id + '_' + mkuid() })
      }
      this.collection = pool.slice(0, 45)
    },

    addCard(card) {
      this.collection.push({ ...card, uid: (card.id || 'f') + '_' + mkuid() })
    },

    removeCard(uid) {
      this.collection = this.collection.filter(c => c.uid !== uid)
    },

    tradeCard(removeUid, incoming) {
      this.removeCard(removeUid)
      this.addCard(incoming)
    },

    fuseCards(uidA, uidB, fusedCard) {
      this.collection = this.collection.filter(c => c.uid !== uidA && c.uid !== uidB)
      this.collection.push({ ...fusedCard, uid: 'fused_' + mkuid() })
    }
  }
})
