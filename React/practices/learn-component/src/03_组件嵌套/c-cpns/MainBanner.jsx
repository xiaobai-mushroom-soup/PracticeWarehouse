import React, { Component } from "react";
import PropTypes from "prop-types";

class MainBanner extends Component {
  static defaultProps = {
    banners:[],
    title:'lalala'
  }
  constructor(props) {
    console.log(props);
    super(props);
  }
  render() {
    const { banners, title } = this.props;
    return (
      <div>
        <h2>封装一个轮播图:{title}</h2>
        <ul>
          {banners.map((item,i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
// 使用PropTypes验证props类型
MainBanner.propTypes = {
  banners: PropTypes.array.isRequired,
  title: PropTypes.string,
};
// // 设置默认值方法1
// MainBanner.defaultProps ={
//   banners:[],
//   title:'lalala'
// }
export default MainBanner;
