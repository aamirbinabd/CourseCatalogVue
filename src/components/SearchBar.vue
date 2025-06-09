<template>
  <div class="flex flex-row justify-between gap-[15px]">
    <div
      class="InputContainer flex flex-row justify-between gap-[15px] px-[15px] py-[9px] w-full rounded-[7px] border border-solid border-dull-white bg-light-white"
      :class="{ 'input-focused': isFocused }"
    >
      <input
        ref="inputRef"
        type="text"
        class="h4-ibm-med bg-transparent outline-none w-full"
        :placeholder="placeholder"
        :value="modelValue"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <Icon icon="material-symbols:search" class="text-dull-grey w-[24px] h-[24px]" />
    </div>
    <slot name="append" />
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const inputRef = ref<HTMLInputElement | null>(null)
const isFocused = ref(false)

defineProps<{
  modelValue: string
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  const value = target.value
  emit('update:modelValue', value)
}

function handleFocus() {
  isFocused.value = true
}

function handleBlur() {
  isFocused.value = false
}
</script>

<style scoped>
.input-focused {
  box-shadow: 0 0 0 2px var(--tx-blue);
  outline: none;
}

.InputContainer input {
  caret-color: var(--tx-blue);
}
</style>
