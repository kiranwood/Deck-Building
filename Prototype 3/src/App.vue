<template>
  <div id="app-root">
    <AppHeader />
    <router-view />
    <Teleport to="body">
      <Transition name="toast">
        <div v-if="toast.visible" class="toast">{{ toast.message }}</div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import { useCardStore } from '@/stores/cardStore.js'
import { useToast } from '@/composables/useToast.js'

const cardStore = useCardStore()
const { toast } = useToast()

onMounted(() => {
  cardStore.init()
})
</script>

<style scoped>
#app-root {
  position: relative;
  z-index: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
