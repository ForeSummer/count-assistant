import V from '../common'


import Vuex from 'Vuex'

V.Vue.use(Vuex)

import {
  UPDATE_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  MODIFY_ITEM,
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  MODIFY_CUSTOMER
} from './mutation-types'


const state = {
  items:[{
        'name': '1',
        'price': '1',
        'amount': 0,
      }],
  customers: [],
  results: [],
  message: 'test',
  count: 0,
}



const mutations = {
  [ADD_ITEM] (state, item) {
    state.items.push(item)
    state.message = item.name
  },
  [DELETE_ITEM] (state, index) {
    state.items.splice(index, 1)
  },
  [MODIFY_ITEM] (state, index, item) {
    state.items[index] = item
  },
  [UPDATE_ITEMS] (state, items) {
    state.items = items
  },
  [ADD_CUSTOMER] (state, person) {
    state.customers.push(person)
  },
  [DELETE_CUSTOMER] (state, index) {
    state.customers.splice(index, 1)
  },
  [MODIFY_CUSTOMER] (state, index, person) {
    state.customers[index] = person;
  },
  INCREMENT (state) {
    console.log(state.count)
    state.count ++
  },
  DECREMENT (state) {
    state.count--
  }
}

export default new Vuex.Store({
  state,
  mutations
})