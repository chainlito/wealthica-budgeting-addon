import Vue from 'vue';
import Polyglot from 'vue-polyglot';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Polyglot, {
  defaultLanguage: 'en',
  languagesAvailable: ['en', 'fr'],
});

const vueApp = new Vue({
  el: '#app',
  render: (h) => h(App),
});

console.log(vueApp);
