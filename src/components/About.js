import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
  render () {
    return (
      <div>
        <h2>我是关于页面</h2>
        <Link to="/">首页</Link>
      </div>
    )
  }
}