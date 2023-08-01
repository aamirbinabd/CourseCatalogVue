<template>
  <div
    class="CourseCard LightCard p-[20px] mb-[24px] max-w-[424px] w-full cursor-pointer ml:min-w-full"
    @click="handleCourseDetails"
  >
    <div class="border-b border-solid border-light-grey mb-[15px]">
      <div class="mb-[19px]">
        <label
          class="h5-inter text-white px-[7px] py-[4px] rounded-[5px]"
          v-html="course.type"
          :class="
            course.type === 'Unified Course'
              ? 'bg-tx-orange'
              : course.type === 'Essential Course'
              ? 'bg-[#328FC3]'
              : course.type === 'Master Course'
              ? 'bg-warning'
              : course.type === 'Specialist Course'
              ? 'bg-tx-dark'
              : 'bg-tx-dark'
          "
        >
        </label>
      </div>
      <h1 class="h3-inter mb-[22px]" v-html="course.title"></h1>
      <p class="h3-ibm pb-[15px]">
        Duration: <span class="text-tx-blue">{{ course.duration }}</span>
      </p>
    </div>
    <p class="h3-ibm mb-[15px]">Included Courses & More:</p>
    <ul class="h6-inter-med flex flex-wrap gap-[8px] mb-[15px]">
      <li
        class="w-max px-[12px] py-[6px] rounded-[35px] border border-solid border-tx-dark"
        v-for="(course, index) in course.includedCourses"
        :key="index"
      >
        {{ course }}
      </li>
    </ul>

    <p class="text-tx-dark mb-[11px]" v-html="course.description"></p>
    <button @click.stop="handleCourseDetails" class="h3-ibm text-tx-blue underline mt-[5px]">
      Read More
    </button>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    course: {
      type: Object,
      required: true
    },
    showCourseDetails: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleCourseDetails() {
      this.showCourseDetails(this.course)
    }
  }
}
</script>
