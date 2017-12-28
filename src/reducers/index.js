import {
  ADD_NOTE, 
  DELETE_NOTE,
  EDIT_NOTE,
  SET_ACTIVE_NOTE,
  TOGGLE_FAVORITE,
  TOGGLE_FILTER
} from '../constants'

const initState = {
  notes: [{id: 0, text: 'New note', favorite: false}], // 所有笔记
  activeNote: {id: 0, text: 'New note', favorite: false}, // 当前笔记
  show: 'all'
}

let id = 0

const notes = (state = initState, action) => {
  const handleDelete = (state, index) => {
    let newNotes
    let notes = state.notes
    newNotes = [...notes.slice(0, index), ...notes.slice(index + 1)]
    return Object.assign({}, state, {
      notes: newNotes,
      activeNote: newNotes[index] || newNotes[0] || {}
    })
    
  }
  const handleFavorite = (state, noteIndex) => {
    let notes = state.notes
    let newNotes = notes.map((item, index) => {
      if (index === noteIndex) {
        item.favorite = !item.favorite
      }
      return item
    })
    return Object.assign({}, state, {
      notes: [...newNotes],
      activeNote: {...state.activeNote, favorite: !state.activeNote.favorite}
    })
  }
  const handleEdit = (state, text) => {
    let id = state.activeNote.id
    let newNotes = state.notes.map(item => {
      if (item.id === id) {
        item.text = text
      }
      return item
    })
    return Object.assign({}, state, {
      notes: [...newNotes],
      activeNote: {...state.activeNote, text: text}
    })
  }

  switch (action.type) {
    case ADD_NOTE: 
      let newId = ++id
      // eslint-disable-next-line
      let newNote = {id: newId, text: 'New note' + `${newId}`, favorite: false}
      return Object.assign({}, state, {
        notes: [
          ...state.notes,
          newNote
        ],
        activeNote: newNote
      })
    case DELETE_NOTE:
      return handleDelete(state, action.index)
    case EDIT_NOTE:
      return handleEdit(state, action.text)
    case SET_ACTIVE_NOTE:
      return Object.assign({}, state, {
        notes: [...state.notes],
        activeNote: action.note
      })
    case TOGGLE_FAVORITE:
      return handleFavorite(state, action.index)
    case TOGGLE_FILTER:
      return Object.assign({}, state, {
        show: action.style 
      })
    default:
      return state
  }
}

export default notes