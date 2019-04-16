import React, { Component } from "react";
import NavBar from "./navbar";
// Curretly, Header is having a navbar but we can group multiple things here
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
