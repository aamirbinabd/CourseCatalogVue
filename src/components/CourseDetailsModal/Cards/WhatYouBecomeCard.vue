<template>
  <AccordionCard
    title="What you become"
    subtitle="Roles and career paths this course opens up"
    icon="tx:financial-assets"
    :items="careerItems"
    :allow-multiple="true"
    :default-expanded="[0]"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

import AccordionCard from '@/components/ui/AccordionCard.vue'

const props = defineProps<{
  roles: string[]
  skills: string[]
}>()

const careerItems = computed(() => {
  return props.roles.map((role) => ({
    title: role,
    description: props.skills.find((skill) => skill === role)
  }))
})
</script>
