import React, { Component } from 'react'

import Toolbar from './components/Toolbar'
import Editor from './components/Editor'
import NoteList from './components/NoteList'

// Stores 可以有多个store
import Store from './stores'
const store = new Store()
store.addNote()
console.log(store)
console.log(store.noteCount)

class App extends Component {
  render () {
    return (
      <div id="note">
        <Toolbar store={store} />
        <NoteList store={store} />
        <Editor store={store} />
      </div>
    );
  }
}

export default App
