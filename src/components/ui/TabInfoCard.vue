<template>
  <LightCard class="flex flex-col gap-[28px] p-[20px] w-full text-tx-dark">
    <CardHeader :title="title" :subtitle="subtitle" :icon="icon" />

    <div class="flex flex-col gap-4">
      <AutoCyclingTabs
        :tabs="tabs"
        :duration="duration"
        :auto-play="autoPlay"
        @tab-change="onTabChange"
      >
        <template #default="{ activeTab, activeIndex }">
          <slot name="content" :active-tab="activeTab" :active-index="activeIndex">
            <!-- Default content if no slot provided -->
            <div class="flex flex-col gap-3">
              <template v-for="item in activeTab.items" :key="index">
                <div class="flex items-center gap-2">
                  <Icon :icon="item.icon" class="text-tx-dark" />
                  <p class="h5-inter">{{ item.label }}</p>
                  <p>{{ item.value }}</p>
                </div>
              </template>
            </div>
          </slot>
        </template>
      </AutoCyclingTabs>
    </div>
  </LightCard>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

import AutoCyclingTabs from '@/components/ui/AutoCyclingTabs.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import LightCard from '@/components/ui/LightCard.vue'

interface TabItem {
  icon: string
  label: string
  value: string
}

interface Tab {
  label: string
  items?: TabItem[]
  [key: string]: any
}

defineProps<{
  title: string
  subtitle: string
  icon: string
  tabs: Tab[]
  duration?: number
  autoPlay?: boolean
}>()

const emit = defineEmits<{
  tabChange: [index: number, tab: Tab]
}>()

const onTabChange = (index: number, tab: Tab) => {
  emit('tabChange', index, tab)
}
</script>
