<script setup lang="ts">
import { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div class="flex flex-col mb-5 space-y-1" :class="[props.class ?? '']">
    <slot />
  </div>
</template>