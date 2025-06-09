<script setup lang="ts">
import { provide, ref, watch } from 'vue'

interface Props {
  defaultValue?: string
  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  defaultValue: undefined,
  modelValue: undefined
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const selectedTab = ref(props.modelValue || props.defaultValue || '')

// Watch for v-model changes
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== undefined) {
      selectedTab.value = newValue
    }
  }
)

// Watch for internal changes
watch(selectedTab, (value) => {
  emit('update:modelValue', value)
})

// Provide the selected tab value and setter to child components
provide('selectedTab', selectedTab)

defineOptions({
  name: 'TabsContainer'
})
</script>

<template>
  <div class="w-full">
    <slot />
  </div>
</template>
