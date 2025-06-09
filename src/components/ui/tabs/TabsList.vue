<script setup lang="ts">
// TabsList.vue - Container for tab triggers
</script>

<template>
  <div
    class="inline-flex rounded-[7px] border-b-[1px] border-b-dull-white shadow-[0px_5px_10px_0px_rgba(0,0,0,0.04)] overflow-hidden"
    role="tablist"
    aria-orientation="horizontal"
  >
    <slot />
  </div>
</template>
