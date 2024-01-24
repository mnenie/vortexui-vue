<script setup lang="ts">
import { HTMLAttributes } from 'vue';

type Props = {
  class?: HTMLAttributes["class"]
  text?: boolean
  img?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
  text: true,
  img: false
})
</script>

<template>
  <div :class="{'object-cover h-full w-full': props.img}">
    <slot />
  </div>
</template>
