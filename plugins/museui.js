import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui-loading/dist/muse-ui-loading.css'
import Toast from 'muse-ui-toast'
import Loading from 'muse-ui-loading'

Vue.use(MuseUI)

const toastConfig = {
  position: 'top',
  time: 2000, // 持续时间定为2s
  close: false,
  color: '#2196f3',
  successIcon: '',
  infoIcon: '',
  warningIcon: '',
  errorIcon: '' 
}

Vue.use(Toast, toastConfig)
Vue.use(Loading)

export default toastConfig
