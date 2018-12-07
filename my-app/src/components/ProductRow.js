import React, { Component } from "react";

class ProductRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, description, price } = this.props.product;

    return (
      <tr>
        <td>{name}</td>
        <td>{description}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default ProductRow;
