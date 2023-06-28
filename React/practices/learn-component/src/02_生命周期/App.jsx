import { Component } from "react";
import HelloWorld from "./02_生命周期/HelloWorld";
class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "哈哈哈",
      isShowHW: true,
    };
  }
switchHW(){
    this.setState({isShowHW : !this.state.isShowHW})
}
  render() {
    const { message, isShowHW } = this.state;
    return (
      <div>
        {message}
        <div>
          <button onClick={()=>this.switchHW()}>切换</button>
          {isShowHW && <HelloWorld />}
        </div>
      </div>
    );
  }
}

export default App;
