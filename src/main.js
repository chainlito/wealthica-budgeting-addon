import Vue from 'vue';
import { mapGetters } from 'vuex';
import App from './App.vue';
import store from './store';
import './plugins/bootstrap';
import './plugins/fragment';
import './plugins/polyglot';

Vue.config.productionTip = false;
store.dispatch('initDate');
store.dispatch('initAddon');

const vueApp = new Vue({
  store,
  computed: {
    ...mapGetters({
      language: 'language',
    }),
  },
  watch: {
    language(lang) {
      this.$polyglot.setLang({ lang });
    },
  },
  render: (h) => h(App),
}).$mount('#app');

export default vueApp;
