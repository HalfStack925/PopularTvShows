/*
  Title: Popular TV Shows
  Developer: Mike Winchel
  Date: 12/6/2020
  Purpose: To display popular
  tv shows from api using Vue CLI
*/

import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
