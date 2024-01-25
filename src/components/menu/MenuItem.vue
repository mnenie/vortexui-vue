<script setup lang="ts">
import { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

</script>

<template>
  <div class="flex items-center justify-center rounded-sm text-sm font-medium px-3 py-1.5 cursor-pointer hover:bg-gray-100"
  :class="{ ...props.class }">
    <slot />
  </div>
</template>