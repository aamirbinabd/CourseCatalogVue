<template>
  <li
    class="w-max px-[12px] py-[6px] rounded-[35px] border border-solid border-tx-dark"
    :class="customClass"
  >
    {{ text }}
  </li>
</template>

<script setup lang="ts">
// Allow for custom styling from parent if needed
defineProps<{ text: string; customClass?: string }>()
</script>
