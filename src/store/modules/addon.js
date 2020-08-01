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
  momentLocale: (state, getters) => ((getters.language === 'fr') ? 'fr-ca' : getters.language),
  data: (state) => state.addonOptions.data || {},
};

// actions
const actions = {
  initAddon({
    commit, dispatch, getters, state,
  }) {
    const updateOptions = (options) => {
      const newOptions = _.merge({}, state.addonOptions, options);
      commit(types.UPDATE_ADDON_OPTIONS, { data: newOptions });

      // eslint-disable-next-line
      console.log(getters.data, getters.data.budgeting);
      dispatch('updateBudgetingData', getters.data.budgeting, { root: true });
    };

    const addon = new Addon({});

    addon.on('init', updateOptions).on('update', updateOptions);
    commit(types.INIT_ADDON, { addon });
  },

  updateAddonData({
    commit, dispatch, getters, state,
  }, data = {}) {
    return new Promise((resolve, reject) => {
      getters.addon.saveData(data).then((response) => {
        const newOptions = _.merge({}, state.addonOptions, { data });
        commit(types.UPDATE_ADDON_OPTIONS, newOptions);
        dispatch('updateBudgetingData', data);
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
