<template>
  <div class="h-[0.1px] flex justify-center items-center w-full mx-auto text-tx-dark px-[18px]">
    <div
      class="LightCard grid grid-cols-4 justify-items-center p-[35px] w-[1030px] md:grid-cols-2 md:gap-[30px] sm:grid-cols-1 sm:justify-items-start"
    >
      <div class="flex items-center gap-[18px]">
        <img src="/assets/artwork/44/doc-check.svg" class="__icon" />
        <div class="flex flex-col gap-[5px] g max-w-[150px]">
          <h5 class="h5-inter">Prerequisites</h5>
          <p class="h6-inter-reg">{{ selectedCourse.prerequisites.join(', ') }}</p>
        </div>
      </div>
      <div class="flex items-center gap-[18px]">
        <img src="/assets/artwork/44/calendar-clock.svg" class="__icon" />
        <div class="flex flex-col gap-[5px] max-w-[150px]">
          <h5 class="h5-inter">Duration</h5>
          <p class="h6-inter-reg">{{ selectedCourse.duration }}</p>
        </div>
      </div>
      <div class="flex items-center gap-[18px]">
        <img src="/assets/artwork/44/star-badge.svg" class="__icon" />
        <div class="flex flex-col gap-[5px] g max-w-[150px]">
          <h5 class="h5-inter">What's Included</h5>
          <p class="h6-inter-reg">
            {{ selectedCourse.includedCourses.join(', ') }}
          </p>
        </div>
      </div>
      <div class="flex items-center gap-[18px]">
        <img src="/assets/artwork/44/location.svg" class="__icon" />
        <div class="flex flex-col gap-[5px] g max-w-[150px]">
          <h5 class="h5-inter">Location</h5>
          <span class="h6-inter-reg">{{ selectedCourse.location }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h5 {
  width: fit-content;
}

span {
  width: 100%;
  max-width: max-content;
}
</style>

<script>
export default {
  props: ['selectedCourse']
}
</script>
