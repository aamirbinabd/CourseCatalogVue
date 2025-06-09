<template>
  <div class="flex items-center gap-[10px]">
    <Icon icon="material-symbols:check" class="text-tx-blue" />
    <p class="leading-tight">{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
defineProps<{
  label: string
}>()
</script>
