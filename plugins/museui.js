import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui-loading/dist/muse-ui-loading.css'
import 'muse-ui-message/dist/muse-ui-message.css'
import Toast from 'muse-ui-toast'
import Loading from 'muse-ui-loading'
import Message from 'muse-ui-message'

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

Vue.use(Message)

export default toastConfig
