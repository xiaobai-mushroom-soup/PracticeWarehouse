import React, { PureComponent } from 'react'
import appStyle from './App.module.css'
import Home from './Home/Home'
import Bro from './bro/Bro'
export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={appStyle.title}>我是头</h2>
        <p className={appStyle.body}>我是身体</p>
        <Home/>
        <Bro/>
      </div>
    )
  }
}

export default App