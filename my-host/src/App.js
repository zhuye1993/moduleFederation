import React from "react";
// const RemoteNewsList = React.lazy(() => import("remote/NewsList"));
import RemoteNewsList from "remote/NewsList";
import Slider from "./Slider";
const App = () => {
  return (<div>
    <h1>远程组件</h1>
    <RemoteNewsList></RemoteNewsList>
    <h1>本地组件</h1>
    <Slider></Slider>
  </div>)
}

export default App