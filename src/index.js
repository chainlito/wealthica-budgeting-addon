import Vue from 'vue';
import Polyglot from 'vue-polyglot';
import KProgress from 'k-progress';
import App from './App.vue';
import store from './store';

Vue.use(Polyglot, {
  defaultLanguage: 'en',
  languagesAvailable: ['en', 'fr'],
});
Vue.component('k-progress', KProgress);

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
