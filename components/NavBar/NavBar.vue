<template>
  <WNavBar>
    <div class="h-full w-nav-bar-width flex flex-col overflow-y-auto no-scrollbar overscroll-contain">
      <slot />
    </div>
  </WNavBar>
</template>

<script lang="ts" setup>
import WNavBar from '@texturered/eco-vue-js/dist/components/Nav/WNavBar.vue'

</script>
