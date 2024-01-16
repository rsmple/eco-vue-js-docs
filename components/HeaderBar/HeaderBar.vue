<template>
  <WHeaderBar
    :title="route.meta.title"
    :search="modelValue"
    :search-enabled="route.meta.headerSearch === true"
    :header-padding="headerPadding"
    class="-pl--nav-bar-width -pr--inner-margin"
    @update:search="updateModelValue"
  >
    <template
      v-if="$route.meta.headerTitleComponent"
      #title
    >
      <component :is="$route.meta.headerTitleComponent" />
    </template>

    <template
      v-if="$route.meta.headerSearchComponent"
      #search
    >
      <component :is="$route.meta.headerSearchComponent" />
    </template>
  </WHeaderBar>
</template>

<script lang="ts" setup>
import WHeaderBar from 'eco-vue-js/dist/components/HeaderBar/WHeaderBar.vue'
import {eventEmitter} from '@/utils/EventEmitter'

const SEARCH_KEY = 'search'

const route = useRoute()

const {modelValue, updateModelValue} = useFilterString(SEARCH_KEY)

const headerPadding = ref<number>(0)

const updateHeaderPadding = (value: number) => {
  headerPadding.value = value
}

onBeforeMount(() => {
  eventEmitter.on('update:header-padding', updateHeaderPadding)
})

onUnmounted(() => {
  eventEmitter.off('update:header-padding', updateHeaderPadding)
})

</script>
