import { observable, action, computed, runInAction } from 'mobx'
import api from '../api'

export default class Store {
  // 被观察者，当被观察的状态发生变化的时候，观察者（@observer）会响应状态的变化从而更新视图
  @observable todos = [
    {
      title: 'New todo标题',
      done: false
    }
  ]
  @observable fetching = false
  @observable sites = []
  @observable count = 0

  @computed get finishedTodos () {
    return this.todos.filter(todo => todo.done)
  }
  @action changeTodoTitle ({index, title}) {
    this.todos[index].title = title
  }
  @action addTodo () {
    this.todos.push({title: 'New todo标题', done: false})
  }
  @action.bound
  increment () {
    this.count++
  }

  // 内联动作
  // @action
  // getSiteList () {
  //   this.fetching = true
  //   api.getSiteList().then(
  //     // action(fn) or action(name, fn) and others
  //     // 注意: 异步回调函数是单独的动作！
  //     action('fetchSuccess', res => {
  //       this.fetching = false
  //       setTimeout(() => {
  //         this.sites = res.own_stores
  //       }, 2000)
  //     })
  //   ).catch('fetchFailed', err => {
  //     console.log(err)
  //   })
  // }

  @action getSiteList = async () => {
    const data = await api.getSiteList()
    runInAction('fetching siteList', () => {
      this.sites = data.own_stores
      this.fetching = true
    })
  }

  // 回调动作
  // @action getSiteList () {
  //   this.fetching = true
  //   api.getSiteList().then(this.getSiteListSuccess, this.getSiteListFailed)
  // }
  // @action.bound
  // getSiteListSuccess (res) {
  //   this.fetching = false
  //   setTimeout(() => {
  //     this.sites = res.own_stores    
  //   }, 2000)
  //   console.log(res)
  // }
  // @action.bound
  // getSiteListFailed (err) {
  //   console.log(err)
  // }
}
