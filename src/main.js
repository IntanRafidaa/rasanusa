<<<<<<< HEAD
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// tambahin ini ⬇️
import './index.css'
=======
import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import "./assets/main.css"
>>>>>>> da3dd62fb1b46002dcb031c258fa1b55dc7db935

const app = createApp(App)
app.use(createPinia())
app.use(router)
<<<<<<< HEAD
app.mount('#app')
=======
app.mount("#app")
>>>>>>> da3dd62fb1b46002dcb031c258fa1b55dc7db935
