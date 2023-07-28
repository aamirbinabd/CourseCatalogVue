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
import { ref, onMounted, computed, watchEffect } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Fuse from 'fuse.js'
import courses from './courses.js'

// State
const domains = ref(courses)
const currentDomain = ref(null)
const searchTerm = ref('')
const sortBy = ref('az')
const selectedCourse = ref(null)
const currentPage = ref(1)
const coursesPerPage = ref(3)
const filteredCourses = ref([])
const fuseOptions = { keys: ['title', 'description'], includeScore: true }

// Router
const router = setupRouter()

// Methods
const selectDomain = (domain) => updateDomain(domain)
const showCourseDetails = (course) => (selectedCourse.value = course)
const hideCourseDetails = () => (selectedCourse.value = null)
const searchCourses = () => updateFilteredCourses()
const sortCourses = () => updateSortedCourses()
const goToPage = (page) => (currentPage.value = page)
const navigateDomains = (direction) => navigateToDomain(direction)
const getDomainName = (index) =>
  index >= 0 && index < domains.value.length ? domains.value[index].domain : ''

// Computed Properties
const updateTitle = computed(() =>
  searchTerm.value !== ''
    ? 'Search results...'
    : currentDomain.value
    ? currentDomain.value.domain
    : 'Loading...'
)
const totalPages = computed(() => Math.ceil(filteredCourses.value.length / coursesPerPage.value))
const paginatedCourses = computed(() => paginateCourses())

// Watchers and Initialization
watchEffect(() => setQueryParameters())
onMounted(() => setInitialDomain())

// Router setup
function setupRouter() {
  return createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: '/:domain?',
        component: { template: '<div></div>' },
        props: (route) => ({
          domain: route.params.domain,
          searchTerm: route.query.searchTerm,
          sortBy: route.query.sortBy
        })
      }
    ]
  })
}

// Domain related functions
function updateDomain(domain) {
  currentDomain.value = domain
  updateRoute({ path: `/${domain.domain}` })
}

function defaultDomain() {
  const defaultDomain = domains.value[0]
  selectDomain(defaultDomain)
}

function navigateToDomain(direction) {
  const currentIndex = domains.value.indexOf(currentDomain.value)
  const nextIndex = currentIndex + direction
  if (nextIndex >= 0 && nextIndex < domains.value.length) {
    selectDomain(domains.value[nextIndex])
  }
}

// Search and Filter functions
function updateFilteredCourses() {
  searchTerm.value === ''
    ? (filteredCourses.value = currentDomain.value.courses)
    : searchAllCourses()
}

function searchAllCourses() {
  const fuse = new Fuse(
    domains.value.flatMap((domain) => domain.courses),
    fuseOptions
  )
  filteredCourses.value = fuse.search(searchTerm.value).map((result) => result.item)
}

function updateSortedCourses() {
  filteredCourses.value = sortItems(filteredCourses.value, sortBy.value)
  currentPage.value = 1
}

function sortItems(items, by) {
  const sortingStrategies = {
    az: (a, b) => a.title.localeCompare(b.title),
    za: (a, b) => b.title.localeCompare(a.title),
    'duration-asc': (a, b) => parseInt(a.duration) - parseInt(b.duration),
    'duration-desc': (a, b) => parseInt(b.duration) - parseInt(a.duration),
    type: (a, b) => a.type.localeCompare(b.type),
    'most-popular': (a, b) => b.popularity - a.popularity
  }
  return items.sort(sortingStrategies[by])
}

// Pagination function
function paginateCourses() {
  const start = (currentPage.value - 1) * coursesPerPage.value
  return filteredCourses.value.slice(start, start + coursesPerPage.value)
}

// URL Parameter handling
function setQueryParameters() {
  const query = router.currentRoute.value.query
  searchTerm.value = query.searchTerm || ''
  sortBy.value = query.sortBy || 'az'
}

function setInitialDomain() {
  const routeDomain = router.currentRoute.value.params.domain
  const matchedDomain = domains.value.find((domain) => domain.domain === routeDomain)

  matchedDomain ? selectDomain(matchedDomain) : defaultDomain()

  // Set the search and sort parameters from the URL.
  searchTerm.value = router.currentRoute.value.query.searchTerm || ''
  sortBy.value = router.currentRoute.value.query.sortBy || 'az'

  // Run search and sort after setting initial parameters.
  searchCourses()
  sortCourses()
}

function updateRoute({ path }) {
  router.push({
    path,
    query: {
      searchTerm: searchTerm.value,
      sortBy: sortBy.value
    }
  })
}
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
