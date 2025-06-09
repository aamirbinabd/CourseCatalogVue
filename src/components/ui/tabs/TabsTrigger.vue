<script setup lang="ts">
import { inject, computed, type Ref } from 'vue'

// Declare custom attributes for TypeScript
declare module '@vue/runtime-dom' {
  interface ButtonHTMLAttributes {
    'data-state'?: string
  }
}

interface Props {
  value: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
})

const selectedTab = inject<Ref<string>>('selectedTab')

const isSelected = computed(() => selectedTab?.value === props.value)

function select() {
  if (!props.disabled && selectedTab) {
    selectedTab.value = props.value
  }
}
</script>

<template>
  <button
    :class="[
      'relative inline-flex items-center justify-center whitespace-nowrap px-[18px] py-[14px] h2-ibm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-r-[1px] border-r-dull-white before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:transform before:scale-x-0 before:bg-tx-blue before:transition-transform',
      isSelected ? 'bg-light-white before:scale-x-100' : 'bg-tab-gradient'
    ]"
    role="tab"
    :aria-selected="isSelected"
    :data-state="isSelected ? 'active' : 'inactive'"
    :disabled="disabled"
    @click="select"
  >
    <slot />
  </button>
</template>
