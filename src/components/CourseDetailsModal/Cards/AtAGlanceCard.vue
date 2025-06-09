<template>
  <LightCard class="p-[20px] flex flex-row justify-between gap-[15px] bg-gradient">
    <div class="flex flex-col gap-[28px] max-w-[615px]">
      <CardHeader
        title="At a Glance"
        subtitle="A snapshot of what makes this course standout."
        icon="tx:view"
      />

      <div class="flex flex-wrap gap-[10px]">
        <template v-for="row in formattedFeatures" :key="row[0]">
          <div class="flex flex-row gap-[10px] sm:flex-wrap">
            <InfoTile
              v-for="item in row"
              :key="item"
              :title="item"
              variant="blue"
              :icon-size="20"
            />
          </div>
        </template>
      </div>
    </div>

    <div>
      <img src="https://placehold.com/334x262" class="md:hidden w-[334px] h-[262px] object-cover" />
    </div>
  </LightCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import CardHeader from '@/components/ui/CardHeader.vue'
import LightCard from '@/components/ui/LightCard.vue'

import InfoTile from '../InfoTile.vue'

const props = defineProps<{
  keyFeatures: string[]
}>()

// Convert the flat array into rows of 2 items each
const formattedFeatures = computed(() => {
  const rows: string[][] = []
  for (let i = 0; i < props.keyFeatures.length; i += 2) {
    rows.push(props.keyFeatures.slice(i, i + 2))
  }
  return rows
})
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(
    90deg,
    #fff 8.14%,
    #fff 14%,
    #fff 74.52%,
    rgba(173, 233, 246, 0.5) 100%
  );
}
</style>
