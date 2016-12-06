import {
  MAIN_TITLE_CHANGE
} from './mutation-types'


export function getUserInfo(openid) {
    $.get('')
}

export function changeMainTitle({dispatch}, title) {
  dispatch(MAIN_TITLE_CHANGE, title)
}