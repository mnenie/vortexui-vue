<script setup lang="ts">
import { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div class="animate-pulse bg-gray-200 h-20 w-20 rounded-full" :class="[props.class ?? '']" />
</template>
