<script setup lang="ts">
import { HTMLAttributes, computed } from 'vue';

type Size = 'small' | 'medium' | 'large' | 'extra'
type Shape = 'circle' | 'square'
type Props = {
  class?: HTMLAttributes["class"]
  size?: Size
  shape?: Shape
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
  shape: 'circle',
  size: 'medium'
})

const shape = computed(() => {
  switch(props.shape){
    case 'circle':
      return 'rounded-full'
    case 'square':
      return 'rounded-md'
  }
})
const size = computed(() => {
  switch(props.size){
    case 'small': 
      return 'h-8 w-8 text-sm'
    case 'medium': 
      return 'h-10 w-10 text-md'
    case 'large': 
      return 'h-14 w-14 text-xl'
    case 'extra': 
      return 'h-16 w-16 text-2xl'
  }
})
</script>

<template>
  <div class="inline-flex items-center justify-center overflow-hidden font-normal select-none border border-gray-200" :class="[props.class, size, shape]">
    <slot />
  </div>
</template>