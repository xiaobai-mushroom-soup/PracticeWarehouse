import React, { Component } from 'react'
import NavBar from './nav-bar'
import NavBar2 from './nav-b'

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <button>按钮</button>
          <h2>标题</h2>
          <i>文字</i>
        </NavBar>

        <p>--------------</p>
        <NavBar2 leftS={<button>123</button>}
            centerS={<h2>321</h2>}
            rightS={<i>1233333</i>}/>
      </div>
    )
  }
}

export default App