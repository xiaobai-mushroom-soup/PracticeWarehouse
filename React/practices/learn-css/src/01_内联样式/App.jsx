  import React, { PureComponent } from "react";

  export class App extends PureComponent {
    constructor() {
      super();
      this.state = {
        titleSize:18
      };
    }
    addTitleSize(){
      this.setState({
        titleSize:this.state.titleSize+1
      })
    }
    render() {
      return (
        <div>
          <button onClick={(e) => this.addTitleSize()}>add</button>
          <h2 style={{ color: "red", fontSize: `${this.state.titleSize}px` }}>Im title</h2>
          <p style={{ color: "blue", fontSize: "14px" }}>Im value</p>
        </div>
      );
    }
  }

  export default App;
