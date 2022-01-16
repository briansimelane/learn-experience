import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'



// firebase imports
import { auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

// do get rid of the flicker while the app doesnt have a User the first time
let app 

onAuthStateChanged(auth, () => {
    if(!app){
        app = createApp(App)
            .use(store)
            .use(router)
            .mount('#app')
    }
})

