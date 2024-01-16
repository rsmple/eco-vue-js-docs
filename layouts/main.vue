<template>
  <div class="h-screen w-full grid not-print:grid-cols-[var(--nav-bar-width),1fr] print:grid-cols-1">
    <NavBar>
      <WNavItemTransition>
        <WNavItem :to="{name: 'index'}" title="Home" />

        <WNavItemExpand :to="{name: 'index-components'}" title="Components">
          <WNavItem :to="{name: 'index-components-button'}" title="Button" />

          <WNavItem :to="{name: 'index-components-input'}" title="Input" />
        </WNavItemExpand>

        <WNavItem :to="{name: 'index-settings'}" title="Settings" />
      </WNavItemTransition>
    </NavBar>

    <HeaderBar />

    <div class="h-auto w-full not-print:pt-header-height overscroll-x-contain not-print:col-start-2 not-print:sm:-px--inner-margin">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import WNavItemTransition from 'eco-vue-js/dist/components/Nav/WNavItemTransition.vue'
import WNavItem from 'eco-vue-js/dist/components/Nav/WNavItem.vue'
import WNavItemExpand from 'eco-vue-js/dist/components/Nav/WNavItemExpand.vue'

</script>
