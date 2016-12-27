import {
  USER_SET,
  USER_SET_INFO,
  USER_CLEAR,
} from '../mutation-types'

const state = {
  'data': {
    'openid': 1,
    'nickname': 'Test',
    'userinfo': 'This is a brief info',
    'unreadMessageNum': 1,
    'focusUser': {
      'openid': -1,
      'nickname': '',
      'userinfo': '',
      'phone': -1,
      'mail': '',
      'isSelf': false,
      'activityCreated': [],
      'activityParticipate': []
    }
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
    state.data.focusUser.openid = res.openid;
    state.data.focusUser.nickname = res.nickname;
    state.data.focusUser.userinfo = res.userinfo;
    state.data.focusUser.phone = res.phone;
    state.data.focusUser.mail = res.mail;
    state.data.focusUser.activityCreated = res.activityCreated;
    state.data.focusUser.activityParticipate = res.activityParticipate;
    state.data.focusUser.isSelf = (state.data.openid == state.data.focusUser.openid);
  }
}

export default {
  state,
  mutations
}
