import {
  ACT_SET_DETAIL,
  ACT_SET_LIST,
  ACT_SET_TITLE,
} from '../mutation-types'

const state = {
  'data': {
    'currentAct': {
      'id': -1,
      'title': '',
      'type': '',
      'time': '',
      'place': '',
      'members': -1,
      'passed': -1,
      'denyed': -1,
      'participated': -1,
      'isAuthor': false,
      'brief': '',
      'info': '',
      'host': '',
      'contact': '',
      'image': '',
      'review': 'true',
      'startTime': '',
      'endTime': ''
    },
    'actList': [
      {
        title: "test title",
        startTime: "2016-10-22",
        endTime: "2016-11-13",
        place: "1#412",
        brief: "This is a brief introduction",
      },
      {
        title: "test title",
        startTime: "2016-10-22",
        endTime: "2016-11-13",
        place: "1#412",
        brief: "This is a brief introduction",
      }
    ]
  },
  'status': {
    'listTitle': ""
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
  },
  [ACT_SET_LIST] (state, data) {
    console.log(data)
    actList = data
  },
  [ACT_SET_TITLE] (state, title) {
    state.status.listTitle = title
  }
}

export default {
  state,
  mutations
}