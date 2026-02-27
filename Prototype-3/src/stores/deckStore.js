import { defineStore } from 'pinia'

export const useDeckStore = defineStore('deck', {
  state: () => ({
    deck: []   // array of card uids in the active deck
  }),

  getters: {
    count: (state) => state.deck.length,
    isFull: (state) => state.deck.length >= 30
  },

  actions: {
    addCard(uid) {
      if (this.isFull) return false
      if (this.deck.includes(uid)) return false
      this.deck.push(uid)
      return true
    },

    removeCard(uid) {
      this.deck = this.deck.filter(u => u !== uid)
    },

    clear() {
      this.deck = []
    }
  }
})
