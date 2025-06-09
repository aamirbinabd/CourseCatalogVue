<template>
  <div class="text-center text-tx-dark bg-red-400">
    This is an early alpha demo. Work in progress.
  </div>
  <div class="relative bg-bg-white w-full pt-[65px] pb-[65px] overflow-hidden md:pt-[0]">
    <div class="px-[18px]">
      <div class="flex flex-col mx-auto container max-w-[1215px]">
        <div class="grid grid-cols-[1fr,2.7fr] gap-[20px] md:grid-cols-[1fr]">
          <!-- Sidebar -->
          <DomainSidebar
            title="Domains"
            :items="domains"
            :selected-value="currentDomain || ''"
            @select="handleDomainSelect"
          />

          <!-- Course Card Section -->
          <main class="w-full h-full">
            <div class="mb-[32px]">
              <SearchBar
                :model-value="searchTerm"
                placeholder="Search All Courses"
                @update:model-value="handleSearch"
              >
                <template #append>
                  <select
                    :value="sortBy"
                    class="Gradient px-4 py-2 rounded-[7px] border border-dull-white"
                    @change="handleSort"
                  >
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                    <option value="duration">Duration</option>
                  </select>
                </template>
              </SearchBar>
            </div>

            <!-- Domain Header -->
            <HeaderCard
              v-if="currentDomain && !isSearching"
              class="mb-[55px]"
              :title="currentDomain"
              :course-count="currentDomainCourseCount"
              :subtitle="currentDomain"
              :description="currentDomainDescription"
            />

            <!-- Search Results Count -->
            <div v-if="isSearching" class="mb-[30px]">
              <h2 class="h2-ibm text-tx-dark">
                Found {{ filteredCourses.length }}
                {{ filteredCourses.length === 1 ? 'course' : 'courses' }}
              </h2>
            </div>

            <!-- Course Cards Grid -->
            <masonry-infinite-grid
              :key="searchTerm + filteredCourses.length"
              class="min-h-[calc(100vh-400px)] mb-[70px] w-full"
              :gap="20"
              :column-size="424"
              :min-column-size="424"
              :render-on-property-change="true"
              :use-first-render="true"
            >
              <div
                v-for="course in filteredCourses"
                :key="course.id"
                v-bind="{ 'data-grid-groupkey': '0' }"
                class="w-full"
              >
                <CourseCard :course="course" @click="handleCourseClick(course)" />
              </div>
            </masonry-infinite-grid>
          </main>
        </div>

        <!-- Domain Navigation -->
        <SectionNavigation
          :previous-label="previousLabel"
          :next-label="nextLabel"
          :is-first-section="false"
          :is-last-section="false"
          @navigate="handleNavigate"
        />
      </div>

      <!-- Modal -->
      <CourseDetailsModal
        v-show="currentCourse !== null"
        :course="currentCourse"
        @close="handleCloseModal"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { MasonryInfiniteGrid } from '@egjs/vue3-infinitegrid'
import { storeToRefs } from 'pinia'
import { computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import CourseCard from '@/components/CourseCard.vue'
import CourseDetailsModal from '@/components/CourseDetailsModal/index.vue'
import DomainSidebar from '@/components/DomainSidebar.vue'
import HeaderCard from '@/components/HeaderCard.vue'
import SearchBar from '@/components/SearchBar.vue'
import SectionNavigation from '@/components/SectionNavigation.vue'
import { useCourseStore } from '@/stores/courses'
import { Course } from '@/types'

const route = useRoute()
const router = useRouter()
const courseStore = useCourseStore()

// Use storeToRefs to maintain reactivity
const { filteredCourses, domains, currentDomain, searchTerm, sortBy, isSearching } =
  storeToRefs(courseStore)

const currentCourse = computed(() => courseStore.currentCourse || null)

// Initialize domain from route on mount
onMounted(() => {
  if (route.params.domain) {
    courseStore.setDomain(route.params.domain as string)
  } else if (domains.value.length > 0) {
    // If no domain in route, set the first domain as active
    const firstDomain = domains.value[0]
    courseStore.setDomain(firstDomain.value)
    router.replace({
      name: 'courses',
      params: { domain: firstDomain.value },
      query: route.query
    })
  }
})

// Additional computed properties
const currentDomainCourseCount = computed(() => filteredCourses.value.length)

const currentDomainDescription = computed(() => {
  if (!currentDomain.value) return ''
  const domain = domains.value.find((d) => d.value === currentDomain.value)
  return domain?.description || ''
})

const currentDomainIndex = computed(() => {
  if (!currentDomain.value) return 0
  return domains.value.findIndex((d) => d.value === currentDomain.value)
})

// Get previous and next domains for navigation
const previousDomain = computed(() => {
  if (domains.value.length === 0) return null
  const prevIndex =
    currentDomainIndex.value === 0 ? domains.value.length - 1 : currentDomainIndex.value - 1
  return domains.value[prevIndex]
})

const nextDomain = computed(() => {
  if (domains.value.length === 0) return null
  const nextIndex =
    currentDomainIndex.value === domains.value.length - 1 ? 0 : currentDomainIndex.value + 1
  return domains.value[nextIndex]
})

const previousLabel = computed(() => previousDomain.value?.label || '')
const nextLabel = computed(() => nextDomain.value?.label || '')

// Debounce function
function debounce<F extends (term: string) => void>(fn: F, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: ThisParameterType<F>, term: string) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.call(this, term), delay)
  }
}

// Debounced URL update
const updateSearchURL = debounce((term: string) => {
  router
    .push({
      query: { ...route.query, search: term || undefined }
    })
    .catch(() => {})
}, 300)

// Route handling
watch(
  () => route.params,
  (params) => {
    if (params.domain) {
      courseStore.setDomain(params.domain as string)
    }
    if (params.courseId) {
      courseStore.selectCourse(params.courseId as string)
    }
  },
  { immediate: true }
)

// Watch route query for search term changes, but only from navigation
watch(
  () => route.query.search,
  (newSearch) => {
    const searchValue = (newSearch as string) || ''
    // Only update if significantly different to avoid feedback loops
    if (searchValue !== searchTerm.value) {
      courseStore.setSearchTerm(searchValue)
    }
  },
  { immediate: true }
)

// Event handlers
function handleDomainSelect(domain: { value: string; label: string }) {
  courseStore.setDomain(domain.value)
  router.push({
    name: 'courses',
    params: { domain: domain.value },
    query: route.query
  })
}

function handleSearch(term: string) {
  // Update store immediately for responsive UI
  courseStore.setSearchTerm(term)

  // Debounce URL update
  updateSearchURL(term)
}

function handleSort(event: Event) {
  const value = (event.target as HTMLSelectElement).value as 'az' | 'za' | 'duration'
  courseStore.setSortBy(value)
  // Update URL query params
  router.push({
    query: { ...route.query, sort: value }
  })
}

function handleCourseClick(course: Course) {
  router.push({
    name: 'course-details',
    params: {
      domain: currentDomain.value || '',
      courseId: course.id
    }
  })
}

function handleCloseModal() {
  // Clear the selected course
  courseStore.selectCourse(null)

  // Only include domain param if it exists
  const params = currentDomain.value ? { domain: currentDomain.value } : {}
  router.push({
    name: 'courses',
    params
  })
}

function handleNavigate(direction: 1 | -1) {
  const targetDomain = direction === 1 ? nextDomain.value : previousDomain.value
  if (targetDomain) {
    router.push({
      name: 'courses',
      params: { domain: targetDomain.value },
      query: route.query
    })
  }
}
</script>
