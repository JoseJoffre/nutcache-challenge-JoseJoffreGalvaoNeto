import React from "react";
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import {Layout} from "antd";

import "./App.less";

function App() {
  return (
    <Layout>
        <Header />
        <Content />
    </Layout>
  );
}

export default App;
