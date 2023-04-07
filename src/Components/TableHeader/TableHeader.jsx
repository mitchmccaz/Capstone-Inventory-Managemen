import React, { Component } from "react";
import App from "../App";
import { useState } from "react";

class TableHeader extends Component {

  sortItem_NumberHandler = () => {
    this.props.sortByItem_Number();
  };

  sortUSDHandler = () => {
    this.props.sortByUSD();
  };

  sortWeightHandler = () => {
    this.props.sortByWeight();
  };


  render() {
    return (

      <div>
      <table>
        <tr>
          <td>ID</td>
          <td><button onClick={this.sortItem_NumberHandler}>Item ID &#x21D5;</button></td>
          <td><button onClick={this.sortUSDHandler}>USD &#x21D5;</button></td>
          <td><button onClick={this.sortWeightHandler}>Weight &#x21D5;</button></td>
          <td>Delete?</td>
        </tr>
      </table>
      </div>
    );
  }
}

export default TableHeader;