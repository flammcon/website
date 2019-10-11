import Vue from 'vue'
import Vuex from 'vuex'

import smash from '../api/smash';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {  
    characters: [],
    players: [],
  },
  mutations: {
    setCharacters (state, characters) {
      state.characters = characters;
    },
  },
  actions: {
    getAllCharacters ({ commit }) {
      smash.getCharacters(characters => {
        commit('setCharacters', characters);
      });
    }
  }
});

export default store;