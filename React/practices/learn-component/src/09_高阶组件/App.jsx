import React, { PureComponent } from "react";

function hoc(Cpn) {
  class NewCpn extends PureComponent {
    render() {
      return <Cpn />;
    }
  }
  return NewCpn;
}

export class Hello extends PureComponent {
  render() {
    return <div>HelloWorld</div>;
  }
}

const NewHello = hoc(Hello)

export class App extends PureComponent {
  render() {
    return (
      <div>
        <NewHello />
      </div>
    );
  }
}

export default App;
