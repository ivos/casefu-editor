import { createApp } from 'vue'
import 'bootstrap/dist/js/bootstrap.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from './router'
import App from './App'
import './style.css'

createApp(App)
  .use(router)
  .mount('#app')
