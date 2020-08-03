import Vue from 'vue';
import './plugins/bootstrap';
import './plugins/iframe';
import './plugins/fragment';

import App from './App.vue';
import store from './store';

store.dispatch('initAddon');

const vueApp = new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');

export default vueApp;
