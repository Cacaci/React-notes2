import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  SET_ACTIVE_NOTE,
  TOGGLE_FAVORITE,
  TOGGLE_FILTER
} from '../constants'

export const addNote = () => ({ type: ADD_NOTE })

export const editNote = (text) => {
  return {
    type: EDIT_NOTE,
    text
  }
}

export const deleteNote = () => ({ type: DELETE_NOTE })

export const setActiveNote = (note) => {
  return {
    type: SET_ACTIVE_NOTE,
    note
  }
}

export const toggleFavorite = () => ({ type: TOGGLE_FAVORITE })

/* 写法一： */
// export const toggleFilter = style => {
//   return {
//     type: TOGGLE_FILTER,
//     style
//   }
// }

/* 写法二：用括号括起来可以省略return */
export const toggleFilter = style => ({
  type: TOGGLE_FILTER,
  style
})
