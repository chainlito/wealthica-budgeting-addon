import Vue from 'vue';
import App from './components/ConfigWidget.vue';

Vue.config.productionTip = false;

const vueApp = new Vue({
  el: '#app',
  render: (h) => h(App),
});

export default vueApp;
