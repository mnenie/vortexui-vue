<script setup lang="ts">
import { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div class="text-lg font-semibold text-black-main" :class="[props.class ?? '']">
    <slot />
  </div>
</template>