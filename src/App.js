import React, { Component } from "react";
import { connect } from "react-redux";
import { initializeState } from "./actions/initializeState";
import "./App.css";
import { GraphContainer, ProductContainer, TableContainer } from "./components";

/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  initializeState: () => dispatch(initializeState())
});

/*
 * mapStateToProps
 */
const mapStateToProps = state => ({
  product: state.product
});

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  componentDidMount() {
    this.props.initializeState();
  }

  render() {
    return (
      <div className="App">
        <header>
          <span>Stackline Tushar's Assignment</span>
        </header>
        <main>
          <section className="App-side">
            <ProductContainer data={1} />
          </section>
          <section className="App-main">
            <GraphContainer data={2} />
            <TableContainer data={3} />
          </section>
        </main>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
