import { createRouter, createWebHashHistory } from 'vue-router'
import CollectionView from '@/views/CollectionView.vue'
import DeckBuilderView from '@/views/DeckBuilderView.vue'

const routes = [
  {
    path: '/',
    name: 'collection',
    component: CollectionView
  },
  {
    path: '/deck-builder',
    name: 'deck-builder',
    component: DeckBuilderView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
