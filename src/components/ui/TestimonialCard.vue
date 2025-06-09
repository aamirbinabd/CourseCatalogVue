<template>
  <LightCard class="max-w-[502px] p-[20px] text-tx-dark">
    <!-- Header -->
    <div class="flex items-center pb-[18px] border-b border-dull-white mb-[18px]">
      <img :src="userImage" :alt="userName" class="w-[60px] h-[60px] rounded-full object-cover" />

      <div class="flex flex-col justify-center gap-[2px] ml-[18px]">
        <div class="h4-inter">{{ userName }}</div>
        <div class="h6-inter-med text-dull-grey">
          {{ userRole }} <br />
          <span>@{{ userCompany }}</span>
        </div>
      </div>

      <Icon icon="tx:quote" class="w-[86px] h-[67px] ml-auto" />
    </div>

    <!-- Body -->
    <div class="mb-[18px]">
      <h4 class="h4-inter mb-[18px] max-w-[250px]">{{ excerpt }}</h4>
      <p class="body-inter-reg">{{ content }}</p>
    </div>

    <!-- Footer -->
    <div class="flex items-center justify-between">
      <h3 class="h3-ibm">Connect with {{ firstName }}</h3>
      <HyperLink :href="blogLink" label="Featured On Blog" size="small" variant="arrow-outward" />
    </div>
  </LightCard>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

import HyperLink from './HyperLink.vue'
import LightCard from './LightCard.vue'

interface Props {
  userImage?: string
  userName?: string
  userRole?: string
  userCompany?: string
  excerpt?: string
  content?: string
  blogLink?: string
}

const props = withDefaults(defineProps<Props>(), {
  userImage: '/assets/images/tcard-img.jpg',
  userName: 'Bushra Khan',
  userRole: 'Cloud Security Eng.',
  userCompany: 'Amazon',
  excerpt: '..one of the most inspiring moments of my career..',
  content:
    'Amet blandit cum sit dolor, vulputate porta. Ac tempor lacinia ultricies non aliquet nisl. Adipiscing massa erat ornare at neque, pretium. Senectus in ornare suspendisse urna sit id. Odio ut eleifend non vulputate id. Quis integer morbi tortor ut est quam lectus. Vitae nulla ut orci faucibus lectus id vitae dui. Eleifend..',
  blogLink: '#'
})

// Computed property to get first name for the "Connect with" text
const firstName = computed(() => props.userName.split(' ')[0])
</script>
