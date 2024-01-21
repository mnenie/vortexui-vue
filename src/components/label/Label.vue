<script setup lang="ts">
import { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <label class="text-sm text-left font-medium text-black-main" :class="props.class ?? ''">
    <slot />
  </label>
</template>