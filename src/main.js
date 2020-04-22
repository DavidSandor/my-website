import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/store/store'

// Font awesome icons
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

// Boostrap-vue
import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'

// Register global components
Vue.component('fa-icon', Icon)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
