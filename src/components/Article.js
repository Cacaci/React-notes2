import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Article extends Component {
  componentDidMount () {
    const id = this.props.match.params.id    
    console.log(`我是第${id}篇文章`)
  }
  render () {
    const id = this.props.match.params.id
    return (
      <div>
        <h2>我是文章页面</h2>
        <Link to="/">首页</Link>
        <span>第{id}篇文章</span>
      </div>
    )
  }
}