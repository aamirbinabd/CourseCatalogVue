<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-item border-b border-dull-white last:border-b-0 text-tx-dark"
    >
      <button
        class="w-full flex items-center justify-start gap-[8px] py-3 text-left hover:bg-gray-50 transition-colors"
        :class="{ 'text-tx-blue': isExpanded(index) }"
        @click="toggleItem(index)"
      >
        <Icon
          :icon="
            isExpanded(index) ? 'material-symbols:expand-less' : 'material-symbols:expand-more'
          "
          class="w-5 h-5 transition-transform duration-200"
        />
        <p>{{ item.title }}</p>
      </button>

      <div v-show="isExpanded(index)" class="pb-3 pl-[32px] p-inter transition-all duration-200">
        <div v-if="item.description" class="mb-2">
          {{ item.description }}
        </div>

        <ul v-if="item.items && item.items.length > 0" class="space-y-1 ml-4">
          <li v-for="subItem in item.items" :key="subItem" class="flex items-start">
            <span class="text-gray-400 mr-2">•</span>
            <span>{{ subItem }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

interface AccordionItem {
  title: string
  description?: string
  items?: string[]
}

const props = defineProps<{
  items: AccordionItem[]
  allowMultiple?: boolean
  defaultExpanded?: number[]
}>()

const expandedItems = ref<Set<number>>(new Set(props.defaultExpanded || []))

const isExpanded = (index: number): boolean => {
  return expandedItems.value.has(index)
}

const toggleItem = (index: number) => {
  if (isExpanded(index)) {
    expandedItems.value.delete(index)
  } else {
    if (!props.allowMultiple) {
      expandedItems.value.clear()
    }
    expandedItems.value.add(index)
  }
}

defineOptions({
  name: 'AccordionPanel'
})
</script>

<style scoped>
.accordion-item:last-child {
  border-bottom: none;
}
</style>
