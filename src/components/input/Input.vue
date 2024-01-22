<script setup lang="ts">
import { HTMLAttributes, InputTypeHTMLAttribute } from 'vue';

type Props = {
  modelValue?: string | number
  placeholder?: string
  type?: InputTypeHTMLAttribute
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Input',
  type: 'text',
  class: ''
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input :value="modelValue" :placeholder="placeholder" :type="type" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" class="flex h-10 w-full rounded-md border border-gray-200 bg-white transition duration-150 ease px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:text-black-main disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-black-main focus-visible:ring-offset-2" :class="props.class ?? ''" />
</template>
