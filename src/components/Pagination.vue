<template>
  <div v-if="totalPages > 1" class="pagination">
    <div class="flex justify-end gap-[10px]">
      <button
        class="h3-ibm px-[7.5px] py-[3px]"
        :class="{ 'text-tx-blue': currentPage > 1 }"
        @click="goToPrevPage"
      >
        Prev
      </button>
      <button
        v-for="page in displayedPages"
        :key="page"
        class="h3-ibm px-[7.5px] py-[3px]"
        :class="{ 'text-tx-blue border-[2px] border-tx-blue rounded-[7px]': page === currentPage }"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
      <button
        class="h3-ibm px-[7.5px] py-[3px]"
        :class="{ 'text-tx-blue': currentPage < totalPages }"
        @click="goToNextPage"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ currentPage: number; totalPages: number }>()

const emit = defineEmits<{ (e: 'page-changed', page: number): void }>()

const displayedPages = computed(() => {
  const pages: (number | string)[] = []
  const maxVisiblePages = 5

  if (props.totalPages <= maxVisiblePages) {
    return Array.from({ length: props.totalPages }, (_, i) => i + 1)
  }

  // Always show first page
  pages.push(1)

  if (props.currentPage > 3) {
    pages.push('...')
  }

  // Calculate middle pages
  for (
    let i = Math.max(2, props.currentPage - 1);
    i <= Math.min(props.totalPages - 1, props.currentPage + 1);
    i++
  ) {
    pages.push(i)
  }

  if (props.currentPage < props.totalPages - 2) {
    pages.push('...')
  }

  // Always show last page
  if (props.totalPages > 1) {
    pages.push(props.totalPages)
  }

  return pages
})

const goToPrevPage = () => {
  if (props.currentPage > 1) {
    emit('page-changed', props.currentPage - 1)
  }
}

const goToNextPage = () => {
  if (props.currentPage < props.totalPages) {
    emit('page-changed', props.currentPage + 1)
  }
}

const goToPage = (page: number | string) => {
  if (typeof page === 'number' && page >= 1 && page <= props.totalPages) {
    emit('page-changed', page)
  }
}

defineOptions({
  name: 'PaginationControls'
})
</script>
