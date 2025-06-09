<script setup lang="ts">
import { ref, computed } from 'vue'

import SectionNavigation from '@/components/SectionNavigation.vue'
import FAQAccordion from '@/components/ui/FAQAccordion.vue'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import type { Course } from '@/types'

import HyperLink from '../ui/HyperLink.vue'
import TestimonialCard from '../ui/TestimonialCard.vue'

import AtAGlanceCard from './Cards/AtAGlanceCard.vue'
import HowToAttendCard from './Cards/HowToAttendCard.vue'
import LabExperienceCard from './Cards/LabExperienceCard.vue'
import LearningFormatsCard from './Cards/LearningFormatsCard.vue'
import PreparesYouForCard from './Cards/PreparesYouForCard.vue'
import PrerequistesCard from './Cards/PrerequistesCard.vue'
import WhatYouBecomeCard from './Cards/WhatYouBecomeCard.vue'
import WhatYouLearnCard from './Cards/WhatYouLearnCard.vue'
import CtaCard from './CtaCard.vue'

defineProps<{
  course: Course
}>()

const activeTab = ref('overview')

// Tab configuration
const tabs = [
  { value: 'overview', label: 'Overview' },
  { value: 'modules', label: 'Modules' },
  { value: 'gain', label: 'What You Gain' },
  { value: 'faq', label: 'Course FAQ' }
]

// FAQ data
const faqData = [
  {
    question: 'Is prior Python knowledge required for this course?',
    answer:
      'No, prior Python experience is required. This course is designed to teach Python from the ground up, with a focus on network automation use cases. However, a strong understanding of core networking concepts is expected.'
  },
  {
    question:
      'Will this course cover Python exclusively for networking, or also general Python programming?',
    answer:
      'This course focuses primarily on Python as it applies to network automation, infrastructure management, and DevOps practices. While you will learn general Python concepts, the emphasis is on practical networking applications.'
  },
  {
    question: 'What kind of projects will I work on during the course?',
    answer:
      'You will work on hands-on projects including network device configuration automation, API integrations, configuration management, monitoring automation, and infrastructure as code implementations using real network equipment.'
  },
  {
    question: 'How is this course different from other Python or automation courses?',
    answer:
      'This course is specifically tailored for network professionals and focuses on real-world networking scenarios. You will work with actual Cisco equipment, industry-standard tools, and learn automation techniques used in enterprise environments.'
  },
  {
    question: 'Can this course help me transition into a full-time network automation role?',
    answer:
      'Absolutely! This course is designed to provide you with the practical skills and industry-recognized certifications needed to transition into network automation, DevOps, or infrastructure automation roles in the IT industry.'
  }
]

// Computed properties for navigation
const currentTabIndex = computed(() => {
  return tabs.findIndex((tab) => tab.value === activeTab.value)
})

const isFirstTab = computed(() => currentTabIndex.value === 0)
const isLastTab = computed(() => currentTabIndex.value === tabs.length - 1)

const previousLabel = computed(() => {
  if (isFirstTab.value) return ''
  return tabs[currentTabIndex.value - 1]?.label || ''
})

const nextLabel = computed(() => {
  if (isLastTab.value) return ''
  return tabs[currentTabIndex.value + 1]?.label || ''
})

// Handle navigation
const handleNavigation = (direction: -1 | 1) => {
  const newIndex = currentTabIndex.value + direction
  if (newIndex >= 0 && newIndex < tabs.length) {
    activeTab.value = tabs[newIndex].value
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <Tabs v-model="activeTab">
    <div class="relative border-t-[1px] border-t-dull-white bg-light-white pt-[30px] pb-[200px]">
      <div class="absolute top-0 w-full px-[20px]">
        <div class="max-w-[1215px] mx-auto">
          <div class="absolute -translate-y-1/2">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="modules">Modules</TabsTrigger>
              <TabsTrigger value="gain">What You Gain</TabsTrigger>
              <TabsTrigger value="faq">Course FAQ</TabsTrigger>
            </TabsList>
          </div>
        </div>
      </div>

      <div class="px-[20px]">
        <div class="max-w-[1215px] mx-auto pt-[80px]">
          <TabsContent value="overview">
            <div class="flex flex-col gap-[20px]">
              <AtAGlanceCard :key-features="course.keyFeatures" />
              <div class="flex flex-row gap-[15px] md:flex-wrap">
                <PrerequistesCard :items="course.prerequisites" />
                <LearningFormatsCard :delivery-options="course.deliveryOptions" />
                <HowToAttendCard :modes="course.trainingModes" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="modules">
            <div class="flex flex-row gap-[20px] md:flex-wrap">
              <WhatYouLearnCard :topics="course.whatYouLearn[0].coreConcepts" />
              <LabExperienceCard :items="course.labInfrastructure" />
            </div>
          </TabsContent>

          <TabsContent value="gain">
            <div class="flex flex-row gap-[20px] md:flex-wrap">
              <WhatYouBecomeCard
                :roles="course.whatYouBecome[0].jobTitles"
                :skills="course.whatYouBecome[0].description.split(',')"
              />
              <PreparesYouForCard :items="course.whoIsThisCourseFor" />
            </div>
          </TabsContent>

          <TabsContent value="faq">
            <FAQAccordion :faqs="faqData" :allow-multiple="true" :default-expanded="[0]" />
          </TabsContent>
        </div>
      </div>

      <!-- Section Navigation for tab navigation -->
      <div class="px-[20px] pb-[40px] pt-[56px]">
        <div class="max-w-[1215px] mx-auto">
          <SectionNavigation
            :previous-label="previousLabel"
            :next-label="nextLabel"
            :is-first-section="isFirstTab"
            :is-last-section="isLastTab"
            @navigate="handleNavigation"
          />
        </div>
      </div>
    </div>
  </Tabs>
  <div class="relative">
    <div class="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-[20px] z-10">
      <div class="max-w-[1215px] mx-auto">
        <CtaCard />
      </div>
    </div>
    <div
      class="DottedBg flex flex-col justify-center items-center gap-[56px] pt-[200px] pb-[100px]"
    >
      <div class="h3-inter">Alumni Who Enrolled in Similar Courses</div>
      <div class="flex flex-row justify-center gap-[15px] md:flex-wrap">
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <HyperLink
        label="Back to Top"
        size="small"
        variant="arrow-up"
        href="#"
        @click="scrollToTop"
      />
    </div>
  </div>
</template>
