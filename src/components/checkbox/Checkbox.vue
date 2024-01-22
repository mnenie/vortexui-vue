<script setup lang="ts">
import { HTMLAttributes } from 'vue';

type Props = {
  checked?: boolean
  class?: HTMLAttributes['class']
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  checked: false,
  class: '',
  disabled: false
})
const emit = defineEmits(['update:checked'])
</script>

<template>
  <div class="inline-flex items-center">
    <label class="relative flex items-center rounded-full cursor-pointer" htmlFor="checkbox">
      <input type="checkbox" :checked="checked" @change="emit('update:checked', ($event.target as HTMLInputElement).value)" :disabled="disabled"
        class="before:content[''] before:top-1/2 before:left-1/2 before:block before:h-2 before:w-2 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity before:absolute peer relative h-4 w-4 cursor-pointer appearance-none rounded border border-black-main transition-all checked:border-black-main checked:bg-black-main checked:before:bg-black-main disabled:opacity-50 disabled:cursor-not-allowed" id="checkbox" :class="[props.class]" />
      <span
        class="absolute text-white transition-opacity opacity-0 pointer-events-none top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
          stroke="currentColor" stroke-width="1">
          <path fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"></path>
        </svg>
      </span>
    </label>
  </div>
</template>
