import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
export default class Editor extends Component {
  constructor (props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput (e) {
    let text = e.target.value
    this.props.store.handleEdit(text)
  }
  render () {
    const { activeNote } = this.props.store
    return (
      <div id="note-editor">
        <textarea className="form-control"
          value={activeNote.text}
          onChange={this.handleInput}></textarea>
      </div>
    )
  }
}