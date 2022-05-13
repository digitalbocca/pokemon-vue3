import { createApp } from 'vue'
import App from './app.vue'
import store from './store'

import './sass/styles.sass'

const app = createApp(App)

app.use(store)

app.mount('#app')
