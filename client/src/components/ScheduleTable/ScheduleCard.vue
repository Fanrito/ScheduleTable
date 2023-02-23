<template>
  <div class="schedule-card">
    <i class="icon" @click.stop="removeCard">&times;</i>
    <p>{{ data.course }}</p>
    <p>{{ data.teacher }}</p>
  </div>
</template>

<script setup>
import { h } from 'vue'
import MyMessageBox from '../MyMessageBox/index.js'

  const props = defineProps({
    data: Object
  })

  const removeCard = () => {
    // 打开messageBox
    MyMessageBox({
      title: '删除课程安排提示',
      btnCancelText: '取消',
      btnConfirmText: '确定',
      insert: h('p', '确定要删除此课程安排吗？'),
      confirm() {
        console.log('Confirm');
      },
      cancel() {
        console.log('Cancel');
      }
    })
  }
</script>

<style lang="scss" scoped>
.schedule-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #155724;
  background: #d4edda;
  border-radius: 5px;
  font-size: 8px;
}

.icon {
  display: inline-block;
  height: 15px;
  width: 15px;
  text-align: center;
  line-height: 15px;
  background-color: #feefef;
  border-radius: 20px;
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 13px;
}
</style>