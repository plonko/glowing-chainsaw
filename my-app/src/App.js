import React, { Component } from "react";
import "./App.css";

class Header extends Component {
  render() {
    return <header className="header">Header</header>;
  }
}

class Shop extends Component {
  render() {
    return <header className="shop">S</header>;
  }
}

class Basket extends Component {
  render() {
    return <div className="basket">B</div>;
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
