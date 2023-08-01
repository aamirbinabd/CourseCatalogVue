<template>
  <div class="bg-tx-dark px-[18px] py-[110px] md:pt-[160px] md:pb-[110px] sm:pt-[220px]">
    <div class="max-w-[1030px] mx-auto px-[15px]">
      <div class="flex justify-between gap-[27px] md:flex-wrap md:gap-[70px]">
        <div
          v-for="(learnItem, index) in selectedCourse.whatYouLearn"
          :key="'learn-' + index"
          class="flex flex-col gap-[27px] max-w-[496px]"
        >
          <h3 class="h3-inter text-white m-0 flex items-center">
            <img
              src="/assets/artwork/medium/meter.svg"
              class="w-[50.35px] h-[45px] mr-[18px]"
              alt="Icon 1"
            />
            What you learn
          </h3>
          <p class="text-white m-0">{{ learnItem.description }}</p>
          <ul class="h3-ibm flex flex-wrap text-cool-tone gap-[8px]">
            <li
              v-for="(concept, index2) in learnItem.coreConcepts"
              :key="'learn-' + index + '-concept-' + index2"
              class="text-cool-tone"
            >
              {{ concept }}
            </li>
          </ul>
        </div>

        <div
          v-for="(becomeItem, index) in selectedCourse.whatYouBecome"
          :key="'become-' + index"
          class="flex flex-col gap-[27px] max-w-[496px]"
        >
          <h3 class="h3-inter text-white m-0 flex items-center">
            <img
              src="/assets/artwork/medium/light.svg"
              class="w-[50.35px] h-[45px] mr-[18px]"
              alt="Icon 2"
            />
            What you become
          </h3>
          <p class="text-white m-0">{{ becomeItem.description }}</p>
          <ul class="h3-ibm flex flex-wrap text-grass-tone gap-[8px]">
            <li
              v-for="(title, index2) in becomeItem.jobTitles"
              :key="'become-' + index + '-title-' + index2"
              class="text-grass-tone"
            >
              {{ title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['selectedCourse']
}
</script>

<style scoped>
li {
  position: relative;
  padding-left: 20px;
  padding-right: 17px;
}

li:before {
  content: '';
  position: absolute;
  left: 0; /* Adjusted */
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 4.33px solid transparent; /* Adjusted */
  border-bottom: 4.33px solid transparent; /* Adjusted */
  border-left: 4.33px solid currentColor; /* Adjusted to left border */
}
</style>
