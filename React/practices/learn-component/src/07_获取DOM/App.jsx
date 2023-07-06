import React, { PureComponent, createRef, forwardRef } from "react";

export class HelloWorld extends PureComponent {
  test() {
    console.log("test -------");
  }
  render() {
    return <div>HelloWorld</div>;
  }
}


const HelloReact = forwardRef(function (props,ref) {
    return (
      <div ref={ref}>HelloReact,DODo</div>
    )
  })

export class App extends PureComponent {
  constructor() {
    super();

    this.titleRef = createRef();
    this.titleEl = null;
    this.hwRef = createRef();
    this.hrRef = createRef();
  }
  getNativeDOM() {
    // 1.在React元素上绑定一个ref字符串
    console.log(this.refs.DoDo);
    console.log(this.titleRef.current);
    console.log(this.titleEl);
    console.log(this.hwRef.current);
    console.log(this.hrRef.current)
  }

  render() {
    return (
      <div>
        <h2 ref="DoDo">HelloWorld</h2>
        <h2 ref={this.titleRef}>Hello React</h2>
        <h2
          ref={(el) => {
            this.titleEl = el;
          }}
        >
          HelloDoDo
        </h2>
        <HelloWorld ref={this.hwRef}/>
        <HelloReact ref={this.hrRef}/>
        <button onClick={(e) => this.getNativeDOM()}>获取DOM</button>
      </div>
    );
  }
}

export default App;
