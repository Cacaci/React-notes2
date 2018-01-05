import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
export default class Toolbar extends Component {
  render () {
    return (
      <div id="toolbar">
        <i onClick={() => this.props.store.addNote()} className="glyphicon glyphicon-plus"></i>
      </div>
    )
  }
}