/* 函数式写法 */
// import React from 'react'

// const Toolbar = ({
//   handleAdd
// }) => {
//   return (
//     <div id="toolbar">
//       <i onClick={() => handleAdd()} className="glyphicon glyphicon-plus"></i>
//     </div>
//   )
// }

// export default Toolbar

/* ES6写法(actions)*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Toolbar extends Component {
  render () {
    const { handleAdd } = this.props
    return (
      <div id="toolbar">
        <i onClick={() => handleAdd()} className="glyphicon glyphicon-plus"></i>
      </div>
    )
  }
}

Toolbar.propTypes = {
  handleAdd: PropTypes.func
}