<template>
  <div
    v-if="variant === 'multi-color'"
    class="flex items-center gap-[18px] rounded-[7px]"
    :class="[containerBorder ? 'border-dull-white border-[1px] px-[14px] py-[10px]' : '']"
  >
    <div
      v-if="icon"
      class="flex items-center justify-center rounded-[7px]"
      :class="[iconBorder ? 'border-dull-white border' : '', `w-[44px] h-[44px]`]"
    >
      <Icon
        :icon="typeof icon === 'string' ? icon : icon.body"
        :style="{ width: `${iconSize}px`, height: `${iconSize}px` }"
      />
    </div>
    <div class="flex flex-col gap-[5px]">
      <h5 class="h5-inter">{{ title }}</h5>
      <a v-if="subtitle && link" :href="link" class="h6-inter-reg">{{ subtitle }}</a>
    </div>
  </div>

  <div
    v-else
    class="flex items-start gap-[8px] bg-light-white rounded-[7px] px-[14px] py-[10px] w-fit border-dull-white border-[1px]"
  >
    <Icon
      icon="material-symbols:award-star-outline"
      :style="{
        width: `${iconSize}px`,
        height: `${iconSize}px`,
        minWidth: `${iconSize}px`,
        minHeight: `${iconSize}px`
      }"
      class="text-tx-blue"
    />
    <p class="leading-tight line-clamp-2 break-words">{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
import type { IconifyIcon } from '@iconify/types'
import { Icon } from '@iconify/vue'

withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    link?: string
    variant?: 'multi-color' | 'blue'
    icon?: string | IconifyIcon
    iconBorder?: boolean
    iconSize?: number
    containerBorder?: boolean
  }>(),
  {
    title: 'title',
    subtitle: 'subtitle',
    link: undefined,
    variant: 'multi-color',
    icon: undefined,
    iconBorder: true,
    iconSize: 32,
    containerBorder: false
  }
)
</script>
