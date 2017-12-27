/* 函数式写法 */
// import React from 'react'

// const Editor = ({
//   activeNote,
//   handleEdit
// }) => {

//   const handleInput = (e, handleEdit) => {
//     let text = e.target.value
//     handleEdit(text)
//   }

//   return (
//     <div id="note-editor">
//       <textarea className="form-control"
//         value={activeNote.text}
//         onChange={(e) => handleInput(e, handleEdit)}></textarea>
//     </div>
//   )
// }

// export default Editor


/* ES6写法(actions) */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Editor extends Component {
  constructor (props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput (e) {
    const { handleEdit } = this.props
    let text = e.target.value
    handleEdit(text)
  }
  render () {
    const { activeNote } = this.props
    return (
      <div id="note-editor">
        <textarea className="form-control"
          value={activeNote.text}
          onChange={this.handleInput}></textarea>
      </div>
    )
  }
}

Editor.propTypes = {
  activeNote: PropTypes.object,
  handleEdit: PropTypes.func
}