import React from 'react'
import { connect } from 'react-redux'

import Editor from '../components/Editor'
import NoteList from '../components/NoteList'
import Toolbar from '../components/Toolbar'

import { addNote, editNote, deleteNote, setActiveNote, toggleFavorite, toggleFilter } from '../actions'

const App = ({
  dispatch,
  notes,
  show,
  activeNote,
  handleAdd,
  handleDelete,
  handleActiveNote,
  handleFavorite,
  handleFilter,
  handleEdit
}) => (
  <div id="note">
    <Toolbar
      notes={notes}
      activeNote={activeNote}
      handleAdd={handleAdd}
      handleDelete={handleDelete}
      handleFavorite={handleFavorite} />
    <NoteList
      handleEdit={handleEdit}
      show={show}
      notes={notes}
      activeNote={activeNote}
      handleActiveNote={handleActiveNote}
      handleFilter={handleFilter} />
    <Editor handleEdit={handleEdit} activeNote={activeNote} />
  </div>
)

const mapStateToProps = (state) => ({
  notes: state.notes,
  activeNote: state.activeNote,
  show: state.show
})

const mapDispatchToProps = (dispatch) => ({
  handleAdd: () => dispatch(addNote()),
  handleActiveNote: note => dispatch(setActiveNote(note)),
  handleDelete: () => dispatch(deleteNote()),
  handleEdit: text => dispatch(editNote(text)),
  handleFavorite: () => dispatch(toggleFavorite()),
  handleFilter: style => dispatch(toggleFilter(style))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
