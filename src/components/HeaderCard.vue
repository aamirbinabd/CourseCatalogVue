<template>
  <SolidCard class="p-[20px]">
    <h3 class="h2-inter mb-[12px] text-tx-dark">
      {{ title }}
    </h3>
    <div class="flex flex-row items-center gap-[7px] mb-[20px]">
      <Icon icon="material-symbols:interests-outline" class="text-dull-grey" />
      <p class="h5-inter text-dull-grey">{{ courseCount }} Courses & Programs</p>
    </div>
    <div class="max-w-[440px]">
      <h3 class="h5-inter mb-[12px]">Introduction to {{ subtitle }}</h3>
      <p class="text-tx-dark">{{ description }}</p>
    </div>
  </SolidCard>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

import SolidCard from './ui/SolidCard.vue'

defineProps<{ title: string; courseCount: number; subtitle: string; description: string }>()
</script>
