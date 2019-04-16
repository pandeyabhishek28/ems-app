import React from "react";
import logo from "../logo.svg";
// A NavBar for top section,......
const NavBar = () => {
  return (
    <div className="navbar bg-info">
      <span>
        <img
          style={{ height: "40px" }}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <span className="badge badge-pill">Employee Management System</span>
      </span>
      <span className="navbar badge badge-pill">All Records</span>
    </div>
  );
};

export default NavBar;
