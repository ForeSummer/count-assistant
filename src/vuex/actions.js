import {
  MAIN_TITLE_CHANGE
} from './mutation-types'


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
  let start = "",end = ""
  for (let i = 0; i < resData.length; i ++) {
    let act = {}
    start = getTimeString(resData[i].startTime)
    end = getTimeString(resData[i].endTime)
    act.title = resData[i].title
    act.time = start.date + ' ' + start.time + ' 至 ' + end.date  + ' ' + end.time
    act.place = resData[i].place
    act.brief = resData[i].brief
    act.members = resData[i].members
    actList.push(act)
  }
  return actList
}