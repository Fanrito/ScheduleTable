<template>
  <transition name="messagebox-fade">
    <div class="message-box">
      <div class="wrapper">
        <header class="box-hd">
          <h1>{{ title }}</h1>
        </header>
        <div class="box-board">
          <component :is="insert"></component>
          <div class="btn-group">
            <my-button type="default" @click="handleCancelClick">{{ btnCancelText }}</my-button>
            <my-button type="primary" @click="handleConfirmClick">{{ btnConfirmText }}</my-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { reactive } from '@vue/reactivity'
import MyButton from '../MyButton'

const props = defineProps({
  title: {
    type: String,
    default: 'MessageBox'
  },
  btnCancelText: {
    type: String,
    default: 'Cancel'
  },
  btnConfirmText: {
    type: String,
    default: 'Confirm'
  },
  insert: Object
})

const state = reactive({
  visible: false,
  type: 'CONFIRM'
})

const handleCancelClick = () => {
  state.type = 'CANCEL'
  state.visible = false
}

const handleConfirmClick = () => {
  state.type = 'CONFIRM'
  state.visible = false
}

const setVisible = isVisible => {
  state.visible = isVisible
}

defineExpose({
  state,
  setVisible
})
</script>

<style lang="scss" scoped>
.messagebox-fade-enter-from,
.messagebox-fade-leave-to {
  opacity: 0;
}

.messagebox-fade-enter-active {
  transition: opacity 0.2s ease-in;
}

.messagebox-fade-leave-active {
  transition: opacity 0.2s ease-out;
}

.message-box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 200px;
    background-color: #fff;
    border-radius: 10px;

    .box-board {
      margin: 5px 0;
      display: flex;
      flex-direction: column;
      .btn-group {
        display: flex;
        margin: 5px 0;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        button {
          margin: 0 5px;
        }
      }
    }
  }
}
</style>
