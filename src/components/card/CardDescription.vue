<script setup lang="ts">
import { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div class="text-sm text-black-main font-normal" :class="[props.class ?? '']">
    <slot />
  </div>
</template>