<template>
  <Transition name="slide-up">
    <div v-if="course" class="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div class="fixed inset-x-0 bottom-0 w-full bg-white h-[100vh] overflow-y-auto">
        <ModalHeader :domain="course.domain" :course-name="course.title" @close="$emit('close')" />
        <div class="container px-[20px]">
          <div class="max-w-[1215px] mx-auto py-[56px]">
            <CourseDetailsHeader :course="course" />
          </div>
        </div>
        <CourseDetailsBody :course="course" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type { Course } from '@/types'

import CourseDetailsBody from './CourseDetailsBody.vue'
import CourseDetailsHeader from './CourseDetailsHeader.vue'
import ModalHeader from './ModalHeader.vue'

defineOptions({
  name: 'CourseDetailsModalView'
})

defineProps<{ course: Course | null }>()

defineEmits<{ (e: 'close'): void }>()
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0);
}
</style>
