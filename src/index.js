import Vue from 'vue';
import Polyglot from 'vue-polyglot';
import KProgress from 'k-progress';
import { BootstrapVue, BootstrapVueIcons, BIcon } from 'bootstrap-vue';
import { Plugin } from 'vue-fragment';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';

import App from './components/MainWidget.vue';
import store from './store';

Vue.use(Polyglot, {
  defaultLanguage: 'en',
  languagesAvailable: ['en', 'fr'],
});
Vue.use(Plugin);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.component('k-progress', KProgress);
Vue.component('b-icon', BIcon);

const vueApp = new Vue({
  el: '#app',
  store,
  watch: {
    language(lang) {
      this.$polyglot.setLang({ lang });
    },
  },
  render: (h) => h(App),
});

export default vueApp;
