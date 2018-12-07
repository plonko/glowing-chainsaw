import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    products: PropTypes.array.isRequired
  };

  static defaultProps = {
    products: [
      {
        id: 0,
        name: "Product",
        price: 0,
        description: "Product description"
      }
    ]
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map(product => {
            return <ProductRow product={product} key={product.id} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
