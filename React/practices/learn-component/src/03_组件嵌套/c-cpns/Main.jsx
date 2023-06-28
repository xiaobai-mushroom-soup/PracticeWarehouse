import React, { Component } from "react";
import MainBanner from "./MainBanner";
import MainProductorList from "./MainProductorList";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      banners: ["新歌曲", "新MV", "新歌单"],
      productList: ["推荐商品", "热门商品", "流行商品"],
    };
  }
  render() {
    const { banners, productList } = this.state;
    return (
      <div className="main">
        <MainBanner banners={banners} title='轮播图' />
        <MainBanner  />
        <MainProductorList productList={productList} />
      </div>
    );
  }
}

export default Main;
