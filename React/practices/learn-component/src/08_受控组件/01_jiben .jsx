import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      userName: "",
    };
  }
  inputChange(event) {
    console.log(event);
    console.log(event.target.value);
    this.setState({
      userName: event.target.value,
    });
  }
  render() {
    const { userName } = this.state;
    return (
      <div>
        <input type="text" value={userName} />
        <input type="text"  onChange={(e) => this.inputChange(e)} />
        <span>{userName}</span>
      </div>
    );
  }
}

export default App;
