<template>
  <div class="SolidCard p-[20px]">
    <h3 class="h2-inter mb-[12px] text-tx-dark">
      {{ titleValue }}
    </h3>
    <p class="h4-inter text-dull-grey mb-[27px]">{{ courseCountValue }} Courses in Total</p>
    <div class="max-w-[440px]">
      <h3 class="h5-inter mb-[12px]">Introduction to {{ subtitleValue }}</h3>
      <p class="text-tx-dark">{{ descriptionValue }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderCard',
  props: {
    titleValue: {
      type: String,
      required: true
    },
    courseCountValue: {
      type: Number,
      required: true
    },
    subtitleValue: {
      type: String,
      required: true
    },
    descriptionValue: {
      type: String,
      required: true
    }
  }
}
</script>
