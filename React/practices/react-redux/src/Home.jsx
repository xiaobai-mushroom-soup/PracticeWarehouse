import React, { PureComponent } from "react";
import store from "./store";
import { addNumAction } from "./store/actionCreator";

export class Home extends PureComponent {
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
  addNumber(num) {
    store.dispatch(addNumAction(num));
  }
  render() {
    return (
      <div>
        <h2>Home Add:{this.state.counter}</h2>
        <button onClick={(e) => this.addNumber(1)}>+1</button>
        <button onClick={(e) => this.addNumber(5)}>+5</button>
        <button onClick={(e) => this.addNumber(8)}>+8</button>
      </div>
    );
  }
}

export default Home;
