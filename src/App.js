import React, { Component } from "react";
import "./App.css";

import Header from "./components/header";
import Container from "./components/container";
import Ribbon from "./components/ribbon";

class App extends Component {
  state = {
    status: "init",
    isLoaded: false,
    gridData: [0]
  };

  getGridDataAsync = async () => {
    try {
      this.setState({ status: "loading" });
      const request = new Request("../tempData/employeesData.json", {
        headers: new Headers({ "Content-Type": "application/json" })
      });
      const resp = await fetch(request);
      const json = await resp.json();
      this.setState({
        gridData: json,
        status: "Finished Loading",
        isLoaded: true
      });
    } catch {
      this.setState({ status: "error" });
    }
  };

  render() {
    return (
      <div className="App">
        <Header className="row col-12 col-md-12" />
        <Container
          employeeGridData={this.state.gridData}
          getGridDataAsync={this.getGridDataAsync}
          isLoaded={this.state.isLoaded}
          className="row col-12 col-md-12"
        />
        <Ribbon status={this.state.status} className="row col-12 col-md-12" />
      </div>
    );
  }
}

export default App;
