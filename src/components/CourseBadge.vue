<template>
  <Badge :label="course.type || 'type?'" :class="badgeColorClass + ' text-white'" />
</template>

<script setup lang="ts">
import { Course } from '@/types'

import Badge from './ui/Badge.vue'

const props = defineProps<{ course: Course }>()

const badgeColorClass = computed(() => {
  switch (props.course.type) {
    case 'essential-course':
      return 'bg-[#328FC3]'
    case 'specialist-course':
      return 'bg-tx-dark'
    case 'unified-program':
      return 'bg-tx-orange'
    case 'career-program':
      return 'bg-tx-highlight-gradient'
    default:
      return 'bg-tx-dark'
  }
})
</script>
