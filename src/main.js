import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import Vuelidate from 'vuelidate'
import { store } from './store/store'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import firebase from "firebase/app";


Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(Vuelidate)

const firebaseConfig = {
  apiKey: "AIzaSyBmU6xWas9-Zd2YOrg7Rj08xMSNk19RWTw",
  authDomain: "moviecatalog-5b6c8.firebaseapp.com",
  projectId: "moviecatalog-5b6c8",
  storageBucket: "moviecatalog-5b6c8.appspot.com",
  messagingSenderId: "718429604244",
  appId: "1:718429604244:web:3bf631c02f3546afd72781"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
