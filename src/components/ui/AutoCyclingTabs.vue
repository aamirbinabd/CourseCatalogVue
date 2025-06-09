<template>
  <div
    class="w-full flex flex-col gap-[20px]"
    @mouseenter="pauseAutoPlay"
    @mouseleave="resumeAutoPlay"
  >
    <div class="flex gap-[8px]">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="[
          'relative px-[12px] py-[6px] rounded-full h6-inter-med transition-colors duration-200 overflow-hidden flex items-center gap-[3px]',
          activeIndex === index
            ? 'bg-tx-blue text-white border border-tx-blue'
            : 'bg-light-white text-tx-dark border border-tx-dark'
        ]"
        @click="selectTab(index)"
      >
        <Icon
          v-if="activeIndex === index"
          icon="material-symbols:done"
          class="w-[17px] h-[17px] relative z-20"
        />
        <!-- Moving background progress indicator -->
        <div
          v-if="activeIndex === index && autoPlay && !isPaused"
          class="absolute inset-0 bg-hover-blue rounded-full transition-all duration-100 ease-linear z-10"
          :style="{
            width: `${progress}%`,
            transform: 'translateX(0%)'
          }"
        ></div>

        <!-- Tab label -->
        <span class="relative z-10">{{ tab.label }}</span>
      </button>
    </div>

    <!-- Tab content -->
    <div class="tab-content">
      <slot :active-tab="tabs[activeIndex]" :active-index="activeIndex">
        <div v-if="tabs[activeIndex]">
          {{ tabs[activeIndex].content }}
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, onMounted, onUnmounted, watch } from 'vue'

interface Tab {
  label: string
  content?: string
  [key: string]: string | number | boolean | undefined
}

interface Props {
  tabs: Tab[]
  duration?: number // Duration for each tab in milliseconds
  autoPlay?: boolean
  initialTab?: number
}

const props = withDefaults(defineProps<Props>(), {
  duration: 4000,
  autoPlay: true,
  initialTab: 0
})

const emit = defineEmits<{
  tabChange: [index: number, tab: Tab]
}>()

const activeIndex = ref(props.initialTab)
const progress = ref(0)
const isPaused = ref(false)
let intervalId: NodeJS.Timeout | null = null
let progressIntervalId: NodeJS.Timeout | null = null

const selectTab = (index: number) => {
  activeIndex.value = index
  progress.value = 0
  emit('tabChange', index, props.tabs[index])
  resetAutoPlay()
}

const nextTab = () => {
  const nextIndex = (activeIndex.value + 1) % props.tabs.length
  selectTab(nextIndex)
}

const startAutoPlay = () => {
  if (!props.autoPlay || props.tabs.length <= 1 || isPaused.value) return

  progress.value = 0

  // Update progress bar
  progressIntervalId = setInterval(() => {
    if (!isPaused.value) {
      progress.value += 100 / (props.duration / 100)
      if (progress.value >= 100) {
        progress.value = 100
      }
    }
  }, 100)

  // Switch to next tab
  intervalId = setTimeout(() => {
    if (!isPaused.value) {
      nextTab()
    }
  }, props.duration)
}

const stopAutoPlay = () => {
  if (intervalId) {
    clearTimeout(intervalId)
    intervalId = null
  }
  if (progressIntervalId) {
    clearInterval(progressIntervalId)
    progressIntervalId = null
  }
}

const resetAutoPlay = () => {
  stopAutoPlay()
  if (props.autoPlay && !isPaused.value) {
    startAutoPlay()
  }
}

const pauseAutoPlay = () => {
  isPaused.value = true
  stopAutoPlay()
}

const resumeAutoPlay = () => {
  isPaused.value = false
  resetAutoPlay()
}

// Watch for activeIndex changes to restart auto-play
watch(activeIndex, () => {
  resetAutoPlay()
})

onMounted(() => {
  if (props.autoPlay) {
    startAutoPlay()
  }
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>
