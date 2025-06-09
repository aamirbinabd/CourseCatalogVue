<template>
  <label class="h5-inter px-[7px] py-[4px] rounded-[5px]" v-text="label"> </label>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TxBadge'
})

defineProps<{
  label: string
}>()
</script>
