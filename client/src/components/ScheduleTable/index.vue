<template>
  <div class="schedule-table">
    <table border="1" cellpadding="0">
      <week-title></week-title>
      <tr v-for="item of duration" :key="Date.parse(date + ' ' + item.title.slice(0, 5))">
        <duration-title :title="item.title"></duration-title>
        <td v-for="n in 7" :key="n" @click="handleTDClick(item.title, n)">
          <schedule-card
            v-if="schedule[item.title + '_' + n]"
            :data="schedule[item.title + '_' + n]"
          ></schedule-card>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import WeekTitle from './WeekTitle.vue'
import DurationTitle from './DurationTitle.vue'
import ScheduleCard from './ScheduleCard.vue'

import './styles/index.scss'
import { onMounted, reactive, toRefs } from 'vue'
import { getInitialData } from './scripts/service.js'
import { useInitialData } from './scripts/hooks.js'

const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
const day = new Date().getDate()
const date = year + '-' + month + '-' + day

const [
  data,
  setInitialData,
  setSchedule
] = useInitialData()

onMounted(async () => {
  setInitialData(await getInitialData())
  console.log(data);
})

const handleTDClick = (durationTitle, weekday) => {
  console.log(durationTitle + ' ' + weekday);
}

const { duration, schedule, course, teacher } = toRefs(data)
</script>

<style lang="scss" scoped></style>
