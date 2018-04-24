
// initial state
const state = {
  all: []
};

const getters = {
  allShows: _state => _state.all
};

const actions = {
  setShows ({ commit }) {
    commit('setShows', commit.payload);
  }
};

const mutations = {
  setShows (_state, shows) {
    _state.all = shows;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
