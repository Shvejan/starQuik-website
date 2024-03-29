import React, { Component } from "react";
import logo from "./images/vrlogo.png";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  Navbar,
  Collapse,
  NavItem,
  NavbarToggler,
  Modal,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  ModalHeader,
} from "reactstrap";
import { Link } from "react-router-dom";
import banner from "./images/login.jpg";
class Header extends Component {
  // let totalCost=0;

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.setuser = this.setuser.bind(this);
    this.togglemodel = this.togglemodel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleCartModel = this.toggleCartModel.bind(this);
    this.state = {
      dropdownOpen1: false,
      dropdownOpen2: false,
      dropdownOpen3: false,
      dropdownOpen4: false,
      dropdownOpen5: false,
      dropdownOpen6: false,
      dropdownOpen7: false,
      dropdownOpen8: false,
      toggleNav: false,
      user: null,
      model: false,
      value: "",
      cartModel: false,
    };
  }

  setuser(name) {
    this.setState((prevState) => ({
      user: name,
      value: "",
    }));
  }
  toggle(id) {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  togglemodel() {
    this.setState((prevState) => ({
      model: !prevState.model,
    }));
  }
  onMouseEnter(id) {
    // switch (id) {
    //   case 1:
    //     this.setState({ dropdownOpen1: true });
    //     return;
    //   case 2:
    //     this.setState({ dropdownOpen2: true });
    //     return;
    //   case 3:
    //     this.setState({ dropdownOpen3: true });
    //     return;
    //   case 4:
    //     this.setState({ dropdownOpen4: true });
    //     return;
    //   case 5:
    //     this.setState({ dropdownOpen5: true });
    //     return;
    //   case 6:
    //     this.setState({ dropdownOpen6: true });
    //     return;
    //   case 7:
    //     this.setState({ dropdownOpen7: true });
    //     return;
    //   case 8:
    //     this.setState({ dropdownOpen8: true });
    //     return;
    // }
  }
  toggleCartModel() {
    this.setState((prevState) => ({
      cartModel: !prevState.cartModel,
    }));
  }
  onMouseLeave(id) {
    switch (id) {
      case 1:
        this.setState({ dropdownOpen1: false });
        return;
      case 2:
        this.setState({ dropdownOpen2: false });
        return;
      case 3:
        this.setState({ dropdownOpen3: false });
        return;
      case 4:
        this.setState({ dropdownOpen4: false });
        return;
      case 5:
        this.setState({ dropdownOpen5: false });
        return;
      case 6:
        this.setState({ dropdownOpen6: false });
        return;
      case 7:
        this.setState({ dropdownOpen7: false });
        return;
      case 8:
        this.setState({ dropdownOpen8: false });
        return;
    }
  }
  toggleNav = () => {
    this.setState({ toggleNav: !this.state.toggleNav });
  };
  viewCart = () => {
    if (this.state.user) this.toggleCartModel();
    else {
      alert("Please Login");
      this.togglemodel();
    }
  };
  render(props) {
    let totalCost = 0,
      totalQuantity = 0;
    function addTotalCost(price) {
      totalCost += price;
    }
    function addTotalQuantity(q) {
      totalQuantity += q;
    }
    return (
      <React.Fragment>
        <div className="row row-content " style={{ alignItems: "center" }}>
          <Link to="/">
            <div
              className=" p-4 col-2 col-sm-2"
              style={{ alignSelf: "flex-start" }}
            >
              <img
                src={logo}
                alt="Logo"
                className="fluid"
                style={{ height: 60 }}
              />
            </div>
          </Link>
          <div className="row">
            <div className="col pt-3">
              <button className="btnn">Location</button>
            </div>
            <div className="col pt-3">
              <input
                type="text"
                placeholder="search"
                className="search"
              ></input>
            </div>
            {this.state.user && (
              <h3 className="pt-4 pl-5">Welcome {this.state.user}</h3>
            )}

            <div className="col pt-3 ">
              {!this.state.user && (
                <button className="login" onClick={this.togglemodel}>
                  Login/Register
                </button>
              )}
              {this.state.user && (
                <button className="login" onClick={() => this.setuser(null)}>
                  Logout
                </button>
              )}
            </div>
            <div className="col pt-3">
              <button className="cart" onClick={this.viewCart}>
                Cart
              </button>
            </div>
          </div>
        </div>
        <Navbar light expand="md" className="mainNav">
          <div className="container just-content-center ">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.toggleNav} navbar>
              <Nav navbar className="">
                <Link to="/categories/Beverages">
                  <NavItem>
                    <Dropdown
                      className="d-inline-block dropdown"
                      onMouseOver={() => this.onMouseEnter(1)}
                      onMouseLeave={() => this.onMouseLeave(1)}
                      isOpen={this.state.dropdownOpen1}
                      toggle={() => this.toggle(1)}
                      style={{ backgroundColor: "#1b1b2a" }}
                    >
                      <DropdownToggle
                        className="text-white"
                        caret
                        color="#1b1b2a"
                      >
                        Beverages
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Category 1</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem disabled>Item1</DropdownItem>
                        <DropdownItem disabled>Item2</DropdownItem>
                        <DropdownItem disabled>Item3</DropdownItem>
                        <DropdownItem disabled>Item4</DropdownItem>
                        <DropdownItem disabled>Item5</DropdownItem>
                        <DropdownItem disabled>Item6</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>
                </Link>
                <Link to="/categories/Branded Food">
                  <NavItem>
                    <Dropdown
                      className="d-inline-block dropdown"
                      onMouseOver={() => this.onMouseEnter(2)}
                      onMouseLeave={() => this.onMouseLeave(2)}
                      isOpen={this.state.dropdownOpen2}
                      toggle={() => this.toggle(2)}
                      style={{ backgroundColor: "#1b1b2a" }}
                    >
                      <DropdownToggle
                        className="text-white"
                        caret
                        color="#1b1b2a"
                      >
                        Branded Food
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Category 1</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem disabled>Item1</DropdownItem>
                        <DropdownItem disabled>Item2</DropdownItem>
                        <DropdownItem disabled>Item3</DropdownItem>
                        <DropdownItem disabled>Item4</DropdownItem>
                        <DropdownItem disabled>Item5</DropdownItem>
                        <DropdownItem disabled>Item6</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>
                </Link>
                <Link to="/categories/Diary,Bakery">
                  <NavItem>
                    <Dropdown
                      className="d-inline-block dropdown"
                      onMouseOver={() => this.onMouseEnter(3)}
                      onMouseLeave={() => this.onMouseLeave(3)}
                      isOpen={this.state.dropdownOpen3}
                      toggle={() => this.toggle(3)}
                      style={{ backgroundColor: "#1b1b2a" }}
                    >
                      <DropdownToggle
                        className="text-white"
                        caret
                        color="#1b1b2a"
                      >
                        Diary,Bakery
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Category 1</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem disabled>Item1</DropdownItem>
                        <DropdownItem disabled>Item2</DropdownItem>
                        <DropdownItem disabled>Item3</DropdownItem>
                        <DropdownItem disabled>Item4</DropdownItem>
                        <DropdownItem disabled>Item5</DropdownItem>
                        <DropdownItem disabled>Item6</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>
                </Link>
                <Link to="/categories/Fruits & Vegitables">
                  <NavItem>
                    <Dropdown
                      className="d-inline-block dropdown"
                      onMouseOver={() => this.onMouseEnter(4)}
                      onMouseLeave={() => this.onMouseLeave(4)}
                      isOpen={this.state.dropdownOpen4}
                      toggle={() => this.toggle(4)}
                      style={{ backgroundColor: "#1b1b2a" }}
                    >
                      <DropdownToggle
                        className="text-white"
                        caret
                        color="#1b1b2a"
                      >
                        Fruits & Vegitables
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Category 1</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem disabled>Item1</DropdownItem>
                        <DropdownItem disabled>Item2</DropdownItem>
                        <DropdownItem disabled>Item3</DropdownItem>
                        <DropdownItem disabled>Item4</DropdownItem>
                        <DropdownItem disabled>Item5</DropdownItem>
                        <DropdownItem disabled>Item6</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>
                </Link>
                <Link to="/categories/Frozen Veg">
                  <NavItem>
                    <Dropdown
                      className="d-inline-block dropdown"
                      onMouseOver={() => this.onMouseEnter(5)}
                      onMouseLeave={() => this.onMouseLeave(5)}
                      isOpen={this.state.dropdownOpen5}
                      toggle={() => this.toggle(5)}
                      style={{ backgroundColor: "#1b1b2a" }}
                    >
                      <DropdownToggle
                        className="text-white"
                        caret
                        color="#1b1b2a"
                      >
                        Frozen Veg
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Category 1</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem disabled>Item1</DropdownItem>
                        <DropdownItem disabled>Item2</DropdownItem>
                        <DropdownItem disabled>Item3</DropdownItem>
                        <DropdownItem disabled>Item4</DropdownItem>
                        <DropdownItem disabled>Item5</DropdownItem>
                        <DropdownItem disabled>Item6</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>
                </Link>

                <Link to="/categories/Personal Care">
                  <NavItem>
                    <Dropdown
                      className="d-inline-block dropdown"
                      onMouseOver={() => this.onMouseEnter(8)}
                      onMouseLeave={() => this.onMouseLeave(8)}
                      isOpen={this.state.dropdownOpen8}
                      toggle={() => this.toggle(8)}
                      style={{ backgroundColor: "#1b1b2a" }}
                    >
                      <DropdownToggle
                        className="text-white"
                        caret
                        color="#1b1b2a"
                      >
                        Personal Care
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Category 1</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem disabled>Item1</DropdownItem>
                        <DropdownItem disabled>Item2</DropdownItem>
                        <DropdownItem disabled>Item3</DropdownItem>
                        <DropdownItem disabled>Item4</DropdownItem>
                        <DropdownItem disabled>Item5</DropdownItem>
                        <DropdownItem disabled>Item6</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>
                </Link>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Modal
          isOpen={this.state.model}
          size="lg"
          style={{ maxWidth: "1500px", width: "100%" }}
        >
          <ModalHeader style={{ backgroundColor: "#59e7db" }}>
            User Login
          </ModalHeader>
          <div
            style={{
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
              height: "600px",
              overflow: "hidden",
            }}
          >
            <div
              className="row"
              style={{
                justifyContent: "center",
              }}
            >
              <div
                className="col-8"
                style={{
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img src={banner} />
              </div>
              <div
                className="col-4"
                style={{
                  paddingTop: "90px",
                }}
              >
                <label for="exampleInputEmail1">Username</label>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  style={{ margin: 10 }}
                  placeholder="User Name"
                  className="form-control"
                />
                <br />
                <label for="exampleInputEmail1">Password</label>

                <input
                  type="password"
                  style={{ margin: 10 }}
                  className="form-control"
                  placeholder="Password"
                />
                <br />
                <button
                  onClick={() => {
                    this.setuser(this.state.value);
                    this.togglemodel();
                  }}
                  style={{ margin: 10 }}
                  className="btn btn-success"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    this.togglemodel();
                  }}
                  style={{ margin: 10 }}
                  className="btn btn-danger"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={this.state.cartModel}
          size="lg"
          style={{ maxWidth: "1500px", width: "100%" }}
        >
          <ModalHeader style={{ backgroundColor: "#59e7db" }}>
            Cart Items
          </ModalHeader>
          <div className="row">
            <div className="col-7">
              <table style={{ padding: 20, margin: 30, width: "100%" }}>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
                {this.props.cartproducts.map((a, i) => {
                  if (a.quantity) {
                    addTotalCost(parseFloat(a.price.slice(1)) * a.quantity);
                    addTotalQuantity(a.quantity);
                    return (
                      <tr key={i}>
                        <td>
                          <img
                            src={a.image}
                            style={{ margin: "10px", width: "70px" }}
                          />
                          {a.name}
                        </td>
                        <th>x{a.quantity}</th>
                        <td>{a.price}</td>
                      </tr>
                    );
                  }
                })}
                <tr style={{ height: "200px" }}>
                  <th>Total</th>
                  <th>{totalQuantity}</th>
                  <th>{totalCost}</th>
                </tr>
              </table>
            </div>
            <div className="col-5" style={{ padding: 30 }}>
              <div>
                <h5>Shipping address</h5>
                <div style={{ paddingTop: 20 }}>
                  <input
                    type="text"
                    placeholder="Name"
                    className="addressInput"
                  />
                  <br />
                  <br />
                  <input
                    type="text"
                    placeholder="House Number"
                    className="addressInput"
                  />
                  <br />
                  <br />
                  <input
                    type="text"
                    placeholder="Colony"
                    className="addressInput"
                  />
                  <br />
                  <br />
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    className="addressInput"
                  />
                  <br />
                  <br />
                  <input
                    type="text"
                    placeholder="Address Line 2"
                    className="addressInput"
                  />
                  <br />
                  <br />
                  <input
                    type="number"
                    placeholder="Pincode"
                    className="addressInput"
                  />
                  <br />
                  <br />
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="addressInput"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={() => {
                this.props.resetProds();
                this.toggleCartModel();
                alert("order placed successfully");
              }}
              style={{ margin: 10 }}
              className="btn btn-success"
            >
              Place Order
            </button>
            <button
              onClick={() => {
                this.toggleCartModel();
              }}
              style={{ margin: 10 }}
              className="btn btn-danger"
            >
              Close
            </button>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
