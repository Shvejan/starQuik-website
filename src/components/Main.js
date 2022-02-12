import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slides from "./Slide";
import AllProducts from "./AllProducts";
import WhyChoose from "./WhyChoose";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./Categories";
import { productsList } from "./productsData";
class Main extends Component {
  constructor(props) {
    super(props);
    this.incQuantity = this.incQuantity.bind(this);
    this.decQuantity = this.decQuantity.bind(this);
    this.state = {
      cartproducts: productsList,
    };
  }
  incQuantity(id) {
    const temp = this.state.cartproducts;
    temp[id].quantity += 1;
    this.setState({ cartproducts: [...temp] });
  }
  decQuantity(id) {
    const temp = this.state.cartproducts;
    temp[id].quantity -= 1;
    this.setState({ cartproducts: [...temp] });
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header
            cartproducts={this.state.cartproducts}
            incQuantity={this.incQuantity}
          />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slides />
                  <AllProducts
                    cartproducts={this.state.cartproducts}
                    incQuantity={this.incQuantity}
                    decQuantity={this.decQuantity}
                  />
                  <WhyChoose />
                </>
              }
            />
            <Route
              path="categories/:catname"
              element={
                <Categories
                  cartproducts={this.state.cartproducts}
                  incQuantity={this.incQuantity}
                  decQuantity={this.decQuantity}
                />
              }
            />
            <Route path="invoices" element={<>invoices</>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default Main;
