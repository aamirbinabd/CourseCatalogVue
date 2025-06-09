<template>
  <LightCard class="flex flex-col gap-[35px] p-[27px] max-w-[1215px] mx-auto">
    <div class="flex flex-row justify-between gap-[15px] md:flex-wrap">
      <InfoTile
        title="Industry experts with 15+ years of deep experience in tech domains"
        icon="tx:user-certification"
        :icon-border="false"
        :container-border="true"
      />
      <InfoTile
        title="Round-the-clock learner support to answer queries and solve issues"
        icon="tx:hearing"
        :icon-border="false"
        :container-border="true"
      />
      <InfoTile
        title="Access to Techboxx's exclusive learning community and resources"
        icon="tx:events"
        :icon-border="false"
        :container-border="true"
      />
    </div>
    <div class="flex flex-row justify-between gap-[15px] md:flex-wrap">
      <h1 class="h1-ibm">
        Talk to a Mentor, <br />
        Get Advice or Enroll.
      </h1>
      <div class="flex flex-row gap-[15px]">
        <ButtonPrimary label="Enroll Now" href="#" class="self-end" />
      </div>
    </div>
  </LightCard>
</template>

<script setup lang="ts">
import ButtonPrimary from '../ui/ButtonPrimary.vue'
import LightCard from '../ui/LightCard.vue'

import InfoTile from './InfoTile.vue'
</script>
