<template>
  <div id="app" class="bg-amber-100 w-full h-screen flex items-center overflow-hidden">
    <div class="relative flex flex-col mx-auto container max-w-[900px]">
      <div id="Catalog">
        <div class="grid grid-cols-[25%_75%] mb-[20px]">
          <!-- Sidebar -->
          <aside
            class="border border-solid border-gray-400 h-[400px] bg-gray-200 p-[10px] mr-[20px]"
          >
            <h1 class="font-bold">Course Domains</h1>
            <div>
              <div
                class="cursor-pointer"
                v-for="(domain, index) in domains"
                :key="`domain_${index}`"
                :class="{ underline: currentDomain === domain }"
                @click="selectDomain(domain)"
              >
                {{ domain.domain }}
              </div>
            </div>
          </aside>
          <!-- Course Card Section -->
          <main class="border border-solid border-gray-400 bg-gray-200 p-[10px] w-full">
            <div class="mb-[10px] flex flex-row justify-between">
              <input
                type="text"
                class="px-[10px]"
                placeholder="Search All Courses"
                v-model="searchTerm"
                @input="searchCourses"
              />
              <select name="sort-courses" id="sort-courses" v-model="sortBy" @change="sortCourses">
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
                <option value="duration-asc">Duration (Ascending)</option>
                <option value="duration-desc">Duration (Descending)</option>
                <option value="type">Course Type</option>
                <option value="most-popular">Most Popular</option>
              </select>
            </div>
            <h1
              class="border border-double border-gray-400 p-[10px] mb-[10px]"
              id="course-category-title"
            >
              {{ updateTitle }}
            </h1>
            <div class="flex flex-col gap-[px]">
              <div
                class="border border-double border-gray-400 p-[10px] mb-[10px] cursor-pointer"
                v-for="course in paginatedCourses"
                :key="`${course.domain}_${course.title}`"
                @click="showCourseDetails(course)"
              >
                <label class="text-xs" v-html="course.type"></label>
                <h1 class="text-lg" v-html="course.title"></h1>
                <p class="text-sm" v-html="course.duration"></p>
                <p>Included Courses: {{ course.includedCourses.join(', ') }}</p>
                <dl v-html="course.description"></dl>
                <button @click="showCourseDetails(course)" class="underline mt-[5px]">
                  Read More
                </button>
              </div>
            </div>
            <div v-if="totalPages > 1" class="pagination">
              <div class="flex justify-center mt-4">
                <button
                  class="px-2 py-1 bg-blue-500 text-white mx-1"
                  v-for="page in totalPages"
                  :key="page"
                  @click="goToPage(page)"
                >
                  {{ page }}
                </button>
              </div>
            </div>
          </main>
        </div>
        <!-- Course Navigation-->
        <div
          class="flex justify-between w-full bg-gray-200 border border-solid border-gray-400 p-[5px_8px]"
        >
          <button @click="navigateDomains(-1)">
            <span>&lt;</span>
            <span>{{ getDomainName(domains.indexOf(currentDomain) - 1) }}</span>
          </button>
          <button @click="navigateDomains(1)">
            <span>{{ getDomainName(domains.indexOf(currentDomain) + 1) }}</span>
            <span>&gt;</span>
          </button>
        </div>
      </div>
      <!-- Course Slide Up Modal -->
      <Transition name="slide-up" mode="out-in">
        <div
          v-if="selectedCourse"
          class="absolute w-full h-screen bg-gray-200 border border-gray-400 border-solid"
        >
          <div class="flex flex-row justify-end p-[5px_10px]">
            <button @click="hideCourseDetails">x</button>
          </div>
          <div class="h-[1px] bg-gray-400"></div>
          <div class="p-[10px_10px]">
            <h1 class="mb-[5px]">{{ selectedCourse.title }}</h1>
            <p class="max-w-[600px]">{{ selectedCourse.description }}</p>
          </div>
          <div class="h-[1px] bg-gray-400"></div>
          <div class="p-[10px_10px]">
            <h1>Prerequisites:</h1>
            <p>{{ selectedCourse.prerequisites }}</p>
            <h1>Duration:</h1>
            <p>{{ selectedCourse.duration }}</p>
            <h1>What's Included:</h1>
            <p>{{ selectedCourse.includedCourses.join(', ') }}</p>
            <h1>Location:</h1>
            <p>{{ selectedCourse.location }}</p>
          </div>
          <div class="h-[1px] bg-gray-400"></div>
          <div class="p-[10px_10px]">
            <h1>What you learn</h1>
            <p>{{ selectedCourse.whatYouLearn }}</p>
            <h1>What you become</h1>
            <p>{{ selectedCourse.whatYouBecome }}</p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Fuse from 'fuse.js'
import courses from './data/courses.js'

// ********** COMPONENTS **********
const MainContent = {
  template: '<div><slot></slot></div>'
}

// ********** CONSTANTS **********
const ROUTE_NAMES = {
  SEARCH: 'Search',
  DOMAIN: 'Domain'
}

// ********** DATA **********
const domains = ref(courses)
const currentDomain = ref(domains.value[0])
const lastSelectedDomain = ref(domains.value[0])
const searchTerm = ref('')
const sortBy = ref('az')
const selectedCourse = ref(null)
const currentPage = ref(1)
const coursesPerPage = ref(1)
const filteredCourses = ref([])
const fuseOptions = { keys: ['title', 'description'], includeScore: true }
const router = ref(null)

// ********** HELPER FUNCTIONS **********
const sortItems = (items, by) => {
  const sortingStrategies = {
    az: (a, b) => a.title.localeCompare(b.title),
    za: (a, b) => b.title.localeCompare(a.title),
    'duration-asc': (a, b) => parseInt(a.duration) - parseInt(b.duration),
    'duration-desc': (a, b) => parseInt(b.duration) - parseInt(a.duration),
    type: (a, b) => a.type.localeCompare(b.type),
    'most-popular': (a, b) => b.popularity - a.popularity
  }
  return items.slice().sort(sortingStrategies[by])
}

// ********** METHODS **********
const selectDomain = (domain) => {
  lastSelectedDomain.value = domain
  currentDomain.value = domain
  searchTerm.value = ''
  updateFilteredCourses()
}

const filterCourses = () => {
  if (searchTerm.value === '') {
    return currentDomain.value.courses
  } else {
    const fuse = new Fuse(
      domains.value.flatMap((domain) => domain.courses),
      fuseOptions
    )
    return fuse.search(searchTerm.value).map((result) => result.item)
  }
}

const updateFilteredCourses = () => {
  filteredCourses.value = filterCourses()
  sortCourses()
}

const showCourseDetails = (course) => {
  selectedCourse.value = course
}

const hideCourseDetails = () => {
  selectedCourse.value = null
}

const searchCourses = () => {
  if (searchTerm.value === '') {
    currentDomain.value = lastSelectedDomain.value
  } else {
    currentDomain.value = null
  }
  updateFilteredCourses()
}

const sortCourses = () => {
  filteredCourses.value = sortItems(filteredCourses.value, sortBy.value)
  currentPage.value = 1
}

const goToPage = (page) => {
  currentPage.value = page
}

const navigateDomains = (direction) => {
  const currentIndex = domains.value.indexOf(currentDomain.value)
  const nextIndex = currentIndex + direction
  if (nextIndex >= 0 && nextIndex < domains.value.length) {
    selectDomain(domains.value[nextIndex])
  }
}

const getDomainName = (index) => {
  return index >= 0 && index < domains.value.length ? domains.value[index].domain : ''
}

const updateQueryParams = (params) => {
  searchTerm.value = params.searchTerm || ''
  sortBy.value = params.sortBy || 'az'
}

const handleSearchRoute = () => {
  currentDomain.value = null
  selectedCourse.value = null
  searchCourses()
}

const handleDomainRoute = (params) => {
  const domainObj = domains.value.find((d) => d.domain === params.domain)
  if (domainObj) {
    selectDomain(domainObj)
    if (params.course) {
      const courseObj = domainObj.courses.find((c) => c.title === params.course)
      if (courseObj) {
        showCourseDetails(courseObj)
      }
    }
  }
}

const updateRoute = (to, from) => {
  if (to) {
    updateQueryParams(to.query)
    if (to.name === ROUTE_NAMES.SEARCH) {
      handleSearchRoute()
    } else if (to.name === ROUTE_NAMES.DOMAIN) {
      handleDomainRoute(to.params)
    }
  }
}

// ********** COMPUTED PROPERTIES **********
const updateTitle = computed(() =>
  searchTerm.value !== ''
    ? 'Search results...'
    : lastSelectedDomain.value
    ? lastSelectedDomain.value.domain
    : 'Loading...'
)

const totalPages = computed(() => Math.ceil(filteredCourses.value.length / coursesPerPage.value))

const paginatedCourses = computed(() => {
  const start = (currentPage.value - 1) * coursesPerPage.value
  return filteredCourses.value.slice(start, start + coursesPerPage.value)
})

// ********** ROUTER SETUP **********

// ********** WATCHERS & LIFECYCLE HOOKS **********
onMounted(async () => {
  if (typeof window !== 'undefined') {
    // Now, we set the router
    router.value = createRouter({
      history: createWebHashHistory(),
      routes: [
        {
          path: '/search',
          name: ROUTE_NAMES.SEARCH,
          component: MainContent,
          beforeEnter: updateRoute // Here
        },
        {
          path: '/:domain/:course?',
          name: ROUTE_NAMES.DOMAIN,
          component: MainContent,
          beforeEnter: updateRoute // Here
        },
        {
          path: '/:catchAll(.*)',
          redirect: () => {
            return { name: ROUTE_NAMES.DOMAIN, params: { domain: domains.value[0].domain } }
          }
        }
      ]
    })

    await router.value.push({ path: window.location.hash.slice(1) })
    updateFilteredCourses()
    updateRoute(router.value.currentRoute.value)
  }
})

watch([searchTerm, sortBy, selectedCourse, currentDomain], () => {
  // Check if router.value is available before trying to use it
  if (router.value) {
    const route =
      currentDomain.value === null
        ? {
            name: ROUTE_NAMES.SEARCH,
            query: { searchTerm: searchTerm.value, sortBy: sortBy.value }
          }
        : selectedCourse.value !== null
        ? {
            name: ROUTE_NAMES.DOMAIN,
            params: { domain: currentDomain.value.domain, course: selectedCourse.value.title },
            query: { sortBy: sortBy.value }
          }
        : {
            name: ROUTE_NAMES.DOMAIN,
            params: { domain: currentDomain.value.domain },
            query: { sortBy: sortBy.value }
          }
    router.value.push(route)
    updateRoute(route)
  }
})
</script>

<style>
.highlight {
  background-color: yellow;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}

.slide-up-enter {
  transform: translateY(100%);
}

.slide-up-leave-to {
  transform: translateY(100%);
}

/* Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
