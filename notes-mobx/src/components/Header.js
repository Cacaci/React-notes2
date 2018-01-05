import React, { Component } from 'react'
import { observer } from 'mobx-react'

console.log(observer)

@observer
export default class Header extends Component {
  render () {
    const { todos, sites, fetching, count } = this.props.store
    console.log(this.props.store)
    return (
      <div className="header">
        <p>我是头部</p>
        <ul>
          {
            todos.map((item, index) => {
              return (
                <li onClick={() => {
                  this.props.store.changeTodoTitle({index: index, title: '修改后的标题'})
                }} key={index}>{item.title}</li>
              )
            })
          }
        </ul>
        <button onClick={() => this.props.store.addTodo()} type="button">添加todo</button>
        <button onClick={() => this.props.store.getSiteList()} type="button">{ fetching ? '获取信息ing' : '异步获取网站列表' }</button>
        <h2>这里是网站列表</h2>
        <ul>
          {
            sites.map((item, index) => {
              return (
                <li key={index}>{item.name} 版本：{item.level_name}</li>
              )
            })
          }
        </ul>
        <div>
          <h2>计数器</h2>
          <p>{count}</p>
          <button onClick={() => this.props.store.increment()} type="button">计数</button>
        </div>
      </div>
    )
  }
}