import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isShow: false,
    };
  }
  render() {
    const { isShow } = this.state;
    return (
      <div>
        <button onClick={(e) => this.setState({ isShow: !isShow })}>
          切换
        </button>
        <CSSTransition
          in={isShow}
          unmountOnExit
          classNames="why"
          timeout={2000}
        >
          <h2>哈哈哈哈哈哈哈哈</h2>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
