import Vue from 'vue';
import Vuex from 'vuex';
import addon from './modules/addon';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { addon },
});
