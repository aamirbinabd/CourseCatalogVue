<template>
  <div class="p-[20px]" @click="$emit('click')">
    <CardHeader
      :title="title"
      :subtitle="subtitle"
      :icon="icon"
      :font="font"
      :title-class="titleClass"
    >
      <template #pre-title>
        <slot name="pre-title" />
      </template>
    </CardHeader>

    <!-- Post-title content -->
    <slot name="post-title" />

    <!-- Main content -->
    <div :class="{ 'mt-[15px] border-t border-light-grey pt-[15px]': showMargin }">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardHeader from './ui/CardHeader.vue'

interface Props {
  title: string
  subtitle?: string
  icon?: string
  titleClass?: string
  showMargin?: boolean
  font?: 'inter' | 'ibm'
}

withDefaults(defineProps<Props>(), {
  subtitle: '',
  icon: '',
  iconAlt: '',
  titleClass: '',
  showMargin: false,
  font: 'inter'
})

defineEmits<{ (e: 'click'): void }>()
</script>
