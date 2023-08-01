<template>
  <div
    class="h6-inter-med cursor-pointer mb-[20px]"
    v-for="(domain, index) in domains"
    :key="`domain_${index}`"
    :class="{ 'text-tx-blue': currentDomain === domain }"
    @click="selectDomainHandler(domain)"
  >
    {{ domain.domain }}
  </div>
</template>

<script>
export default {
  name: 'FilterLink',
  props: {
    domains: {
      type: Array,
      required: true
    },
    currentDomain: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectDomainHandler(domain) {
      this.$emit('select-domain', domain)
    }
  }
}
</script>
