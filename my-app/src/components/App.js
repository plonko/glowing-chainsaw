import React, { Component } from "react";
import Shop from "./ShopPage";
import Basket from "./BasketPage";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="column">
              <Header />
              <Shop />
              <Basket />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
