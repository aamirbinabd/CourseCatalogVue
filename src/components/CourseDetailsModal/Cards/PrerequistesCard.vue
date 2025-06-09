<template>
  <LightCard class="flex flex-col gap-[28px] p-[20px] w-full">
    <CardHeader
      title="Prerequisites"
      subtitle="Baseline knowledge for this course."
      icon="tx:skill-level"
    />
    <div class="flex flex-col gap-[10px] mb-[90px]">
      <ChecklistItem v-for="item in items" :key="item" :label="item" />
    </div>
  </LightCard>
</template>

<script setup lang="ts">
import CardHeader from '@/components/ui/CardHeader.vue'
import ChecklistItem from '@/components/ui/ChecklistItem.vue'
import LightCard from '@/components/ui/LightCard.vue'

defineProps<{
  items: string[]
}>()
</script>
