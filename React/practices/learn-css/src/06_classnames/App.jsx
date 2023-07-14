import React, { PureComponent } from "react";
import classNames from 'classnames'

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isbbb: false,
      isccc: true,
    };
  }
  render() {
    const { isbbb,isccc } = this.state;
    const classList = ["aaa"];
    if (isbbb) classList.push("bbb");

    return (
      <div>
        <h2 className={`aaa ${this.state.isbbb ? "bbb" : ""}`}>哈哈哈哈哈</h2>
        <h2 className={classList.join(" ")}>嘿嘿嘿嘿嘿</h2>
        <h2 className={classNames("aaa",{bbb:isbbb,ccc:isccc})}>呵呵呵呵呵呵呵呵</h2>
      </div>
    );
  }
}

export default App;
