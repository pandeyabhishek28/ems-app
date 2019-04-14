import React, { Component } from "react";
import NavBar from "./navbar";

class Header extends Component {
  render() {
    return (
      <div className="p-1 mb-1 bg-info text-white">
        <NavBar />
      </div>
    );
  }
}

export default Header;
