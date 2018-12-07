import React, { Component } from "react";
import Products from "./Products";

class Shop extends Component {
  render() {
    return (
      <div className="shop">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <Products />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Shop;
