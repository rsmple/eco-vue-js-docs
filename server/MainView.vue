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
import WButton from '@whitespots/ui-kit/dist/components/Button/WButton.vue'
import {SemanticType} from '@whitespots/ui-kit/dist/utils/SemanticType'

const a = ref(123)

</script>
