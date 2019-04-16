import React, { Component } from "react";
// A ribbon where we can have the loading status
class Ribbon extends Component {
  render() {
    return <div className="bg-info">{this.props.status}</div>;
  }
}
export default Ribbon;
