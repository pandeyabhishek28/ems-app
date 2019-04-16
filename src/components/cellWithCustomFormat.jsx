import React, { Component } from "react";
// Generally, We refrain to update/modify database column type and "format="{0:something}" is not working for me
// so that's why I am creating this component to format the cell value as per setup

class CellWithCustomFormat extends Component {
  state = {
    formatOptions: [
      {
        formatName: "currency",
        replace: [",", "."],
        replaceWith: [".", ","],
        precision: 2,
        icon: ""
      },
      {
        formatName: "none",
        replace: [",", "."],
        replaceWith: [".", ","],
        precision: 2,
        icon: ""
      }
    ]
  };

  render() {
    if (this.props.format === undefined) return;

    let cellData = this.props.dataItem[this.props.field];
    let formattedCellData = "";

    let selectedformat = this.state.formatOptions.find(
      x => x.formatName === this.props.format
    );
    if (selectedformat === undefined) return;

    const { replace, replaceWith } = selectedformat;
    if (selectedformat.precision !== undefined && !cellData.includes(".")) {
      cellData = cellData + "." + "0".repeat(selectedformat.precision);
    }
    var splittedData = cellData.split("");
    for (let index = 0; index < splittedData.length; index++) {
      const element = splittedData[index];
      for (let j = 0; j < replace.length; j++) {
        let rep = replace[j];
        if (rep === element) {
          splittedData[index] = replaceWith[j];
        }
      }
    }
    formattedCellData = splittedData.join("");
    // if (this.props.format === "date") {
    //   it's already in the required format :)
    // }
    // we can use the icon if we want
    //    return <td>{selectedformat.icon + formattedCellData}</td>;
    //
    return <td>{formattedCellData}</td>;
  }
}

export default CellWithCustomFormat;
