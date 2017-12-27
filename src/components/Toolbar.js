/* 函数式写法 */
// import React from 'react'

// const Toolbar = ({
//   notes,
//   activeNote,
//   handleAdd,
//   handleDelete,
//   handleFavorite
// }) => {

//   const goDelete = (notes, handleDelete) => {
//     if (notes.length === 0) return
//     handleDelete()
//   }

//   return (
//     <div id="toolbar">
//       <i onClick={() => handleAdd()} className="glyphicon glyphicon-plus"></i>
//       <i onClick={() => handleFavorite()} className={activeNote.favorite ? 'glyphicon glyphicon-star starred' : 'glyphicon glyphicon-star'}></i>
//       <i onClick={() => goDelete(notes, handleDelete)} className="glyphicon glyphicon-remove"></i>
//     </div>
//   )
// }

// export default Toolbar

/* ES6写法(actions)*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Toolbar extends Component {
  render () {
    const { handleAdd } = this.props
    return (
      <div id="toolbar">
        <i onClick={() => handleAdd()} className="glyphicon glyphicon-plus"></i>
      </div>
    )
  }
}

Toolbar.propTypes = {
  handleAdd: PropTypes.func
}