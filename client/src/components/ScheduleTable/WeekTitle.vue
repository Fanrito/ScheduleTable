<template>
  <tr>
    <th></th>
    <th v-for="item of weekDay" :key="item.id" class="week-title">{{ item.title }}</th>
  </tr>
</template>

<script setup>
import weekDay from '../../data/week.js'
import './styles/week-title.scss'
</script>

<style></style>
