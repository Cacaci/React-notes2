import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Editor from '../components/Editor'
import NoteList from '../components/NoteList'
import Toolbar from '../components/Toolbar'

// import { addNote, editNote, deleteNote, setActiveNote, toggleFavorite, toggleFilter } from '../actions'
import * as Actions from '../actions'
import index from '../reducers/index';

const App = ({
  actions,
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
      actions={actions}
      notes={notes}
      activeNote={activeNote}
      handleAdd={handleAdd}
      handleDelete={handleDelete}
      handleFavorite={handleFavorite} />
    <NoteList
      actions={actions}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      handleFavorite={handleFavorite}
      show={show}
      notes={notes}
      activeNote={activeNote}
      handleActiveNote={handleActiveNote}
      handleFilter={handleFilter} />
    <Editor actions={actions} handleEdit={handleEdit} activeNote={activeNote} />
  </div>
)

const mapStateToProps = (state) => ({
  notes: state.notes,
  activeNote: state.activeNote,
  show: state.show
})

// const mapDispatchToProps = (dispatch) => ({
//   handleAdd: () => dispatch(addNote()),
//   handleActiveNote: note => dispatch(setActiveNote(note)),
//   handleDelete: index => dispatch(deleteNote(index)),
//   handleEdit: text => dispatch(editNote(text)),
//   handleFavorite: index => dispatch(toggleFavorite(index)),
//   handleFilter: style => dispatch(toggleFilter(style))
// })

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
