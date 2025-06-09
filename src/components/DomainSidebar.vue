<template>
  <aside class="mr-[20px] text-dull-grey md:hidden">
    <h3 class="h2-ibm mb-[20px] text-tx-dark">{{ title }}</h3>
    <div>
      <div
        v-for="(item, index) in items"
        :key="`domain_${index}`"
        class="FilterLink h6-inter-med cursor-pointer mb-[20px]"
        :class="{ 'text-tx-blue Selected': selectedValue === item.value }"
        @click="$emit('select', item)"
      >
        {{ item.label }}
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
interface SidebarItem {
  label: string
  value: string
}

defineProps<{ title: string; items: SidebarItem[]; selectedValue?: string }>()

defineEmits<{ (e: 'select', item: SidebarItem): void }>()
</script>

<style scoped>
.FilterLink {
  transition: all 0.2s ease-in-out;
}

.FilterLink.Selected:before {
  content: '';
  display: inline-block;
  width: 7px;
  height: 14px;
  margin-right: 7px;
  background: var(--tx-blue);
  margin-bottom: -2px;
  border-radius: 0 5px 5px 0;
  transition: all 0.2s ease-in-out;
}
</style>
