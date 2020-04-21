import * as types from '@/store/mutation-Type';
const user = {
  state: {
    // token
    token: null,
  },
  mutations: {
    [types.ACCESS_TOKEN]: (state, status) => {
      state.token = status;
    }
  },
  actions: {
    SetToken ({ commit }, status) {
      commit(types.ACCESS_TOKEN, status);
    }
  }
};
export default user;
