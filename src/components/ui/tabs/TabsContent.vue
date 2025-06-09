<script setup lang="ts">
import { inject, computed, type Ref } from 'vue'

// Declare custom attributes for TypeScript
declare module '@vue/runtime-dom' {
  interface HTMLAttributes {
    'data-state'?: string
  }
}

interface Props {
  value: string
}

const props = defineProps<Props>()

const selectedTab = inject<Ref<string>>('selectedTab')

const isSelected = computed(() => selectedTab?.value === props.value)
</script>

<template>
  <div
    v-show="isSelected"
    role="tabpanel"
    :tabindex="isSelected ? 0 : -1"
    :aria-labelledby="`tab-trigger-${value}`"
    :data-state="isSelected ? 'active' : 'inactive'"
  >
    <slot />
  </div>
</template>
