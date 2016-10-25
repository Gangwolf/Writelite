import Vue from 'vue';
import Vuex from 'vuex';
import store from './state/store.js';
import App from './App.vue';

Vue.use(Vuex);
Vue.config.debug = true;
Vue.config.devtools = true;

const app = new Vue({
  store,
  render: h => h(App)
});

app.$mount('#app');