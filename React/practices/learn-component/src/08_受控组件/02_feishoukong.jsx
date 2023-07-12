import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: "",
      isAgree: true,
      hobbies: [
        { value: "sing", text: "唱", ischecked: false },
        { value: "dance", text: "跳", ischecked: true },
        { value: "rap", text: "rap", ischecked: false },
      ],
      fruit: "orange",
      fruits: [],
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.username);
    console.log(
      this.state.hobbies.filter((i) => i.ischecked).map((i) => i.text)
    );
  }
  handleChange(e) {
    this.setState({
      username: e.target.value,
    });
  }
  handleCheckBoxChange(e) {
    console.log(e.target.checked);
    this.setState({
      isAgree: e.target.checked,
    });
  }
  handleHobbiesChange(e, i) {
    const hobbies = [...this.state.hobbies];
    hobbies[i].ischecked = e.target.checked;
    this.setState({
      hobbies,
    });
  }

  handlerFruitChange(e) {
    this.setState({ fruit: e.target.value });
  }

  handlerFruitMChange(e) {
    console.log(e.target.selectedOptions);

    const options = Array.from(e.target.selectedOptions);
    const values = options.map((i) => i.value);
    console.log(values);
    this.setState({ fruits: values });
  }
  render() {
    return (
      <div>
        <form action="/abc">
          <label htmlFor="username">
            <input
              value={this.state.username}
              id="username"
              type="text"
              name="username"
              onChange={(e) => this.handleChange(e)}
            />
          </label>

          <div>
            <label htmlFor="agree">
              <input
                id="agree"
                type="checkbox"
                onChange={(e) => this.handleCheckBoxChange(e)}
                checked={this.state.isAgree}
              />
            </label>
          </div>

          <div>
            爱好：
            {this.state.hobbies.map((item, index) => {
              return (
                <label key={item.value} htmlFor={item.value}>
                  <input
                    type="checkbox"
                    onChange={(e) => this.handleHobbiesChange(e, index)}
                    checked={item.ischecked}
                  />
                  {item.text}
                </label>
              );
            })}
          </div>

          {/* <select
            value={this.state.fruit}
            onChange={(e) => this.handlerFruitChange(e)}
          >
            <option value="apple">苹果</option>
            <option value="orange">橘子</option>
            <option value="banana">香蕉</option>
          </select> */}
          <select
            value={this.state.fruits}
            onChange={(e) => this.handlerFruitMChange(e)}
            multiple
          >
            <option value="apple">苹果</option>
            <option value="orange">橘子</option>
            <option value="banana">香蕉</option>
          </select>

          <button type="submit" onClick={(e) => this.handleSubmit(e)}>
            提交
          </button>
        </form>
      </div>
    );
  }
}

export default App;
