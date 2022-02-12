import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  CardBody,
} from "reactstrap";
import green from "./images/green.png";
import back from "./images/blue.png";
import orange from "./images/orange.png";
import TopCat from "./TopCat";

class Products extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const card = (p, id) => (
      <div className="col-3 justify-content-center">
        <Card>
          <CardImg
            top
            width="20%"
            height="190px"
            src={p.image}
            alt="Card image cap"
          />
          <CardBody>
            <h6 className="cardText">{p.name}</h6>
            <h6 className="cardText" style={{ color: "#e78536" }}>
              {p.desc}
            </h6>
            <h6>{p.price}</h6>
          </CardBody>
        </Card>
        {!p.quantity && (
          <button
            className="product-btn"
            onClick={() => this.props.incQuantity(p.id)}
          >
            ADD
          </button>
        )}
        {p.quantity !== 0 && (
          <div className="row">
            <button
              className="prod-inc-btn col"
              onClick={() => this.props.decQuantity(p.id)}
            >
              -
            </button>
            <p className="pt-2">{p.quantity}</p>
            <button
              className="prod-inc-btn col"
              onClick={() => this.props.incQuantity(p.id)}
            >
              +
            </button>
          </div>
        )}
      </div>
    );
    return <React.Fragment>{this.props.cartproducts.map(card)}</React.Fragment>;
  }
}

class RenderList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row" style={{ "padding-top": "100px" }}>
        <h3 className="col-3 mainhead">{this.props.cat.title}</h3>
        <hr
          className="col-7 line"
          style={{
            "border-top": "1px solid rgb(207, 190, 190)",
            "margin-top": "20px",
          }}
        />
        <h6 className="col-1" style={{ "margin-top": "9px" }}>
          View All
        </h6>
        <div className="col-3">
          <Card inverse>
            <CardImg
              height="300px"
              src={this.props.cat.back}
              alt="Card image cap"
            />
            <CardImgOverlay>
              <div className="p-4 justify-content-center">
                <CardTitle>
                  <h4>{this.props.cat.title}</h4>
                </CardTitle>
                <CardText>
                  {this.props.cat.desc}
                  <p>
                    <button className="cardButton">View All</button>
                  </p>
                </CardText>
              </div>
            </CardImgOverlay>
          </Card>
        </div>
        <Products
          incQuantity={this.props.incQuantity}
          decQuantity={this.props.decQuantity}
          cartproducts={this.props.cartproducts}
        />
      </div>
    );
  }
}

class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Category1: {
        title: "Best Price Ever",
        desc: "Find the best deals on your favourite products",
        back: back,
      },
      Category2: {
        title: "Buy and get Free",
        desc: "Grocer shopping couldn't be more fun",
        back: orange,
      },
      Category3: {
        title: "Save Max",
        desc: "Handpicked deals with best prices.",
        back: green,
      },
    };
  }
  render() {
    return (
      <div className="productsDiv">
        <div className="container">
          <RenderList
            cat={this.state.Category1}
            incQuantity={this.props.incQuantity}
            decQuantity={this.props.decQuantity}
            cartproducts={this.props.cartproducts.slice(1, 4)}
          />
          <TopCat />
          <RenderList
            cat={this.state.Category2}
            incQuantity={this.props.incQuantity}
            decQuantity={this.props.decQuantity}
            cartproducts={this.props.cartproducts.slice(3, 6)}
          />
          <RenderList
            cat={this.state.Category3}
            incQuantity={this.props.incQuantity}
            decQuantity={this.props.decQuantity}
            cartproducts={this.props.cartproducts.slice(2, 5)}
          />
        </div>
      </div>
    );
  }
}

export default AllProducts;
