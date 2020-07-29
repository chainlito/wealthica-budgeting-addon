import * as types from '../mutation-types';

// initial state
const state = {
  allTransactions: [],
};

/* eslint no-shadow: ['error', { 'allow': ['state', 'getters'] }] */

// getters
const getters = {
  allTransactions: (state) => state.allTransactions,
};

// actions
const actions = {
  getTransactionsList({
    commit, rootGetters,
  }) {
    return new Promise((resolve, reject) => {
      const storeTransactions = (transactions) => {
        commit(types.RECEIVE_TRANSACTIONS_LIST, { transactions });
        resolve(transactions);
      };

      rootGetters.addon.api.getTransactions().then((transactions) => {
        storeTransactions(transactions);
      }).catch((err) => {
        storeTransactions([]);
        reject(err);
      });
    });
  },
};

// mutations
const mutations = {
  [types.RECEIVE_TRANSACTIONS_LIST](state, { transactions }) {
    state.allTransactions = transactions;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
