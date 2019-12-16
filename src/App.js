import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
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

  //   title: "Shark Ninja"
  // image: "https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg"
  // subtitle: "Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer System"
  // brand: "Nutribullet"

  render() {
    const { product } = this.props;
    const isLoaded = Object.keys(product).length !== 0;
    const { title, image, subtitle, brand, tags, sales } = product;
    return (
      <div className="App">
        <header className="App-header">
          <span>Stackline Tushar's Assignment</span>
        </header>
        <main>
          {isLoaded ? (
            <>
              <section className="App-side">
                <ProductContainer
                  title={title}
                  image={image}
                  subtitle={subtitle}
                  brand={brand}
                  tags={tags}
                />
                <ul className="App-links">
                  <li>
                    <FontAwesomeIcon icon={faHome} />
                    <a href="#">Overview</a>
                  </li>
                  <li className="active">
                    <FontAwesomeIcon icon={faBars} />
                    <a href="#"> Sales</a>
                  </li>
                </ul>
              </section>
              <section className="App-main">
                <GraphContainer sales={sales} />
                <TableContainer sales={sales} />
              </section>
            </>
          ) : null}
        </main>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
