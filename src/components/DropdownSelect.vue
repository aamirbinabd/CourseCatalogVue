<template>
  <div class="dropdown text-tx-dark">
    <button
      class="label-text flex justify-center gap-[10px] border-[1.5px] border-solid border-tx-dark rounded-[7px] p-[12px] w-full"
      @click="isOpen = !isOpen"
    >
      {{ sortByLabel }}

      <span>
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.49967 10.625L4.95801 7.08333H12.0413L8.49967 10.625Z" fill="#1D1A3F" />
        </svg>
      </span>
    </button>
    <ul class="h2-ibm" v-if="isOpen">
      <li v-for="option in options" :key="option.value" @click="selectOption(option)">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DropdownSelect',
  props: {
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      isOpen: false,
      selectedOption: this.options.find((option) => option.value === this.modelValue) || null
    }
  },
  watch: {
    modelValue(newVal) {
      this.selectedOption = this.options.find((option) => option.value === newVal)
    }
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option
      this.isOpen = false
      this.$emit('update:modelValue', option.value)
    }
  },
  computed: {
    sortByLabel() {
      if (this.selectedOption && this.selectedOption.label) {
        const words = this.selectedOption.label.split(' ')
        const limitedWords = words.length > 3 ? words.slice(0, 3).join(' ') : words.join(' ')
        return `Sort by: ${limitedWords}`
      } else {
        return 'Sort by'
      }
    }
  }
}
</script>

<style scoped>
.dropdown {
  position: relative;
  width: 40%;
}

.dropdown button {
  box-shadow: 6px -6px 0px 0px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

/*  rotate span inside button when it is focused */
.dropdown button:focus span {
  transform: rotate(180deg);
}

.dropdown ul {
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  min-width: 280px;
  background: #fff;
  border: 1px solid var(--dull-white);
  border-radius: 7px;
  padding: 20px;
  margin: 0;
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.13);
  list-style: none;
  z-index: 10;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.3s ease;
}

.dropdown li {
  border-radius: 7px;
  padding: 10px 15px;
  cursor: pointer;
}

.dropdown li:hover {
  background: var(--hover-opaque);
}
</style>
