import {
  USER_SET,
  USER_SET_INFO
} from '../mutation-types'

const state = {
  'data': {
    'openid': 1,
    'nickname': 'Test',
    'userinfo': 'This is a brief info',
    'unreadMessageNum': 1,
    'focusUser': {}
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
  },
  [USER_SET_INFO] (state, res) {

  }
}

export default {
  state,
  mutations
}