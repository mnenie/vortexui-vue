<script setup lang="ts">
import { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm p-5 border" :class="[props.class ?? '']">
    <slot />
  </div>
</template>