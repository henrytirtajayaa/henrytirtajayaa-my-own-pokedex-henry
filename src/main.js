import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faHeartCircleCheck, faHeart)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')