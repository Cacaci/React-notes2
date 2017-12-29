import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducers'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
// import { addNote } from './actions'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

// console.log(applyMiddleware(thunk))

// 使用redux-thunk中间件，在actions里一步触发dispatch， 使用thunk是为了在actions中能够传递dispatch
// console.log(addNote())

// 不使用redux-thunk中间件
// console.log(store.dispatch(addNote()))

store.subscribe(() => {
  console.log(store.getState())
})

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
registerServiceWorker()

// 在考虑性能优化的情况下，可以使用immutablejs将部分不需要改变的数据持久化
// 在react虚拟DOM渲染中不去改变那些不需要改变的状态，从而使得diff性能不浪费，渲染速度更快