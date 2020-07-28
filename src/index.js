import Vue from 'vue';
import Polyglot from 'vue-polyglot';
import App from './App.vue';
import store from './store';

Vue.use(Polyglot, {
  defaultLanguage: 'en',
  languagesAvailable: ['en', 'fr'],
});

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
