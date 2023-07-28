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
import { ref, onMounted, computed, watch, watchEffect } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Fuse from 'fuse.js'

const courses = [
  {
    domain: 'Networking',
    courses: [
      {
        type: 'Unified Course',
        title: 'CCNA + CCNP Security',
        duration: '7 Months, On Campus',
        includedCourses: ['CCNA', 'CCNP'],
        description: 'Make your career in Networking with CCNA and CCNP Security.',
        popularity: 2
      },
      {
        type: 'Essential Course',
        title: 'Network Fundamentals',
        duration: '3 Months, Online',
        includedCourses: ['Basic Networking Concepts', 'Network Protocols'],
        description: 'This course will help you to understand the basics of Networking.',
        popularity: 3
      },
      {
        type: 'Master Course',
        title: 'Network Design and Architecture',
        duration: '9 Months, On Campus',
        includedCourses: ['Network Infrastructure Planning', 'Network Security Design'],
        description:
          'From the basics to the advanced, this course covers it all. You will learn everything about Network Design and Architecture.',
        popularity: 5
      }
    ]
  },
  {
    domain: 'Cybersecurity',
    courses: [
      {
        type: 'Essential Course',
        title: 'Cybersecurity Fundamentals',
        duration: '4 Months, Online',
        includedCourses: ['Introduction to Cyber Threats', 'Security Policies and Procedures'],
        description:
          'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus odio a sapien feugiat, sed convallis dui consectetur.',
        popularity: 4
      },
      {
        type: 'Master Course',
        title: 'Ethical Hacking and Penetration Testing',
        duration: '8 Months, On Campus',
        includedCourses: ['Web Application Security', 'Wireless Network Security'],
        description: 'Maecenas luctus mauris non nunc auctor ullamcorper.',
        popularity: 5
      },
      {
        type: 'Specialist Course',
        title: 'Digital Forensics and Incident Response',
        duration: '6 Months, Online',
        includedCourses: ['Forensic Investigation Techniques', 'Malware Analysis'],
        description: 'Aenean dictum gravida est, vel egestas turpis tristique sit amet.',
        popularity: 3
      }
    ]
  },
  {
    domain: 'Data Science',
    courses: [
      {
        type: 'Essential Course',
        title: 'Introduction to Data Science',
        duration: '4 Months, Online',
        includedCourses: ['Data Analysis Methods', 'Data Visualization'],
        description: 'Nullam viverra odio et nisi rhoncus consequat.'
      },
      {
        type: 'Master Course',
        title: 'Big Data Analytics',
        duration: '9 Months, On Campus',
        includedCourses: ['Hadoop and MapReduce', 'Machine Learning with Big Data'],
        description: 'Donec dapibus urna a gravida efficitur.'
      },
      {
        type: 'Specialist Course',
        title: 'Natural Language Processing',
        duration: '6 Months, Online',
        includedCourses: ['Text Preprocessing Techniques', 'Sentiment Analysis'],
        description:
          'Integer fermentum, urna in consectetur varius, ligula nisl gravida magna, non laoreet massa ligula ac velit.'
      }
    ]
  },
  {
    domain: 'Web Development',
    courses: [
      {
        type: 'Unified Course',
        title: 'Full Stack Web Development',
        duration: '12 Months, On Campus',
        includedCourses: ['Front-End Development', 'Back-End Development'],
        description: 'Fusce Techboxx Man.'
      },
      {
        type: 'Essential Course',
        title: 'Front-End Development',
        duration: '6 Months, Online',
        includedCourses: ['HTML', 'CSS', 'JavaScript'],
        description: 'This course will help you to understand the basics of Front-End Development.'
      },
      {
        type: 'Master Course',
        title: 'Back-End Development',
        duration: '6 Months, On Campus',
        includedCourses: ['Node.js', 'Express.js', 'MongoDB'],
        description: 'This course will help you to understand the basics of Back-End Development.'
      }
    ]
  }
]

// Setup the necessary states.
const domains = ref(courses)
const currentDomain = ref(null)
const searchTerm = ref('')
const sortBy = ref('az')
const selectedCourse = ref(null)
const currentPage = ref(1)
const coursesPerPage = ref(3)
const filteredCourses = ref([])

// Continue setup
const fuseOptions = {
  keys: ['title', 'description'],
  includeScore: true
}
const fuse = ref(null)

// Setup router to handle navigation.
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: '/:domain', component: { template: '<div></div>' } }]
})

// Methods
const selectDomain = (domain) => {
  currentDomain.value = domain
  // Remove the router.push() call from here; it will be handled by the watch function.
  searchCourses() // call searchCourses when a domain is selected
}

const showCourseDetails = (course) => {
  selectedCourse.value = course
}

const hideCourseDetails = () => {
  selectedCourse.value = null
}

const searchCourses = () => {
  if (searchTerm.value === '') {
    // if no search term is entered, show courses from the selected domain
    filteredCourses.value = currentDomain.value.courses
  } else {
    // if a search term is entered, search across all courses
    if (!fuse.value) {
      // Initialize fuse.js instance if not done already
      fuse.value = new Fuse(
        domains.value.flatMap((domain) => domain.courses),
        fuseOptions
      )
    }
    filteredCourses.value = fuse.value.search(searchTerm.value).map((result) => result.item)
  }
}

const sortCourses = () => {
  if (currentDomain.value) {
    const domainCourses = currentDomain.value.courses
    switch (sortBy.value) {
      case 'az':
        domainCourses.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'za':
        domainCourses.sort((a, b) => b.title.localeCompare(a.title))
        break
      case 'duration-asc':
        domainCourses.sort((a, b) => parseInt(a.duration) - parseInt(b.duration))
        break
      case 'duration-desc':
        domainCourses.sort((a, b) => parseInt(b.duration) - parseInt(a.duration))
        break
      case 'type':
        domainCourses.sort((a, b) => a.type.localeCompare(b.type))
        break
      case 'most-popular':
        domainCourses.sort((a, b) => b.popularity - a.popularity)
        break
    }
    filteredCourses.value = [...domainCourses]
  }
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
  if (index >= 0 && index < domains.value.length) {
    return domains.value[index].domain
  } else {
    return ''
  }
}

// Computed Properties
const updateTitle = computed(() => {
  if (searchTerm.value !== '') {
    return 'Search results...'
  } else {
    return currentDomain.value ? currentDomain.value.domain : 'Loading...'
  }
})
const totalPages = computed(() => Math.ceil(filteredCourses.value.length / coursesPerPage.value))
const paginatedCourses = computed(() => {
  const start = (currentPage.value - 1) * coursesPerPage.value
  return filteredCourses.value.slice(start, start + coursesPerPage.value)
})

watch(
  () => router.currentRoute,
  (to, from) => {
    // Extract the domain from the URL
    let routeDomain = to.params.domain

    // Find the matched domain based on the route domain
    let matchedDomain = domains.value.find((domain) => domain.domain === routeDomain)

    if (matchedDomain) {
      // If a valid domain is found, select it
      currentDomain.value = matchedDomain
    } else {
      // If the domain is not valid, default to the first domain and update the URL
      currentDomain.value = domains.value[0]
      router.push(`/${domains.value[0].domain}`)
    }
    // Search and sort based on the URL parameters
    searchTerm.value = to.query.searchTerm ? to.query.searchTerm : ''
    sortBy.value = to.query.sortBy ? to.query.sortBy : 'az'
    searchCourses() // Update the displayed courses based on the new domain and/or search term
    sortCourses() // Apply the sorting based on the URL parameters
  }
)

watch(
  () => ({ searchTerm: searchTerm.value, sortBy: sortBy.value }),
  ({ searchTerm, sortBy }) => {
    router.push(
      '/' + currentDomain.value.domain + '?searchTerm=' + searchTerm + '&sortBy=' + sortBy
    )
  },
  { deep: true }
)

watchEffect(() => {
  let query = router.currentRoute.value.query
  searchTerm.value = query.searchTerm ? query.searchTerm : ''
  sortBy.value = query.sortBy ? query.sortBy : 'az'
})

// Initial setup.
onMounted(() => {
  // Select the domain based on the initial route.
  const routeDomain = router.currentRoute.value.params.domain
  const matchedDomain = domains.value.find((domain) => domain.domain === routeDomain)

  if (matchedDomain) {
    selectDomain(matchedDomain)
  } else {
    selectDomain(domains.value[0])
    router.push(`/${domains.value[0].domain}`)
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
