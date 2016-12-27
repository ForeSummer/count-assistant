import {
  MAIN_TITLE_CHANGE
} from './mutation-types'

const default_img = ""

export function getUserInfo(openid) {
    $.get('')
}

export function changeMainTitle({dispatch}, title) {
  dispatch(MAIN_TITLE_CHANGE, title)
}

export function getTimeStamp(date, time) {
  let dateList = date.split('/')
  let timeList = time.split(':')
  let dateObj = new Date(dateList[2], dateList[0]-1, dateList[1], timeList[0], timeList[1], 0)
  return dateObj.getTime()
}

export function getTimeString(timeStamp) {
  let dateObj = new Date(timeStamp)
  return {
    date: (dateObj.getMonth()+1) + '/' + dateObj.getDate() + '/' + dateObj.getFullYear(),
    time: dateObj.getHours() + ':' + dateObj.getMinutes()
  }
}

export function createActList(resData) {
  let actList = []
  let start = "", end = ""
  for (let i = 0; i < resData.length; i ++) {
    let act = {}
    start = getTimeString(resData[i].startTime)
    end = getTimeString(resData[i].endTime)

    act.title = resData[i].title
    act.startTime = resData[i].startTime
    act.endTime = resData[i].endTime
    act.time = start.date + ' ' + start.time + ' 至 ' + end.date  + ' ' + end.time
    act.place = resData[i].place
    act.brief = resData[i].brief
    act.info = resData[i].info
    act.members = resData[i].members
    act.id = resData[i].id
    act.members = resData[i].members
    if(resData[i].image == '') {
      act.image = default_img
    }
    else {
      act.image = resData[i].image
    }
    act.type = resData[i].type
    act.passed = resData[i].passed
    act.host = resData[i].host
    act.contact = resData[i].contact

    actList.push(act)
  }
  return actList
}