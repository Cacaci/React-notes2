/* 函数式写法 */
// import React from 'react'

// const NoteList = ({
//   show,
//   notes,
//   activeNote,
//   handleFilter,
//   handleEdit,
//   handleActiveNote
// }) => {
//   const updateActive = (e, note, handleActiveNote, handleEdit) => {
//     e.preventDefault()
//     handleActiveNote(note)
//     handleEdit(note.text)
//   }
//   const filterNotes = show === 'all' ? notes : notes.filter(note => note.favorite === true)
//   return (
//     <div id="notes-list">
//       <div id="list-header">
//         <h2>Notes | coligo</h2>
//         <div className="btn-group btn-group-justified" role="group">
//           <div className="btn-group" role="group">
//             <button onClick={() => handleFilter('all')} type="button" className="btn btn-default">All Notes</button>
//           </div>
//           <div className="btn-group" role="group">
//             <button onClick={() => handleFilter('favorite')} type="button" className="btn btn-default">Favorites</button>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="list-group">
//           {filterNotes.map((note, index) => {
//             return (
//               <a onClick={e => this.updateActive(e, note, handleActiveNote, handleEdit)} key={index} className={activeNote.id === note.id ? 'list-group-item active' : 'list-group-item'} href="Javascript:void(0);">
//                 <span className="list-group-item-heading">{note.text.substring(0, 30)}</span>
//               </a>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NoteList

/* ES6写法 */
import React, { Component, PropTypes } from 'react'

export default class NoteList extends Component {
  constructor (props) {
    super(props)
    this.updateActive = this.updateActive.bind(this)
  }
  updateActive (e, note) {
    const { handleActiveNote, handleEdit } = this.props
    e.preventDefault()
    handleActiveNote(note)
    handleEdit(note.text)
  }

  render () {
    const { notes, show, activeNote, handleFilter } = this.props
    let filterNotes = show === 'all' ? notes : notes.filter(note => note.favorite === true)
    return (
      <div id="notes-list">
        <div id="list-header">
          <h2>Notes | coligo</h2>
          <div className="btn-group btn-group-justified" role="group">
            <div className="btn-group" role="group">
              <button onClick={() => handleFilter('all')} type="button" className="btn btn-default">All Notes</button>
            </div>
            <div className="btn-group" role="group">
              <button onClick={() => handleFilter('favorite')} type="button" className="btn btn-default">Favorites</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="list-group">
            {filterNotes.map((note, index) => {
              return (
                <a key={index} className="list-group-item" href="Javascript:void(0);">
                  <span className="list-group-item-heading">{note.text.substring(0, 30)}</span>
                  <div className="list-group-btns">
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-remove"></span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
