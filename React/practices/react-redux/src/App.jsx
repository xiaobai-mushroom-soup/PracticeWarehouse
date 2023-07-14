import React, { PureComponent } from "react";
import Home from "./Home";
import Profile from "./Profile";
import store from "./store";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
        counter: store.getState().counter,
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      this.setState({ counter: state.counter });
    });
  }
  render() {
    return (
      <div>
        <h2>App：{this.state.counter}</h2>
        
        <Home />
        <Profile />
      </div>
    );
  }
}

export default App;
