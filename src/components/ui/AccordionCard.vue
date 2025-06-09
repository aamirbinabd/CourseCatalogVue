<template>
  <LightCard class="flex flex-col gap-[28px] p-[20px] w-full text-tx-dark">
    <CardHeader :title="title" :subtitle="subtitle" :icon="icon" />

    <div class="flex flex-col">
      <Accordion
        :items="items"
        :allow-multiple="allowMultiple"
        :default-expanded="defaultExpanded"
      />
    </div>
  </LightCard>
</template>

<script setup lang="ts">
import Accordion from '@/components/ui/Accordion.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import LightCard from '@/components/ui/LightCard.vue'

interface AccordionItem {
  title: string
  description?: string
  items?: string[]
}

defineProps<{
  title: string
  subtitle: string
  icon: string
  items: AccordionItem[]
  allowMultiple?: boolean
  defaultExpanded?: number[]
}>()
</script>
