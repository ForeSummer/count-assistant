import {
  ACT_SET_DETAIL,
} from '../mutation-types'

const state = {
  'data': {
    'currentAct': {
      'id': -1,
      'title': '',
      'time': '',
      'place': '',
      'num': -1,
      'remain': -1,
      'isAuthor': false,
      'brief': '',
      'info': ''
    },
    'ActList': {

    }
  },
  'status': {

  }
}

const mutations = {
  [ACT_SET_DETAIL] (state, res) {
    state.data.currentAct.id = res.id;
    state.data.currentAct.title = res.title;
    state.data.currentAct.isAuthor = res.isAuthor;
    state.data.currentAct.time = res.time;
    state.data.currentAct.place = res.place;
    state.data.currentAct.num = res.num;
    state.data.currentAct.remain = res.remain;
    state.data.currentAct.brief = res.brief;
    state.data.currentAct.info = res.info;
  }
}

export default {
  state,
  mutations
}