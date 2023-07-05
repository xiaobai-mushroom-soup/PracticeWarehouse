import React, { Component } from "react";

export class HomeBanner extends Component {
  prevClick() {
    console.log("上一个");
  }
  nextClick(){
    console.log('下一个')
  }
  render() {
    return (
      <div>
        <h2>banner</h2>
        <button onClick={(e) => this.prevClick()}>上</button>
        <button onClick={(e) => this.nextClick()}>下</button>
      </div>
    );
  }
}

export default HomeBanner;
