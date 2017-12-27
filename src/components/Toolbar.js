/* 函数式写法 */
import React from 'react'

const Toolbar = ({
  notes,
  activeNote,
  handleAdd,
  handleDelete,
  handleFavorite
}) => {

  const goDelete = (notes, handleDelete) => {
    if (notes.length === 0) return
    handleDelete()
  }

  return (
    <div id="toolbar">
      <i onClick={() => handleAdd()} className="glyphicon glyphicon-plus"></i>
      <i onClick={() => handleFavorite()} className={activeNote.favorite ? 'glyphicon glyphicon-star starred' : 'glyphicon glyphicon-star'}></i>
      <i onClick={() => goDelete(notes, handleDelete)} className="glyphicon glyphicon-remove"></i>
    </div>
  )
}

export default Toolbar

/* ES6写法 */
// import React, { Component } from 'react'

// export default class Toolbar extends Component {
//   constructor (props) {
//     super(props)
//     this.goDelete = this.goDelete.bind(this)
//   }
//   goDelete () {
//     const { handleDelete, notes } = this.props
//     if (notes.length === 0) return
//     handleDelete()
//   }

//   render () {
//     const { handleAdd, activeNote, handleFavorite } = this.props
//     return (
//       <div id="toolbar">
//         <i onClick={() => handleAdd()} className="glyphicon glyphicon-plus"></i>
//         <i onClick={() => handleFavorite()} className={activeNote.favorite ? 'glyphicon glyphicon-star starred' : 'glyphicon glyphicon-star'}></i>
//         <i onClick={this.goDelete} className="glyphicon glyphicon-remove"></i>
//       </div>
//     )
//   }
// }
