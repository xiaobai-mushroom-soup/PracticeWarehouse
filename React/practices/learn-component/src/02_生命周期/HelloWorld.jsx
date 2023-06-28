import React from "react";

class HelloWorld extends React.Component {
  constructor() {
    console.log("(挂载)constructor-------------HelloWorld ");
    super();
    this.state = {
      message: "Hello World",
    };
  }
  componentDidMount() {
    console.log("(挂载)componentDidMount-------------HelloWorld ");
  }
  changeText(){
    this.setState({
        message:'你好啊'
    })
  }
  componentDidUpdate(){
    console.log("(更新)componentDidUpdate-------------HelloWorld ");
  }
  componentWillUnmount(){
    console.log("(卸载)componentWillUnmount-------------HelloWorld ");
  }
  
  render() {
    console.log("(挂载/更新)render-------------HelloWorld ");
    const { message } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        <h2>{message}是程序员的第一个代码</h2>
        <button onClick={e=>this.changeText()}>修改文本</button>
      </div>
    );
  }
}
export default HelloWorld;
