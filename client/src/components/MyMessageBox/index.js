import { createApp, watch } from "vue"
import MyMessageBoxComponent from './index.vue'

function MyMessageBox(options) {
  const MyMessageBoxApp = createApp(MyMessageBoxComponent, options)
  showMessageBox(MyMessageBoxApp, {
    confirm: options.confirm,
    cancel: options.cancel
  })
}

function showMessageBox(app, { confirm, cancel }) {
  const oFragment = document.createDocumentFragment()
  const vm = app.mount(oFragment)
  document.body.appendChild(oFragment)
  console.log(vm)
  vm.setVisible(true)

  watch(vm.state, (state) => {
    if(!state.visible) {
      switch(state.type) {
        case 'CONFIRM':
          typeof confrim === 'function' && confirm()
          break
        case 'CANCEL':
          typeof cancel === 'function' && cancel()
          break
        default:
          break
      }

      hideMessageBox(app)
    }
  })
}

function hideMessageBox(app) {
  app.unmount()
}

export default MyMessageBox