import React, { PureComponent } from 'react'
import HomeStyle from './Home.module.css'
export class Home extends PureComponent {
  render() {
    return (
      <div>
        <div className='title'>Home</div>
        <div className='body'>哈哈哈哈哈啊哈</div>
        <div className={HomeStyle.border}>6666</div>
         </div>
    )
  }
}

export default Home