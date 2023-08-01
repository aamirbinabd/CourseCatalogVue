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
        class="h3-ibm px-[7.5px] py-[3px]"
        :class="{ 'text-tx-blue border-[2px] border-tx-blue rounded-[7px]': page === currentPage }"
        v-for="page in totalPages"
        :key="page"
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

<script>
export default {
  name: 'Pagination',
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    goToPage(page) {
      this.$emit('page-changed', page)
    },
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('page-changed', this.currentPage + 1)
      }
    },
    goToPrevPage() {
      if (this.currentPage > 1) {
        this.$emit('page-changed', this.currentPage - 1)
      }
    }
  }
}
</script>
