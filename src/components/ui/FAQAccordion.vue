<template>
  <div class="faq-accordion flex flex-col gap-[16px]">
    <LightCard v-for="(faq, index) in faqs" :key="index">
      <button
        class="w-full flex items-center justify-between text-left border-b border-dull-white p-[20px]"
        :class="{ 'text-tx-blue': isExpanded(index) }"
        @click="toggleFAQ(index)"
      >
        <h3 class="h4-inter text-tx-dark">{{ faq.question }}</h3>
        <div
          class="border border-dull-white rounded-full w-[32px] h-[32px] flex items-center justify-center"
        >
          <Icon
            :icon="
              isExpanded(index)
                ? 'material-symbols:arrow-upward'
                : 'material-symbols:arrow-downward'
            "
            class="w-[20px] h-[20px] transition-transform duration-200 text-tx-dark"
          />
        </div>
      </button>

      <div
        v-show="isExpanded(index)"
        class="p-inter text-tx-dark transition-all duration-200 p-[20px]"
      >
        {{ faq.answer }}
      </div>
    </LightCard>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

import LightCard from '@/components/ui/LightCard.vue'

interface FAQ {
  question: string
  answer: string
}

const props = defineProps<{
  faqs: FAQ[]
  allowMultiple?: boolean
  defaultExpanded?: number[]
}>()

const expandedItems = ref<Set<number>>(new Set(props.defaultExpanded || []))

const isExpanded = (index: number): boolean => {
  return expandedItems.value.has(index)
}

const toggleFAQ = (index: number) => {
  if (isExpanded(index)) {
    expandedItems.value.delete(index)
  } else {
    if (!props.allowMultiple) {
      expandedItems.value.clear()
    }
    expandedItems.value.add(index)
  }
}
</script>
