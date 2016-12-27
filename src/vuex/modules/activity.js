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
      'num': -1,
      'passed': -1,
      'isAuthor': false,
      'brief': '',
      'info': '',
      'host': '',
      'contact': '',
      'image': '',
      'review': 'true',
      'startTime': '',
      'endTime': '',
      'waitingUser': [],
      'denyedUser': [],
      'passedUser': []
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
    'listTitle': "所有活动",
    'totalPage': 6,
    'currentPage': 3,
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
    state.data.currentAct.passed = res.passed;
    state.data.currentAct.brief = res.brief;
    state.data.currentAct.info = res.info;
    state.data.currentAct.waitingUser = res.waitingUser;
    state.data.currentAct.denyedUser = res.denyedUser;
    state.data.currentAct.passedUser = res.passedUser;
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
