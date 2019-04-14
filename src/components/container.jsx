import React, { Component } from "react";
import DataGrid from "./dataGrid";

class Container extends Component {
  render() {
    return (
      <div>
        <DataGrid
          gridDataSource={this.props.employeeGridData}
          fetchGridData={this.props.getGridDataAsync}
          isLoaded={this.props.isLoaded}
        />
      </div>
    );
  }
}

export default Container;
