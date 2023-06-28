import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "App Component",
    };
  }
  render() {
    const { message } = this.state;
    return <div>{message}</div>;
  }
}

export default App;
