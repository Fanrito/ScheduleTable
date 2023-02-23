<template>
  <td class="duration-title">{{ title }}</td>
</template>

<script setup>
import './styles/duration-title.scss'
  const props = defineProps({
    title: String
  })
</script>

<style lang="scss" scoped>

</style>