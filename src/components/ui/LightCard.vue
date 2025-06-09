<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="LightCard" :class="props.class">
    <slot />
  </div>
</template>

<style scoped>
.LightCard {
  background-color: var(--white);
  border: 1px solid var(--dull-white);
  border-radius: var(--tx-radius);
  box-shadow: var(--light-card-shadow);
}
</style>
