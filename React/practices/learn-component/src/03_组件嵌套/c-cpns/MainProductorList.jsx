import React, { Component } from 'react'

export class MainProductorList extends Component {
  render() {
    const {productList} = this.props
    return (
      <div>
        <h2>商品列表</h2>
        <ul>
          {
            productList.map((item,i)=>{
              return <li key={i}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default MainProductorList