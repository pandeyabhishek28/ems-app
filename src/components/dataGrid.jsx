import React, { Component } from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import CellWithCustomFormat from "./cellWithCustomFormat";
import Spinner from "./spinner";
import "./dataGrid.css";
// Our main component, Currently it is using the Kendo-react grid to show the data and spinner as a
// wait indicator.
class DataGrid extends Component {
  state = {
    skip: 0,
    take: 10
  };
  // This is responsible for handling the page change
  pageChange = event => {
    this.setState({
      skip: event.page.skip,
      take: event.page.take
    });
  };

  componentDidMount() {
    this.props.fetchGridData();
  }

  render() {
    // Look for data is loaded, if not then just show the loading indicator
    if (!this.props.isLoaded) {
      return <Spinner />;
    }

    return (
      <div className="example">
        <Grid
          style={{ height: "600px" }}
          data={this.props.gridDataSource.slice(
            this.state.skip,
            this.state.take + this.state.skip
          )}
          skip={this.state.skip}
          // take={this.state.take}
          total={this.props.gridDataSource.length}
          info={true}
          pageSizes={true}
          pageSize={this.state.take}
          pageable={true}
          //filterable={true}
          sortable={true}
          onPageChange={this.pageChange}
          resizable={true}
        >
          <Column
            filter="numeric"
            className="col"
            width={60}
            field="ID"
            title="ID"
            locked
          />
          <Column
            width={100}
            className="col"
            field="firstName"
            title="First Name"
            locked
          />
          <Column
            className="col"
            width={100}
            field="lastName"
            title="Last Name"
            locked
          />
          <Column
            width={140}
            className="col RightAlignment"
            filter="date"
            field="joiningDate"
            title="Date of Joining"
          />
          <Column
            className="col RightAlignment"
            width={120}
            field="currentCTC"
            format="currency"
            cell={CellWithCustomFormat}
            title="Current CTC"
          />
          <Column
            className="col RightAlignment"
            field="previousCTC"
            width={120}
            format="currency"
            cell={CellWithCustomFormat}
            title="Previous CTC"
          />
          <Column
            width={140}
            className="col RightAlignment"
            field="DOB"
            filter="date"
            title="Date of Birth"
          />
          <Column width={140} className="col" field="email" title="Email ID" />
          <Column
            width={140}
            className="col"
            filter="numeric"
            field="mobile"
            title="Mobile Number"
          />
          <Column
            width={140}
            className="col"
            field="landline"
            filter="numeric"
            title="Desk Number"
          />
          <Column width={100} className="col" field="city" title="City" />
          <Column width={100} className="col" field="state" title="State" />
          <Column
            width={100}
            filter="text"
            className="col"
            field="country"
            title="Country"
          />
          <Column
            width={100}
            className="col"
            field="pinCode"
            filter="numeric"
            title="Pin Code"
          />
          <Column
            width={140}
            filter="numeric"
            className="col"
            field="PAN"
            title="PAN"
          />
        </Grid>
      </div>
    );
  }
}

export default DataGrid;
