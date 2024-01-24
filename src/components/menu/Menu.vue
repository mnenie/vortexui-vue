<script setup lang="ts">
import { HTMLAttributes } from 'vue';

const props = defineProps<{
  class? : HTMLAttributes["class"]
}>()
</script>

<template>
  <div class="flex items-center space-x-1 rounded-md border border-gray-200 h-10 p-1 max-w-fit" :class="[props.class ?? '']">
    <slot />
  </div>
</template>