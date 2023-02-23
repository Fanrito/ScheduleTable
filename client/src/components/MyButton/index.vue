<template>
  <button :class="`my-btn btn-${ type }`">
    <slot></slot>
  </button>
</template>

<script setup>
  const props = defineProps({
    type: {
      type: String,
      default: 'Button'
    }
  })
</script>

<style lang="scss" scoped>
  .my-btn {
    height: 33px;
    padding: 0 15px;
    border-radius: 3px;
    cursor: pointer;

    &.btn-default {
      color: #212529;
      background-color: #f8f9fa;
      border-color: #f8f9fa;
    }

    &.btn-primary {
      color: #fff;
      background-color: #6c757d;
      border-color: #6c757d;
    }
    &.btn-danger {
      color: #fff;
      background-color: #dc3545;
      border-color: #dc3545;
    }
  }
</style>