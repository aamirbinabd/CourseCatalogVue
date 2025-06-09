<template>
  <TabInfoCard
    title="How to Attend"
    subtitle="Available online or in person."
    icon="tx:events-alt"
    :tabs="attendanceTabs"
    :duration="6000"
    :auto-play="true"
    @tab-change="onAttendanceChange"
  >
    <template #content="{ activeTab }">
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <Icon icon="material-symbols:assistant-outline" class="text-tx-blue" />
          <p>{{ activeTab.mode }}</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="material-symbols:assistant-outline" class="text-tx-blue" />
          <p>{{ activeTab.details }}</p>
        </div>
      </div>
    </template>
  </TabInfoCard>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

import TabInfoCard from '@/components/ui/TabInfoCard.vue'

interface TrainingMode {
  mode: string
  details: string
}

const props = defineProps<{
  modes: TrainingMode[]
}>()

// Map training modes to attendance tabs
const attendanceTabs = computed(() =>
  props.modes.map((mode) => ({
    label: mode.mode === 'Offline' ? 'In-person' : 'Livestream',
    mode: mode.mode === 'Offline' ? 'In-person' : 'Livestream',
    details: mode.details
  }))
)

const onAttendanceChange = (_index: number, tab: { label: string }) => {
  // Handle attendance change if needed
  console.log('Attendance changed to:', tab.label)
}
</script>
