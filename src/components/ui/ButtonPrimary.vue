<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  href: string
  label: string
  fullWidth?: boolean
  variant?: 'filled' | 'outline'
  arrowDirection?: 'forward' | 'down'
}

withDefaults(defineProps<Props>(), {
  variant: 'filled',
  fullWidth: false,
  arrowDirection: 'forward'
})
</script>

<template>
  <a
    :href="href"
    class="relative flex items-start [filter:drop-shadow(6px_-6px_0px_rgba(0,0,0,0.15))] transition-colors duration-200 rounded"
    :class="[
      { 'w-full': fullWidth },
      variant === 'filled' ? 'hover:bg-tx-blue/80' : 'hover:bg-gray-50'
    ]"
  >
    <div
      class="flex items-center justify-start h-[37px] px-[13px] py-[7.5px] transition-colors duration-200 label-text rounded w-full"
      :class="[
        { 'w-full': fullWidth },
        variant === 'filled'
          ? 'bg-tx-blue text-white'
          : 'bg-white border-[1.9px] border-tx-dark text-tx-dark'
      ]"
    >
      <div class="flex flex-row justify-between w-full gap-[5px]">
        {{ label }}
        <Icon
          :icon="`material-symbols:arrow-${arrowDirection === 'forward' ? 'forward' : 'downward'}`"
          class="w-[17px] h-[17px]"
        />
      </div>
    </div>
  </a>
</template>
