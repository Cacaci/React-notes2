import React, { Component } from 'react'
import { observable, action, computed, autorun } from 'mobx'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Stores
import Store from './stores'
const store = new Store()
console.log(store)

const appState = observable({
  timer: 0,
  num: 100
})

appState.resetTimer = action(() => {
  appState.timer = 0
})

setInterval(action(() => {
  appState.timer += 1
}), 1000)


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

  componentDidMount () {
    console.log(this.props.children)
  }
  componentWillReact () {
    console.log('接收到新的props，此钩子会被调用')
  }

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
