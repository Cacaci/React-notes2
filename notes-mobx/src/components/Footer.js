import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
export default class Footer extends Component {
  onReset () {
    this.props.appState.resetTimer()
  }
  render () {
    return (
      <div className="footer">
        <p>我是底部：{this.props.appState.timer}</p>
        <button onClick={this.onReset.bind(this)} type="button">重置</button>
      </div>
    )
  }
}