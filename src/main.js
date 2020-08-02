import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons, BIcon } from 'bootstrap-vue';
import { Plugin } from 'vue-fragment';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';

import vuetify from './plugins/vuetify';
import App from './components/MainWidget.vue';
import store from './store';

Vue.use(Plugin);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.component('b-icon', BIcon);

store.dispatch('initAddon');

const vueApp = new Vue({
  el: '#app',
  store,
  vuetify,
  render: (h) => h(App),
});

export default vueApp;
