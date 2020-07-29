import Vue from 'vue';
import Vuex from 'vuex';
import addon from './modules/addon';
import transactions from './modules/transactions';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { addon, transactions },
});
