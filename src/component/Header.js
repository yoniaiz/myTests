import React from "react";
import { Breadcrumb, Icon } from "antd";

import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="row mb-5">
      <Breadcrumb>
        <Link to="/">
          <Breadcrumb.Item>
            <Icon type="home" />
          </Breadcrumb.Item>
        </Link>
        <Link to="/user">
          <Breadcrumb.Item>
            <Icon type="user" />
            <span>Application List</span>
          </Breadcrumb.Item>
        </Link>
        <Link to="/clock">
          <Breadcrumb.Item>
             <Icon type="clock-circle" />
            <span>Clock</span>
          </Breadcrumb.Item>
        </Link>
      </Breadcrumb>
    </div>
  );
}
