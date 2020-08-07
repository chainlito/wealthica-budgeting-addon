import * as _ from 'lodash';

import { Addon } from '@wealthica/wealthica.js';
import * as types from '../mutation-types';

// initial state
const state = {
  addon: null,
  addonOptions: {},
};

/* eslint no-shadow: ['error', { 'allow': ['state', 'getters'] }] */

// getters
const getters = {
  addon: (state) => state.addon,
  language: (state) => state.addonOptions.language || 'en',
  data: (state) => state.addonOptions.data || {},
};

// actions
const actions = {
  initAddon({
    commit, dispatch, getters, state,
  }) {
    // eslint-disable-next-line
    console.log('Init Addon!');
    if (process.env.NODE_ENV !== 'development') {
      // eslint-disable-next-line
      console.log('Production mode');
      const updateOptions = (options) => {
        const newOptions = _.merge({}, state.addonOptions, options);
        commit(types.UPDATE_ADDON_OPTIONS, { data: newOptions });
        dispatch('updateBudgetingData', getters.data.budgeting, { root: true });
      };

      const addon = new Addon();
      commit(types.INIT_ADDON, { addon });

      addon
        .on('init', updateOptions)
        .on('update', updateOptions);
    }
  },

  updateAddonData({
    commit, dispatch, getters, state,
  }, data = {}) {
    return new Promise((resolve, reject) => {
      getters.addon.saveData(data).then((response) => {
        const newOptions = _.merge({}, state.addonOptions, { data });
        commit(types.UPDATE_ADDON_OPTIONS, newOptions);
        dispatch('updateBudgetingData', data.budgeting, { root: true });
        resolve(response);
      }).catch((err) => reject(err));
    });
  },
};

// mutations
const mutations = {
  [types.INIT_ADDON](state, { addon }) {
    state.addon = addon;
  },
  [types.UPDATE_ADDON_OPTIONS](state, { data }) {
    state.addonOptions = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
