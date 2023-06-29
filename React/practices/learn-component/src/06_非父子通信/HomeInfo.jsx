import React, { Component } from 'react'

import ThemeContext from './contexts/theme-context'

export class HomeInfo extends Component {
  render() {
    console.log(this.context)
    return (
      <div>HomeInfo----{this.context.name}</div>
    )
  }
}
HomeInfo.contextType = ThemeContext


export default HomeInfo