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
  <input :value="modelValue" :placeholder="placeholder" :type="type" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" class="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:border-slate-600 focus-visible:text-slate-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-gray-400 dark:focus-visible:border-slate-200" :class="props.class ?? ''" />
</template>
