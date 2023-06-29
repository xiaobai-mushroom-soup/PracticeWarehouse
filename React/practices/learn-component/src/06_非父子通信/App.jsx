import React, { Component } from "react";
import Home from "./Home";
import ThemeContext from "./contexts/theme-context";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      info: {
        name: "dodo",
        age: 18,
      },
    };
  }
  render() {
    const { info } = this.state;
    return (
      <div>
        <ThemeContext.Provider value={{...info}}>
          <Home {...info}/>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
