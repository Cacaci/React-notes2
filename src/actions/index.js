import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  DELETE_NOTE_ALL,
  SET_ACTIVE_NOTE,
  TOGGLE_FAVORITE,
  TOGGLE_FILTER
} from '../constants'

import api from '../api'

// 使用redux-thunk中间件，在actions里一步触发dispatch
export const addNote = () => {
  return (dispatch, getState) => {
    dispatch({type: ADD_NOTE})
    // 在需要dispatch其他actions并且需要传递局部state的时候，可以通过getState这个方法去获取局部状态去传递给下一个actions

    // await
    // async function getUserInfo() {
    //   const user = await api.getLoginInfo()
    //   console.log(user)
    // }
    const getUserInfo = async () => {
      const user = await api.getLoginInfo()
      console.log(user)
    }

    // 异步代码开始...
    setTimeout(() => {
      console.log('获取state局部状态show: ', getState().show)
      getUserInfo()
      api.getAccount()
        .then(res => {
          dispatch(editNote(`执行异步修改: ${res.name}`))
          return res
        })
        .then(res => res.name)
        .then(name => {
          console.log(`我的名字叫${name}`)
        })
        .catch(err => {
          console.log(err)
        })
    }, 2000)
  }
}

// 不使用redux-thunk中间件
// export const addNote = () => ({ type: ADD_NOTE })

export const editNote = text => ({
  type: EDIT_NOTE,
  text
})

export const deleteNote = index => ({ 
  type: DELETE_NOTE,
  index
})

export const deleteNoteAll = () => ({ type: DELETE_NOTE_ALL })

export const setActiveNote = (note) => ({
  type: SET_ACTIVE_NOTE,
  note
})

export const toggleFavorite = index => ({ 
  type: TOGGLE_FAVORITE,
  index
})

/* 写法二：用括号括起来可以省略return */
export const toggleFilter = style => ({
  type: TOGGLE_FILTER,
  style
})
