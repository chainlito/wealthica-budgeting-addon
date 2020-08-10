import moment from 'moment';
import * as types from '../mutation-types';

/* eslint no-shadow: ['error', { 'allow': ['state', 'getters'] }] */

// initial state
const state = {
  selectedDate: '',
};

// getters
const getters = {
  selectedDate: (state) => state.selectedDate,
};

// actions
const actions = {
  initDate({
    commit,
  }) {
    commit(types.SET_DATE, { date: moment().format('YYYY-MM') });
  },

  updateDate({
    commit, dispatch,
  }, date = '') {
    commit(types.SET_DATE, { date });
    dispatch('getTransactionsList');
  },
};

// mutations
const mutations = {
  [types.SET_DATE](state, { date }) {
    state.selectedDate = date;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
