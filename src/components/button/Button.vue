<script setup lang="ts">
import { HTMLAttributes, computed } from 'vue';

type Props = {
  disabled?: boolean,
  size?: SizeEnum,
  variant?: VariantEnum
  class?: HTMLAttributes['class']
}
enum SizeEnum { Small = 'sm', Medium = 'md', Large = 'lg' }
enum VariantEnum { Default = 'default', Outline = 'outline' }

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  size: SizeEnum.Small,
  variant: VariantEnum.Default,
  class: ''
})

const variant = computed(() => {
  switch (props.variant) {
    case VariantEnum.Default:
      return 'bg-black-main text-white hover:bg-black-main/90 transition duration-150 ease'
    case VariantEnum.Outline:
      return 'border border-gray-200 transition duration-150 ease bg-white text-gray-900 hover:bg-gray-100   focus:outline-none'
  }
})
const size = computed(() => {
  switch (props.size) {
    case SizeEnum.Small:
      return 'h-9 rounded-md px-4'
    case SizeEnum.Medium: 
      return 'h-10 rounded-md px-6 text-md'
    case SizeEnum.Large:
      return 'h-11 rounded-md px-8 text-md'
  }
})  
</script>

<template>
  <button
    class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden"
    :disabled="props.disabled" :class="[variant, size, props.class]">
    <slot />
  </button>
</template>