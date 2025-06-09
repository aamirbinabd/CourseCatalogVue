<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  label: string
  href?: string
  variant?: 'arrow-outward' | 'arrow-down' | 'arrow-back' | 'arrow-forward' | 'arrow-up'
  size?: 'large' | 'medium' | 'small'
  color?: 'blue' | 'white' | 'dark'
  containerClass?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'arrow-forward',
  size: 'medium',
  color: 'blue'
})

const getIconName = (variant: string) => {
  switch (variant) {
    case 'arrow-outward':
      return 'material-symbols:arrow-outward'
    case 'arrow-down':
      return 'material-symbols:keyboard-arrow-down'
    case 'arrow-back':
      return 'material-symbols:arrow-back'
    case 'arrow-forward':
      return 'material-symbols:arrow-forward'
    case 'arrow-up':
      return 'material-symbols:arrow-upward'
    default:
      return 'material-symbols:arrow-forward'
  }
}

const getTextColorClass = (color: string) => {
  switch (color) {
    case 'blue':
      return 'text-tx-blue'
    case 'white':
      return 'text-light-white'
    default:
      return 'text-tx-dark'
  }
}

const getSizeClass = (size: string) => {
  switch (size) {
    case 'large':
      return 'h2-ibm'
    case 'small':
      return 'h3-ibm'
    default:
      return 'h6-inter-med'
  }
}
</script>

<template>
  <a
    :href="href || '#'"
    :class="[
      'flex items-center cursor-pointer no-underline px-1.5 py-1 transition-all duration-200 w-fit',
      'hover:bg-blue-50 hover:text-blue-600 hover:rounded',
      getTextColorClass(color),
      containerClass
    ]"
  >
    <div
      :class="['flex items-center', { 'flex-row-reverse self-start': variant === 'arrow-back' }]"
    >
      <div :class="['mr-1', getSizeClass(size)]">
        {{ label }}
      </div>
      <Icon
        :icon="getIconName(variant)"
        class="w-[17px] h-[17px] transition-colors duration-200"
        :class="{
          '-mb-[3.3px]': variant === 'arrow-outward',
          'mr-[5px]': variant === 'arrow-back',
          'mt-[3.3px]': variant === 'arrow-down'
        }"
        :style="{
          color:
            color === 'blue' ? 'var(--blue-600)' : color === 'white' ? 'white' : 'var(--gray-900)'
        }"
      />
    </div>
  </a>
</template>
