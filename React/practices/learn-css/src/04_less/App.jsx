import React, { PureComponent } from 'react'
import './App.less'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className='title'>我是title</h2>
        <p className='ppp'>哈哈哈哈哈哈<span>666</span></p>
      </div>
    )
  }
}

export default App