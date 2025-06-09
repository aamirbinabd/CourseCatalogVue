<template>
  <div>
    <!-- Pre-title content (like badge) -->
    <slot name="pre-title" />

    <!-- Title area with icon -->
    <div class="flex flex-row items-center gap-[20px]">
      <div v-if="icon">
        <div
          class="flex items-center justify-center w-[46px] h-[46px] rounded-[7px] border-dull-white border"
        >
          <Icon :icon="icon" class="w-[32px] h-[32px]" />
        </div>
      </div>
      <div class="flex-col flex-grow gap-[2px]">
        <h1
          :class="[font === 'ibm' ? 'h1-ibm' : 'h3-inter', titleClass, 'text-tx-dark']"
          v-html="title"
        ></h1>
        <p v-if="subtitle" class="h3-ibm text-gray-600">{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  title: string
  subtitle?: string
  icon?: string
  font?: 'inter' | 'ibm'
  titleClass?: string
}

withDefaults(defineProps<Props>(), {
  font: 'inter'
})
</script>
