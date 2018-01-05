import { observable, action, computed } from 'mobx'
import api from '../api'

export default class Store {
  @observable notes = [{id: 0, text: 'New note', favorite: false}] // 所有笔记
  @observable activeNote = {id: 0, text: 'New note', favorite: false} // 当前笔记
  @observable show = 'all'
  @observable fetching = false
  @observable sites = []

  id = 0
  // 添加笔记
  @action addNote () {
    let newId = ++this.id
    let newNote = { id: newId, text: `New note${newId}`, favorite: false }
    this.notes.push(newNote)
    this.activeNote = newNote

    // 异步请求开始 内联动作
    this.fetching = true
    api.getSiteList().then(
      // action(fn) or action(name, fn) and others
      // 注意: 异步回调函数是单独的动作！
      action('fetchSuccess', res => {
        this.fetching = false
        setTimeout(() => {
          this.sites = res.own_stores
        }, 2000)
      })
    ).catch('fetchFailed', err => {
      console.log(err)
    })
    // 异步请求end
  }
  // 删除笔记
  @action deleteNote (index) {
    let notes = this.notes
    let newNotes = [...notes.slice(0, index), ...notes.slice(index + 1)]
    this.notes = newNotes
    this.activeNote = newNotes[index] || newNotes[0] || {}
  } 
  // 编辑
  @action handleEdit (text) {
    let id = this.activeNote.id
    let newNotes = this.notes.map(item => {
      if (item.id === id) {
        item.text = text
      }
      return item
    })
    this.notes = newNotes
    this.activeNote = { ...this.activeNote, text: text}
  }
  // 选中高亮
  @action setActive (note) {
    this.activeNote = note
  }
  // 切换收藏
  // 如果不使用.bound绑定，组件中既可以用this.props.store.fn调用，也可以指教调用方法
  @action.bound
  toggleFavorite (noteIndex) {
    let newNotes = this.notes.map((item, index) => {
      if (index === noteIndex) {
        item.favorite = !item.favorite
      }
      return item
    })
    this.notes = newNotes
    this.activeNote = { ...this.activeNote, favorite: !this.activeNote.favorite }
  }
  // 筛选列表
  @action.bound
  toggleFilter (style) {
    this.show = style
  }
  // 有点类似vue中的计算属性computed
  @computed get noteCount () {
    return this.notes.length
  }
}

// action 是 store 产生变化的入口

// Computed values 是计算属性，它的数据通过纯函数由应用状态计算得来，当依赖的应用状态变更时，Mobx 自动触发计算属性的更新。
// Reactions 可简单理解为响应，与计算属性类似，它响应所依赖的应用状态的变更，不同的是，它不产生新的数据，而是输出相应的副作用(side effects)，比如更新UI。

// 需要注意的是 action 只能影响当前函数作用域，函数中如果有异步调用并且在异步请求返回时需要修改应用状态，则需要对异步调用也使用 aciton 包裹。
// 当使用 async/await 语法处理异步请求时，可以使用 runInAction 来包裹你的异步状态修改过程。
/*
@action getTitleAsync = async () => {
  this.pendingRequestCount++
  const data = await fetchDataFromUrl(url)
  runInAction("update state after fetching data", () => {
    this.title = data.title
    this.pendingRequestCount--
  })
}
*/

// (mobx参考文章)
// https://zhuanlan.zhihu.com/p/28082321
// http://geek.csdn.net/news/detail/208121 