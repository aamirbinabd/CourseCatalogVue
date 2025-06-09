<template>
  <div class="flex flex-row flex-wrap gap-[50px] pb-[30px]">
    <div class="flex flex-col gap-[28px] max-w-[740px]">
      <div class="flex flex-row items-center gap-[10px]">
        <CourseBadge :course="course" class="w-fit" />
        <Badge label="344 Enrolled" class="bg-dull-white text-tx-dark" />
      </div>
      <h1 class="h2-inter">{{ course.title }}</h1>
      <p>{{ course.description }}</p>
      <div class="flex flex-row flex-wrap gap-6">
        <InfoTile
          title="Intermediate Lvl"
          subtitle="Check prerequisites"
          icon="tx:skill-level"
          link="#prerequisites"
        />
        <InfoTile
          :title="
            course.deliveryOptions
              .filter((option) => option.type !== 'Weekends')
              .map((option) => option.duration)
              .join(' - ')
          "
          subtitle="Check learning formats"
          icon="tx:event-schedule"
          link="#learning-formats"
        />
        <InfoTile
          :title="
            course.trainingModes
              .map((mode) => (mode.mode === 'Offline' ? 'In-person' : 'Livestream'))
              .join(' & ')
          "
          subtitle="Check how to attend"
          icon="tx:events-alt"
          link="#how-to-attend"
        />
      </div>
    </div>

    <ActionCard
      title="Talk to a Mentor, Get Advice or Enroll"
      duration="15 Mins"
      description="Your questions answered and your doubts cleared."
      callback-label="Request a Call Back"
      callback-href="#request-callback"
      text-label="Text Instead"
      text-href="#text-chat"
      pdf-href="/course.pdf"
    />
  </div>
</template>

<script setup lang="ts">
import type { Course } from '@/types'

import CourseBadge from '../CourseBadge.vue'
import ActionCard from '../ui/ActionCard.vue'
import Badge from '../ui/Badge.vue'

import InfoTile from './InfoTile.vue'

defineProps<{
  course: Course
}>()
</script>
