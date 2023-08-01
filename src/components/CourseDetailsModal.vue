<template>
  <!-- Course Slide Up Modal -->
  <Transition name="slide-up" mode="out-in">
    <div v-if="selectedCourse" class="absolute top-0 left-0 right-0 h-full bg-bg-white">
      <!-- Header -->
      <ModalHeader :selectedCourse="selectedCourse" @hideCourseDetails="hideCourseDetails" />

      <!-- Info -->
      <div
        class="flex flex-wrap justify-between gap-[45px] pt-[55px] pb-[145px] max-w-[1030px] w-full mx-auto px-[18px] md:justify-center md:pb-[230px]"
      >
        <CourseTitleInfo :selectedCourse="selectedCourse" />
        <img src="/assets/action-card.png" alt="" />
      </div>

      <!-- Details Tile -->

      <CourseDetails :selectedCourse="selectedCourse" />
      <!-- Outcome -->
      <CourseOutcome :selectedCourse="selectedCourse" />

      <!-- Footer -->
      <div class="text-tx-dark DottedBg flex flex-col pt-[55px] pb-[75px] px-[18px] h-full">
        <h3 class="h2-inter flex justify-center mx-auto mb-[56px]">
          Alumni Who Enrolled in Similar Courses
        </h3>
        <div class="flex mx-auto flex-wrap gap-[25px]">
          <img src="/assets/interview-post.png" alt="" />
          <img src="/assets/interview-post2.png" alt="" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from './CourseDetailsModal/ModalHeader.vue'
import CourseTitleInfo from './CourseDetailsModal/CourseTitleInfo.vue'
import CourseDetails from './CourseDetailsModal/CourseDetails.vue'
import CourseOutcome from './CourseDetailsModal/CourseOutcome.vue'

export default {
  components: { ModalHeader, CourseTitleInfo, CourseDetails, CourseOutcome },
  props: ['selectedCourse'],
  methods: {
    hideCourseDetails() {
      this.$emit('hideCourseDetails')
    }
  }
}
</script>
