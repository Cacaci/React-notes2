import React, { Component } from 'react'
import { autorun } from 'mobx'
import { observer } from 'mobx-react'

@observer
export default class NoteList extends Component {
  constructor (props) {
    super(props)
    this.updateActive = this.updateActive.bind(this)
    this.goDelete = this.goDelete.bind(this)
    autorun(() => {
      console.log('自动运行...')
    })
  }
  // autorun 是Mobx中最常用的观察者，当你需要根据依赖自动的运行一个方法，而不是产生一个新值，可以使用 autorun 来实现这一效果。
  @autorun(() => {
    console.log('自动运行...')
  })
  componentDidMount () {
    console.log('componentDidMount生命周期...')
  }
  // 有点类似vue中的watch
  componentWillReact () {
    console.log('接收到新的props，此钩子会被调用...')
  }
  updateActive (e, note) {
    // const { handleActiveNote, handleEdit } = this.props.store
    e.preventDefault()
    this.props.store.setActive(note)
    this.props.store.handleEdit(note.text)
  }
  goDelete (index) {
    // const { handleDelete, notes } = this.props.store
    if (this.props.store.notes.length === 0) return
    this.props.store.deleteNote(index)
  }
  render () {
    const { toggleFavorite, notes, show, activeNote, toggleFilter } = this.props.store
    let filterNotes = show === 'all' ? notes : notes.filter(note => note.favorite === true)

    const favoriteBtns = (note, index) => {
      return show === 'all' ? (
        <div className="list-group-btns">
          <span onClick={() => toggleFavorite(index)} className={note.favorite ? 'glyphicon glyphicon-star starred' : 'glyphicon glyphicon-star'}></span>
          <span onClick={() => this.goDelete(index)} className="glyphicon glyphicon-remove"></span>
        </div>
      ) : ''
    }
    return (
      <div id="notes-list">
        <div id="list-header">
          <h2>Notes | coligo</h2>
          <div className="btn-group btn-group-justified" role="group">
            <div className="btn-group" role="group">
              {/* store中使用.bound绑定 */}
              <button onClick={() => toggleFilter('all')} type="button" className="btn btn-default">All Notes</button>
              {/* 不使用.bound绑定 */}
              {/* <button onClick={() => this.props.store.toggleFilter('all')} type="button" className="btn btn-default">All Notes</button> */}
            </div>
            <div className="btn-group" role="group">
              <button onClick={() => toggleFilter('favorite')} type="button" className="btn btn-default">Favorites</button>
            </div>
          </div>
        </div>
        <div className="container">
          <ul className="list-group">
            {filterNotes.map((note, index) => {
              return (
                <li key={index} className={activeNote.id === note.id ? 'list-group-item active' : 'list-group-item'}>
                  <div onClick={e => this.updateActive(e, note)} className="list-group-item-heading">{note.text.substring(0, 30)}</div>
                  {favoriteBtns(note, index)}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}