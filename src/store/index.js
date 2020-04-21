import Vue from "vue";
import Vuex from "vuex";

import user from './modules/user';
import getters from './getters';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  modules: { user },
  plugins: [
    createPersistedState({
      storage: window.localStorage
    })
  ],
  getters
});
