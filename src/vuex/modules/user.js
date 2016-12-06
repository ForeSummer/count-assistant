import {
  USER_SET
} from '../mutation-types'

const state = {
  'data': {
    'openid': '',
    'nickname': 'Test',
    'unreadMessageNum': 0,
  },
  'status': {

  }
}

const mutations = {
  [USER_SET] (state, user) {
    //state.id = user.user_id,
    //state.authenticated = true,
    //state.new_message_count = 0,
    //state.real_name = user.real_name
  }
}

export default {
  state,
  mutations
}