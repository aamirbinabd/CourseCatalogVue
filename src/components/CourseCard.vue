<template>
  <LightCard class="w-full max-w-[424px] cursor-pointer ml:min-w-full">
    <ContentCard :title="course.title" :show-margin="hasIncludedCourses" @click="$emit('click')">
      <!-- Badge goes in pre-title slot -->
      <template #pre-title>
        <CourseBadge :course="course" class="w-fit block mb-[15px]" />
      </template>

      <!-- Duration goes in post-title slot -->
      <template #post-title>
        <div class="flex flex-row gap-[15px] mt-[15px]">
          <div v-for="(item, i) in infoItems" :key="i" class="flex flex-row items-center gap-[7px]">
            <Icon :icon="item.icon" class="text-tx-dark" />
            <p class="h3-ibm">{{ item.label }} {{ item.value }}</p>
          </div>
        </div>
      </template>

      <!-- Main content -->
      <div v-if="hasIncludedCourses">
        <div class="flex items-center gap-[7px] mb-[15px]">
          <Icon icon="material-symbols:interests-outline" class="text-tx-dark" />
          <p class="h3-ibm">Included Courses & More:</p>
        </div>
        <ul class="h6-inter-med flex flex-wrap gap-[8px] mb-[15px]">
          <CourseListItem
            v-for="(includedCourse, index) in course.includedCourses"
            :key="index"
            :text="includedCourse"
          />
        </ul>
      </div>
      <HyperLink
        label="Read More"
        href="#"
        class="mt-[20px]"
        variant="arrow-outward"
        @click.stop="$emit('click')"
      />
    </ContentCard>
  </LightCard>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

import { Course } from '@/types'

import ContentCard from './ContentCard.vue'
import CourseBadge from './CourseBadge.vue'
import CourseListItem from './CourseListItem.vue'
import HyperLink from './ui/HyperLink.vue'
import LightCard from './ui/LightCard.vue'

const props = defineProps<{
  course: Course
}>()

const hasIncludedCourses = computed(
  () => props.course.includedCourses && props.course.includedCourses.length > 0
)

const infoItems = computed(() => [
  {
    icon: 'material-symbols:signal-cellular-alt',
    label: '',
    value: props.course.level || 'level?'
  },
  {
    icon: 'material-symbols:calendar-clock-outline',
    label: '',
    value:
      props.course.deliveryOptions
        .filter((option) => option.type !== 'Weekends')
        .map((option) => option.duration)
        .join(' - ') || 'duration?'
  }
])

defineEmits<{ (e: 'click'): void }>()
</script>
