import Vue from 'vue';
import Polyglot from 'vue-polyglot';
import KProgress from 'k-progress';
import { Plugin } from 'vue-fragment';
import App from './components/MainWidget.vue';
import store from './store';

Vue.use(Polyglot, {
  defaultLanguage: 'en',
  languagesAvailable: ['en', 'fr'],
});
Vue.component('k-progress', KProgress);
Vue.use(Plugin);

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
