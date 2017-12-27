import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(reducers)

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
registerServiceWorker()
