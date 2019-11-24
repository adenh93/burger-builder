import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout";
import BurgerBuilder from "./containers/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <h1>Burger Builder</h1>
          <p>This is the burger builder app</p>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
