import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slides from "./Slide";
import AllProducts from "./AllProducts";
import WhyChoose from "./WhyChoose";
class Main extends Component {
  constructor(props) {
    super(props);
    this.setCartProducts = this.setCartProducts.bind(this);

    this.state = {
      cartproducts: [
        { name: "apple", quantity: 3 },
        { name: "bananas", quantity: 2 },
      ],
    };
  }
  setCartProducts(item) {
    this.setState((prevState) => ({
      cartproducts: [...prevState.cartproducts, item],
    }));
  }
  render() {
    return (
      <React.Fragment>
        <Header
          cartproducts={this.state.cartproducts}
          setCartProducts={this.setCartProducts}
        />
        <Slides />
        <AllProducts />
        <WhyChoose />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
