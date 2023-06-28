import React, { Component } from "react";
export class NavBar extends Component {
  render() {
    const { leftS, centerS, rightS } = this.props;
    return (
      <div className="nav-bar">
        <div className="left">{leftS}</div>
        <div className="center">{centerS}</div>
        <div className="right">{rightS}</div>
      </div>
    );
  }
}

export default NavBar;
