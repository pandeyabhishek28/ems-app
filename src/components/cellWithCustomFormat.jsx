import React, { Component } from "react";
// Actually, We refrain to update/modify database column type and "format="{0:something}" is not working for me
// so that's why I am creating this component to format the cell value as required

class CellWithCustomFormat extends Component {
  state = {
    formatOptions: [
      {
        formatName: "currency",
        replace: [",", "."],
        replaceWith: [".", ","]
      },
      {
        formatName: "none",
        replace: [",", "."],
        replaceWith: [".", ","]
      }
    ]
  };

  render() {
    let cellData = this.props.dataItem[this.props.field];
    let formattedCellData = "";
    if (this.props.format === "currency") {
      const { replace, replaceWith } = this.state.formatOptions.find(
        x => x.formatName === this.props.format
      );
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
    }
    // else if (this.props.format === "date") {
    //   it's already in the required format
    // }
    return <td>{formattedCellData}</td>;
  }
}

export default CellWithCustomFormat;
