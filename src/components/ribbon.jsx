import React, { Component } from "react";
class Ribbon extends Component {
  render() {
    return <div className="bg-info">{this.props.status}</div>;
  }
}
export default Ribbon;
