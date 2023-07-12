import React, { PureComponent, createRef } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      intro: "123",
    };
    this.introRef = createRef()
  }
  componentDidMount(){
    // this.introRef.current.addEventListener
  }
  handlerClick(e){
    console.log( this.introRef.current.value)
  }
  render() {
    return <div>
        <input type="text" defaultValue={this.state.intro} ref={this.introRef} />
    <button onClick={e=>this.handlerClick(e)}>123</button>
    </div>;
  }
}

export default App;
