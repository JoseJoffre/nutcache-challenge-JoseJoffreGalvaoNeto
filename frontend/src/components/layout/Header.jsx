import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/new-nutcache-logo.png";
import "./Header.less";
import { Layout } from "antd";

const Header = () => {
  return (
    <Layout.Header className="header">
      <img
        className="logo"
        src={logo}
        alt="Nutcache"
      />
    </Layout.Header>
  )
}

export default Header;