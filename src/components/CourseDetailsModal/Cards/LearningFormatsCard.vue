<template>
  <TabInfoCard
    title="Learning Formats"
    subtitle="Schedules and formats available."
    icon="tx:event-schedule"
    :tabs="formatTabs"
    :duration="5000"
    :auto-play="true"
    @tab-change="onFormatChange"
  >
    <template #content="{ activeTab }">
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <Icon icon="material-symbols:sunny-outline" class="text-tx-dark" />
          <p class="h5-inter">Days</p>
          <p>{{ activeTab.days || 'Flexible' }}</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="material-symbols:calendar-month-outline" class="text-tx-dark" />
          <p class="h5-inter">Duration</p>
          <p>{{ activeTab.duration }}</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="material-symbols:nest-clock-farsight-analog-outline" class="text-tx-dark" />
          <p class="h5-inter">Time</p>
          <p>{{ activeTab.sessionHours }}</p>
        </div>
      </div>
    </template>
  </TabInfoCard>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

import TabInfoCard from '@/components/ui/TabInfoCard.vue'

interface DeliveryOption {
  type: string
  days: string | null
  duration: string
  sessionHours: string
}

const props = defineProps<{
  deliveryOptions: DeliveryOption[]
}>()

// Map delivery options to format tabs
const formatTabs = computed(() =>
  props.deliveryOptions.map((option) => ({
    label: option.type,
    days: option.days || 'Flexible',
    duration: option.duration,
    sessionHours: option.sessionHours
  }))
)

const onFormatChange = (_index: number, tab: { label: string }) => {
  // Handle format change if needed
  console.log('Format changed to:', tab.label)
}
</script>
