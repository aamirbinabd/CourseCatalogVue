<template>
  <input
    type="text"
    class="Gradient h4-ibm-med px-[15px] py-[9px] w-full rounded-[7px] border border-solid border-dull-white active:border-tx-blue focus:border-tx-blue"
    placeholder="Search All Courses"
    v-model="searchTerm"
    @input="searchCourses"
  />
</template>

<style>
.Gradient {
  background: var(--gradients-static-gradient, linear-gradient(180deg, #fff 40.81%, #f2f2f2 100%));
}
</style>

<script>
export default {
  name: 'SearchInput',
  props: {
    courses: {
      type: Array,
      required: true
    },
    searchCourses: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      searchTerm: ''
    }
  }
}
</script>
