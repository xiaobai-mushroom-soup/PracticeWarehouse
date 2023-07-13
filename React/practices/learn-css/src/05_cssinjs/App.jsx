import React, { PureComponent } from "react";
import { AppWrapper,SectionWrapper } from "./style";

export class App extends PureComponent {
    constructor(){
        super()
        this.state = {
            size:21,
            color:'yellow'
        }
    }
  render() {
    const { size,color } = this.state
    return (
      <AppWrapper>

        <div className="app">
        <SectionWrapper size={size} color={color}>
          <div className="section">
            <h2 className="title">我是标题</h2>
            <button onClick={e=>this.setState({size:size+1})}>点击增大字体</button>
            <button onClick={e=> this.setState({color:'red'})}>点击修改颜色</button>
          </div>
        </SectionWrapper>

          <div className="footer">
            <p>123</p>
            <p>123</p>
          </div>
        </div>
      </AppWrapper>
    );
  }
}

export default App;
