<script setup lang="ts">
import ContentCard from '../ContentCard.vue'

import ButtonPrimary from './ButtonPrimary.vue'
import HyperLink from './HyperLink.vue'
import Marker from './Marker.vue'
import SolidCard from './SolidCard.vue'

interface Props {
  title: string
  duration: string
  description: string
  callbackLabel: string
  callbackHref: string
  textLabel: string
  textHref: string
  pdfHref?: string
}

defineProps<Props>()
</script>

<template>
  <SolidCard class="max-w-[424px] w-full cursor-pointer ml:min-w-full">
    <ContentCard :title="title" :show-margin="true" font="ibm" title-class="w-[250px]">
      <template #post-title>
        <div class="mb-[15px] mt-[15px]">
          <Marker
            label="Call Duration:"
            icon="material-symbols:timer-outline"
            :details="duration"
          />
        </div>
      </template>

      <div class="flex flex-col gap-[20px]">
        <div class="flex flex-col gap-[12px]">
          <Marker label="What to expect on call?" icon="material-symbols:stars-outline" />
          <p class="text-dull-grey h6-inter-reg">{{ description }}</p>
        </div>
        <div class="flex flex-col gap-[15px]">
          <HyperLink
            :href="textHref"
            :label="textLabel"
            variant="arrow-outward"
            color="blue"
            size="small"
            container-class="self-end"
          />
          <ButtonPrimary :href="callbackHref" :label="callbackLabel" full-width />

          <ButtonPrimary
            href="pdfHref"
            label="Download Course PDF"
            variant="outline"
            arrow-direction="down"
            full-width
          />
        </div>
      </div>
    </ContentCard>
  </SolidCard>
</template>
