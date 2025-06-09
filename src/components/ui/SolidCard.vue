<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="SolidCard" :class="props.class">
    <slot />
  </div>
</template>

<style scoped>
.SolidCard {
  background-color: var(--white);
  box-shadow: var(--solid-card-shadow);
  border: 3px solid var(--tx-dark);
  border-radius: var(--tx-radius);
}
</style>
