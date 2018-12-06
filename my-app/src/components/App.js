import React, { Component } from "react";
import { PRODUCT_API } from "../constants";
import "../css/App.css";

class Header extends Component {
  render() {
    return <header className="header">Shop | Basket</header>;
  }
}

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
        {this.state.products.map(product => {
          return (
            <div>
              <div>{product.name}</div>
              <div>{product.description}</div>
              <div>{product.price}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

class Basket extends Component {
  render() {
    return <div className="basket">basket</div>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Shop />
        <Basket />
      </div>
    );
  }
}

export default App;
