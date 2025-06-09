<template>
  <AccordionCard
    title="Lab Experience"
    subtitle="Infrastructure you'll work with hands-on"
    icon="tx:calculator"
    :items="labItems"
    :allow-multiple="true"
    :default-expanded="[0]"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

import AccordionCard from '@/components/ui/AccordionCard.vue'

interface LabItem {
  title: string
  items: Array<{
    title: string
    details: string | null
  }>
}

const props = defineProps<{
  items: LabItem[]
}>()

const labItems = computed(() =>
  props.items.map((item) => ({
    title: item.title,
    description: "Infrastructure you'll work with hands-on",
    items: item.items.map((item) => item.title)
  }))
)
</script>
