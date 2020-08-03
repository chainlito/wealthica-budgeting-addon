import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons, BIcon } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.component('b-icon', BIcon);
