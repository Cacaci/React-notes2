/* 函数式写法 */
import React from 'react'

const Editor = ({
  activeNote,
  handleEdit
}) => {

  const handleInput = (e, handleEdit) => {
    let text = e.target.value
    handleEdit(text)
  }

  return (
    <div id="note-editor">
      <textarea className="form-control"
        value={activeNote.text}
        onChange={(e) => handleInput(e, handleEdit)}></textarea>
    </div>
  )
}

export default Editor

/* ES6写法 */
// import React, { Component } from 'react'

// export default class Toolbar extends Component {
//   constructor (props) {
//     super(props)
//     this.handleInput = this.handleInput.bind(this)
//   }
//   handleInput (e) {
//     const { activeNote, handleEdit } = this.props
//     let text = e.target.value
//     handleEdit(text)
//   }
//   componentDidMount () {
//   }

//   render () {
//     const { activeNote } = this.props
//     return (
//       <div id="note-editor">
//         <textarea className="form-control"
//           value={activeNote.text}
//           onChange={this.handleInput}></textarea>
//       </div>
//     )
//   }
// }