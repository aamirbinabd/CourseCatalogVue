<template>
  <div class="flex flex-col gap-[27px] max-w-[484px]">
    <div class="">
      <label
        class="h5-inter text-white px-[7px] py-[4px] rounded-[5px]"
        v-html="selectedCourse.type"
        :class="getCourseTypeClass"
      >
      </label>
    </div>
    <h4 class="text-tx-dark h2-inter">{{ selectedCourse.title }}</h4>
    <h5 class="text-tx-dark h5-ibm">{{ selectedCourse.description }}</h5>
  </div>
</template>

<script>
export default {
  props: ['selectedCourse'],
  computed: {
    getCourseTypeClass() {
      switch (this.selectedCourse.type) {
        case 'Unified Course':
          return 'bg-tx-orange'
        case 'Essential Course':
          return 'bg-[#328FC3]'
        case 'Master Course':
          return 'bg-warning'
        case 'Specialist Course':
          return 'bg-tx-dark'
        default:
          return 'bg-tx-dark'
      }
    }
  }
}
</script>
