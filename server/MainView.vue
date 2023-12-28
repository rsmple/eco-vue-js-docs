<template>
  <div class="grid grid-cols-2 gap-10 p-10">
    <WButton :semantic-type="SemanticType.POSITIVE">
      {{ a }}
    </WButton>
    <WButton :semantic-type="SemanticType.NEGARIVE" @click="a++">
      +
    </WButton>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import WButton from '@texturered/eco-vue-js/dist/components/Button/WButton.vue'
import {SemanticType} from '@texturered/eco-vue-js/dist/utils/SemanticType'

const a = ref(123)

</script>
