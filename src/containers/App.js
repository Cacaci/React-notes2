import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Editor from '../components/Editor'
import NoteList from '../components/NoteList'
import Toolbar from '../components/Toolbar'

// import { addNote, editNote, deleteNote, setActiveNote, toggleFavorite, toggleFilter } from '../actions'
import * as Actions from '../actions'

/* 不使用bindActionCreators */
// const App = ({
//   actions,
//   dispatch,
//   notes,
//   show,
//   activeNote,
//   handleAdd,
//   handleDelete,
//   handleActiveNote,
//   handleFavorite,
//   handleFilter,
//   handleEdit
// }) => (
//   <div id="note">
//     <Toolbar handleAdd={handleAdd} />
//     <NoteList
//       actions={actions}
//       handleEdit={handleEdit}
//       handleDelete={handleDelete}
//       handleFavorite={handleFavorite}
//       show={show}
//       notes={notes}
//       activeNote={activeNote}
//       handleActiveNote={handleActiveNote}
//       handleFilter={handleFilter} />
//     <Editor handleEdit={handleEdit} activeNote={activeNote} />
//   </div>
// )

// const mapStateToProps = state => ({
//   notes: state.notes,
//   activeNote: state.activeNote,
//   show: state.show
// })

// const mapDispatchToProps = dispatch => ({
//   handleAdd: () => dispatch(addNote()),
//   handleActiveNote: note => dispatch(setActiveNote(note)),
//   handleDelete: index => dispatch(deleteNote(index)),
//   handleEdit: text => dispatch(editNote(text)),
//   handleFavorite: index => dispatch(toggleFavorite(index)),
//   handleFilter: style => dispatch(toggleFilter(style))
// })


/* 使用bindActionCreators */
const App = ({
  actions,
  notes,
  show,
  activeNote
}) => (
  <div id="note">
    {/* 这里可以指定子组件接收的props，多个props的话可以直接传递actions */}
    <Toolbar handleAdd={actions.addNote} />
    <NoteList
      notes={notes}
      show={show}
      activeNote={activeNote}
      handleActiveNote={actions.setActiveNote}
      handleEdit={actions.editNote}
      handleDelete={actions.deleteNote}
      handleFilter={actions.toggleFilter}
      handleFavorite={actions.toggleFavorite} />
    <Editor activeNote={activeNote} handleEdit={actions.editNote} />
  </div>
)

// 容器组件获取state，在展示组件中依次往下传递
const mapStateToProps = (state) => ({
  notes: state.notes,
  activeNote: state.activeNote,
  show: state.show
})

// 使用bindActionCreators，不再手动dispatch一个action
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
