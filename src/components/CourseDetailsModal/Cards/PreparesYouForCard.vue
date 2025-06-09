<template>
  <AccordionCard
    title="Prepares you for"
    subtitle="Who should take this course"
    icon="tx:data-enrichment"
    :items="preparedItems"
    :allow-multiple="true"
    :default-expanded="[0]"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

import AccordionCard from '@/components/ui/AccordionCard.vue'

const props = defineProps<{
  items: string[]
}>()

const preparedItems = computed(() => [
  {
    title: 'Target Audience',
    description: 'This course is designed for:',
    items: props.items
  }
])
</script>
