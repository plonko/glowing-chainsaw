import React, { Component, Fragment } from "react";
import { PRODUCT_API } from "../constants";

class Products extends Component {
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
      <Fragment>
        {this.state.products.map(product => {
          return (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          );
        })}
      </Fragment>
    );
  }
}

export default Products;
