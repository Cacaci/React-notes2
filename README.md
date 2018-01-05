### 创建React应用
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

#### 全局安装React项目生产工具
npm install -g create-react-app

**创建我们自己的应用**  
create-react-app my-app  
cd my-app/  
npm start  
Then open http://localhost:3000/ to see your app.  
When you’re ready to deploy to production, create a minified bundle with npm run build.  
**默认状态下生成的项目不含有config scripts等文件目录**
使用**npm run eject**命令生成完整的项目结构，如果你需要的话（比如你可能需要修改默认的3000端口等）

- Available Scripts
- npm start
- npm test
- npm run build
- npm run eject

### Redux负责更新应用的state
Redux 中只需把 action 创建函数的结果传给 dispatch() 方法即可发起一次 dispatch 过程
```
dispatch(addTodo(text))
dispatch(completeTodo(index))
```
store 里能直接通过 store.dispatch() 调用 dispatch() 方法，但是多数情况下你会使用 react-redux提供的 connect() 帮助器来调用。bindActionCreators() 可以自动把多个 action 创建函数 绑定到 dispatch() 方法上  

**Action创建函数也可以是异步非纯函数**

如果state tree状态相对独立且单一的reducer函数比较大，可对状态进行拆分。  
注意每个 reducer 只负责管理全局 state 中它负责的一部分。每个 reducer 的 state 参数都不同，分别对应它管理的那部分 state 数据。
```
function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

import { combineReducers } from 'redux';

const todoApp = combineReducers({
  visibilityFilter,
  todos
})
```

combineReducers 接收一个对象，可以把所有顶级的 reducer 放到一个独立的文件中，通过 export 暴露出每个 reducer 函数，然后使用 import * as reducers 得到一个以它们名字作为 key 的 object。

```
import { combineReducers } from 'redux'
import * as reducers from './reducers'

const todoApp = combineReducers(reducers)
```

**bindActionCreators**
```
import * as Actions from '../actions'
// 使用bindActionCreators，不再手动dispatch一个action
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})
```
使用Redux提供的bindActionCreators方法合并actions，不用再像下面这样手动使用dispatch组合actions(此api方法包装了dispatch方法)
```
import { addNote, editNote, deleteNote, setActiveNote, toggleFavorite, toggleFilter } from '../actions'
const mapDispatchToProps = dispatch => ({
  handleAdd: () => dispatch(addNote()),
  handleActiveNote: note => dispatch(setActiveNote(note)),
  handleDelete: index => dispatch(deleteNote(index)),
  handleEdit: text => dispatch(editNote(text)),
  handleFavorite: index => dispatch(toggleFavorite(index)),
  handleFilter: style => dispatch(toggleFilter(style))
})
```

### 常用的异步Actions解决方案
- [redux-thunk](https://github.com/gaearon/redux-thunk)
- [mobx mobx-react](https://github.com/mobxjs/mobx-react)
- [redux-saga](https://github.com/redux-saga/redux-saga)

#### Redux-thunk
通过使用指定的 middleware，action creator 除了返回 action 对象外还可以返回函数。这时，这个 action creator 就成为了 thunk。
当 action creator 返回函数时，这个函数会被 Redux Thunk middleware 执行。这个函数并不需要保持纯净；
它还可以带有副作用，包括执行*异步 API 请求*。这个函数还可以 *dispatch action*，就像 dispatch 前面定义的同步 action 一样。

像 redux-thunk 或 redux-promise 这样支持异步的 middleware 都包装了 store 的 dispatch() 方法，
以此来让你 dispatch 一些除了 action 以外的其他内容，例如：函数或者 Promise。

### React-router
### Immutablejs
### 学习React、Redux、Redux-thunk、Mobx参考文章