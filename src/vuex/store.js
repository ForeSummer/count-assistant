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
    state.items.splice(index, 1)
    return true
  },
  _getItems() {
  	return state.items
  },
  _addCustomer (person) {
  	state.customers.push(person)
  	return state.customers.length
  },
  _deleteCustomer (index) {
  	if(index < 0 || state.customers.length <= index) {
  		return false
  	}
    state.customers.splice(index, 1)
    return true
  },
  _modifyCustomer (index, person) {
  	if(index < 0 || state.customers.length <= index) {
  		return false
  	}
  	state.customers[index] = person;
  	return true
  },
  _getCustomer() {
  	return state.customers
  }
}

export default new Vuex.Store({
  state,
  mutations
})