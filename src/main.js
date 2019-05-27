import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';
import DatePicker from 'vuejs-datepicker'
import moment from 'moment'

Vue.config.productionTip = false;
Vue.use(VeeValidate, {
  events: 'change|blur',
},DatePicker,moment);

new Vue({
  router,
  store,
  render: (h) => {
    return h(App)
  }
}).$mount('#app');
