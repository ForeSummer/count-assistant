import Vue from 'Vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const state = {
  items:[],
  customers: [],
  results: []
}

const mutations = {
  _addItem (item) {
    state.items.push(item)
    return state.items.length
  },
  _deleteItem (index) {
  	if(index < 0 || state.items.length <= index) {
  		return false
  	}
    state.items.splice(index, 1);
    return true
  },
  _getItems() {
  	return state.items;
  },
}

export default new Vuex.Store({
  state,
  mutations
})