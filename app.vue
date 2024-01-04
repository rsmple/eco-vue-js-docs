<template>
  <div id="app">
    <NuxtPage v-slot="{Component}">
      <Transition
        enter-active-class="transition-opacity duration-500"
        leave-active-class="transition-opacity duration-500"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
        mode="out-in"
        :css="mounted"
      >
        <component :is="Component" />
      </Transition>
    </NuxtPage>

    <WTooltipContainer />

    <WNotify />

    <WModal />
  </div>
</template>

<script setup lang="ts">
import WNotify from '@texturered/eco-vue-js/dist/components/Notify/WNotify.vue'
import WModal from '@texturered/eco-vue-js/dist/components/Modal/WModal.vue'
import WTooltipContainer from '@texturered/eco-vue-js/dist/components/Tooltip/WTooltipContainer.vue'

const mounted = ref(false)

onMounted(async () => {
  await nextTick()

  mounted.value = true
})

</script>
