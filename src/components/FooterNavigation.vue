<template>
  <div class="Gradient h2-ibm flex justify-between w-full p-[12px_20px] rounded-[7px]">
    <button
      class="flex items-center gap-[10px]"
      @click="navigateDomains(-1)"
      :class="{
        'opacity-50': domains.indexOf(currentDomain) === 0,
        'cursor-not-allowed': domains.indexOf(currentDomain) === 0,
        'text-tx-blue': domains.indexOf(currentDomain) !== 0
      }"
    >
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13H7.85Z"
          />
        </svg>
      </span>
      <span>{{ getDomainName(domains.indexOf(currentDomain) - 1) }}</span>
    </button>
    <button
      class="flex items-center gap-[10px]"
      @click="navigateDomains(1)"
      :class="{
        'opacity-50': domains.indexOf(currentDomain) === domains.length - 1,
        'cursor-not-allowed': domains.indexOf(currentDomain) === domains.length - 1,
        'text-tx-blue': domains.indexOf(currentDomain) !== domains.length - 1
      }"
    >
      <span>{{ getDomainName(domains.indexOf(currentDomain) + 1) }}</span>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.313t.712.288L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7L16.15 13Z"
          />
        </svg>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    domains: {
      type: Array,
      required: true
    },
    currentDomain: {
      type: String,
      required: true
    }
  },
  methods: {
    navigateDomains(step) {
      let currentIndex = this.domains.indexOf(this.currentDomain)
      let newIndex = currentIndex + step
      if (newIndex >= 0 && newIndex < this.domains.length) {
        this.$emit('domainChanged', this.domains[newIndex])
      }
    },
    getDomainName(index) {
      if (index >= 0 && index < this.domains.length) {
        return this.domains[index]
      }
      return ''
    }
  }
}
</script>
