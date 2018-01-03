import React, { Component } from 'react'

import { observable, action, computed, autorun } from 'mobx'
import { observer } from 'mobx-react'

var appState = observable({
  timer: 0,
  num: 100
})

// appState.resetTimer = action(function reset() {
//   appState.timer = 0
// });

// setInterval(action(function tick() {
//   appState.timer += 1
// }), 1000)

appState.resetTimer = action(() => {
  appState.timer = 0
})

setInterval(action(() => {
  appState.timer += 1
}), 1000)

class Store {
  @observable todos = [
    {
      title: 'New todo标题',
      done: false
    }
  ]
  @computed get finishedTodos () {
    return this.todos.filter(todo => todo.done)
  }
  @action changeTodoTitle ({index, title}) {
    this.todos[index].title = title
  }
  @action addTodo () {
    this.todos.push({title: 'New todo标题', done: false})
  }
}

const store = new Store()
console.log(store)

@observer
class Header extends Component {
  render () {
    const { todos } = this.props.store
    console.log(todos)
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
      </div>
    )
  }
}

@observer
class Footer extends Component {
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

class App extends Component {
  @observable price = 100
  @observable amount = 3

  // 有点vue计算属性的味道
  @computed  get total () {
    return this.price * this.amount
  }
  @autorun(function getPrice() {
    console.log(`初始化数量：${appState.num}`)
  })

  render () {
    return (
      <div className="App">
        <Header store={store} />
        <p className="App-intro">
          <span>价格：{this.price}</span>
          <span>数量：{this.amount}</span>
        </p>
        <p>总价：{this.total}</p>
        <Footer appState={appState} />
      </div>
    );
  }
}

export default App;
