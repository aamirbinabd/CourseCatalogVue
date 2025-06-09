<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  icon: string
  label: string
  details?: string
}

defineProps<Props>()

defineOptions({
  name: 'MarkerHighlight'
})
</script>

<template>
  <div class="h3-ibm">
    <div class="flex items-center gap-[7px]">
      <Icon :icon="icon" class="w-[20px] h-[20px]" />
      {{ label }}
      <span v-if="details" class="text-tx-blue h6-inter-med mb-[-4px]">{{ details }}</span>
    </div>
  </div>
</template>
