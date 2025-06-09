<template>
  <div
    class="text-dull-grey py-[10px] bg-light-white border-b border-solid border-dull-grey px-[18px]"
  >
    <div class="flex justify-between mx-auto max-w-[1215px]">
      <div class="h2-ibm">{{ domain }} > {{ courseName }}</div>
      <button @click="$emit('close')">
        <span>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.4 17.5L12 13.9L15.6 17.5L17 16.1L13.4 12.5L17 8.9L15.6 7.5L12 11.1L8.4 7.5L7 8.9L10.6 12.5L7 16.1L8.4 17.5ZM5 21.5C4.45 21.5 3.979 21.3043 3.587 20.913C3.19567 20.521 3 20.05 3 19.5V5.5C3 4.95 3.19567 4.479 3.587 4.087C3.979 3.69567 4.45 3.5 5 3.5H19C19.55 3.5 20.021 3.69567 20.413 4.087C20.8043 4.479 21 4.95 21 5.5V19.5C21 20.05 20.8043 20.521 20.413 20.913C20.021 21.3043 19.55 21.5 19 21.5H5Z"
              fill="#1D1A3F"
            />
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ModalHeaderProps {
  domain: string
  courseName: string
}

withDefaults(defineProps<ModalHeaderProps>(), {
  domain: 'domain',
  courseName: 'courseName'
})
defineEmits<{ (e: 'close'): void }>()
</script>
