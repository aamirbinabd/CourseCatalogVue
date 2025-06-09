import Fuse from 'fuse.js'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import rawCoursesData from '@/data/courses.json'
import type { Course } from '@/types'

// Import and type assert the data
const coursesData = rawCoursesData as unknown as Course[]

// Configure Fuse.js options
const fuseOptions = {
  keys: ['title', 'description', 'domain'],
  threshold: 0.3,
  includeScore: true
}

export const useCourseStore = defineStore('courses', () => {
  // State
  const courses = ref<Course[]>(coursesData)
  const currentDomain = ref<string | null>(null)
  const searchTerm = ref('')
  const sortBy = ref<'az' | 'za' | 'duration'>('az')
  const selectedCourseId = ref<string | null>(null)
  const isSearching = ref(false)

  // Create Fuse instance
  const fuse = new Fuse(courses.value, fuseOptions)

  // Getters
  const filteredCourses = computed(() => {
    let filtered = [...courses.value]

    // If searching, use Fuse.js for fuzzy search across all domains
    if (searchTerm.value) {
      isSearching.value = true
      const searchResults = fuse.search(searchTerm.value)
      filtered = searchResults.map((result) => result.item)
    } else {
      isSearching.value = false
      // If not searching, apply domain filter
      if (currentDomain.value) {
        filtered = filtered.filter((course) => course.domain === currentDomain.value)
      }
    }

    // Sorting
    filtered.sort((a, b) => {
      if (sortBy.value === 'az') {
        return a.title.localeCompare(b.title)
      } else if (sortBy.value === 'za') {
        return b.title.localeCompare(a.title)
      } else {
        // Duration sort - assuming we'll implement this later
        return 0
      }
    })

    return filtered
  })

  const currentCourse = computed(() =>
    selectedCourseId.value ? courses.value.find((c) => c.id === selectedCourseId.value) : null
  )

  const domains = computed(() => {
    const uniqueDomains = new Set(courses.value.map((course) => course.domain))
    return Array.from(uniqueDomains).map((domain) => {
      const domainCourses = courses.value.filter((c) => c.domain === domain)
      return {
        label: domain,
        value: domain,
        courseCount: domainCourses.length,
        description: `Explore our comprehensive ${domain} courses designed to help you master the essential skills and concepts.`
      }
    })
  })

  // Actions
  function setDomain(domain: string | null) {
    currentDomain.value = domain
    // Clear search when changing domains
    if (domain) {
      searchTerm.value = ''
      isSearching.value = false
    }
    // Clear selected course when domain changes
    selectedCourseId.value = null
  }

  function setSearchTerm(term: string) {
    searchTerm.value = term
  }

  function setSortBy(sort: 'az' | 'za' | 'duration') {
    sortBy.value = sort
  }

  function selectCourse(courseId: string | null) {
    selectedCourseId.value = courseId
  }

  return {
    // State
    courses,
    currentDomain,
    searchTerm,
    sortBy,
    selectedCourseId,
    isSearching,

    // Getters
    filteredCourses,
    currentCourse,
    domains,

    // Actions
    setDomain,
    setSearchTerm,
    setSortBy,
    selectCourse
  }
})
