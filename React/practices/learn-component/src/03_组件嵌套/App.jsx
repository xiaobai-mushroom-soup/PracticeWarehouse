import React, { Component } from 'react'
import Header from './03_组件嵌套/c-cpns/Header'
import Main from './03_组件嵌套/c-cpns/Main'
import Footer from './03_组件嵌套/c-cpns/Footer'

export class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App