import React, { PureComponent } from "react";
import { createPortal } from "react-dom";

export class App extends PureComponent {
  render() {
    return (
    <div className="app">
        <h1>App H1</h1>
        {
            createPortal(<h2>App H2</h2>,document.querySelector("#dodo"))
        }
    </div>);
  }
}

export default App;
