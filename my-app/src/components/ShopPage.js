import React, { Component } from "react";
import ProductTable from "./ProductTable";
import { PRODUCT_API } from "../constants";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch(PRODUCT_API)
      .then(resp => resp.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
      <div className="shop">
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default Shop;
