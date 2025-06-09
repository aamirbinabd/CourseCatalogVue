<template>
  <AccordionCard
    title="What you learn"
    subtitle="Overview of topics covered in this course"
    icon="tx:data-enrichment"
    :items="learningItems"
    :allow-multiple="true"
    :default-expanded="[0]"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

import AccordionCard from '@/components/ui/AccordionCard.vue'

interface CoreConcept {
  title: string
  details: string
}

const props = defineProps<{
  topics: CoreConcept[]
}>()

const learningItems = computed(() =>
  props.topics.map((topic) => ({
    title: topic.title,
    description: topic.details,
    items: []
  }))
)
</script>
