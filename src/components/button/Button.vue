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
      return 'bg-slate-600 text-gray-50 transition duration-150 ease-in hover:bg-slate-600/90 dark:bg-gray-50 dark:text-gray-950 dark:hover:bg-gray-50/90'
    case VariantEnum.Outline:
      return 'border border-slate-600 transition duration-150 ease-in bg-white text-slate-600 dark:border-slate-600 dark:bg-slate-600 dark:hover:bg-slate-600 dark:hover:text-gray-50'
  }
})
const size = computed(() => {
  switch (props.size) {
    case SizeEnum.Small:
      return 'h-9 rounded-md px-4'
    case SizeEnum.Medium: 
      return 'h-10 rounded-md px-6'
    case SizeEnum.Large:
      return 'h-11 rounded-md px-8'
  }
})
</script>

<template>
  <button
    class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gslate-600 dark:focus-visible:ring-slate-200"
    :disabled="props.disabled" :class="[variant, size, props.class]">
    <slot />
  </button>
</template>
