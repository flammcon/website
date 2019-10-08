import Vuex from 'vuex'
import { INCREMENT } from './mutation-types'

const store = new Vuex.Store({
  state: {  
    count: 0
  },
  mutations: {
    [INCREMENT] (state) {
      state.count++;
    }
  }
});

export default store;