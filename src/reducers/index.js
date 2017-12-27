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
  const handleDelete = (state, id) => {
    let newNotes
    let notes = state.notes
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        newNotes = [...notes.slice(0, i), ...notes.slice(i + 1)]
      }
    }
    return Object.assign({}, state, {
      notes: newNotes,
      activeNote: newNotes[0] ? newNotes[0] : []
    })
  }
  const handleFavorite = (state) => {
    let id = state.activeNote.id
    let notes = state.notes
    let newNotes = notes.map(item => {
      if (item.id === id) {
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
      let newNote = {id: newId, text: 'New note' + `${newId}`, favorite: false}
      return Object.assign({}, state, {
        notes: [
          ...state.notes,
          newNote
        ],
        activeNote: newNote
      })
    case DELETE_NOTE:
      return handleDelete(state, state.activeNote.id)
    case EDIT_NOTE:
      return handleEdit(state, action.text)
    case SET_ACTIVE_NOTE:
      return Object.assign({}, state, {
        notes: [...state.notes],
        activeNote: action.note
      })
    case TOGGLE_FAVORITE:
      return handleFavorite(state)
    case TOGGLE_FILTER:
      return Object.assign({}, state, {
        show: action.style 
      })
    default:
      return state
  }
}

export default notes