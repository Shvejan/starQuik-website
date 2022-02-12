import React, { Component } from "react";
import { Card, CardImg, CardBody } from "reactstrap";
export default class Products extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const card = (p, id) => (
      <div className="col-2 justify-content-center">
        <Card>
          <CardImg
            top
            width="80px%"
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
