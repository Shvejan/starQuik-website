import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slides from "./Slide";
import AllProducts from "./AllProducts";
import WhyChoose from "./WhyChoose";

import amul from "./images/amul.jpg";
import oil from "./images/oil.jpg";
import drink from "./images/drink.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./Categories";
class Main extends Component {
  constructor(props) {
    super(props);
    this.incQuantity = this.incQuantity.bind(this);
    this.decQuantity = this.decQuantity.bind(this);

    this.state = {
      cartproducts: [
        {
          name: "Amul Pasteurised Butter - 500 Gm",
          desc: "Super Price Rs.219 Code Star5",
          price: "₹12.99",
          image: amul,
          quantity: 0,
        },
        {
          name: "Sunday Sunflower Oil Pouch - 1 Ltr",
          desc: "Super Price Rs.105 Code Star5",
          price: "₹111.00",
          image: oil,
          quantity: 0,
        },
        {
          name: "Dutchie Strawberry - 200 Ml",
          desc: "Buy 2 Get 1 Free",
          price: "₹24.93",
          image: drink,
          quantity: 0,
        },
      ],
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
            <Route path="categories/:catname" element={<Categories />} />
            <Route path="invoices" element={<>invoices</>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default Main;
