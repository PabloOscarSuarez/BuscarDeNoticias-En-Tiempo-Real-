import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBBtn,
  MDBIcon
} from "mdbreact";
import { Link } from "react-router-dom";

//redux
import { connect } from "react-redux";
import {
  searchNotices,
  resetStateNotice
} from "../../redux/actions/actionsNotice";

class NavBar extends Component {
  state = {
    isOpen: false,
    country: "ar",
    category: "sports"
  };

  // capturo valores
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // submit info to redux
  onClick = e => {
    // reseteo store de redux
    this.props.resetStateNotice();

    e.preventDefault();

    const { country, category } = this.state;

    ///ejecuto action que hace peticion axios con la info de las noticias
    this.props.Notice(country, category);
    this.props.history.push("/notices");
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar color="blue-gradient" dark expand="md" className="z-depth-4">
        <Link to="/">
          <MDBNavbarBrand>
            <strong className="white-text h5">Search Notice Top </strong>
          </MDBNavbarBrand>
        </Link>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <select
                  className="browser-default custom-select m-2"
                  onChange={this.handleChange}
                  name="country"
                >
                  <option value="ar">Select Country</option>
                  <option value="ar">Argentina</option>
                  <option value="br">Brasil</option>
                  <option value="co">Colombia</option>
                  <option value="mx">Mexico</option>
                  <option value="us">Estados Unidos</option>
                </select>
              </MDBFormInline>
            </MDBNavItem>
            <MDBNavItem>
              <MDBFormInline waves="true">
                <select
                  className="browser-default custom-select m-2"
                  onChange={this.handleChange}
                  name="category"
                >
                  <option value="business">Select Category</option>
                  <option value="business">business</option>
                  <option value="entertainment">entertainment</option>
                  <option value="health">health</option>
                  <option value="sports">sports</option>
                  <option value="technology">technology</option>
                </select>
              </MDBFormInline>
            </MDBNavItem>
            <MDBBtn gradient="blue" onClick={this.onClick} rounded>
              {" "}
              <MDBIcon fab icon="stack-overflow" className="pr-1" /> Info
            </MDBBtn>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stateNotices: state.notices.notices
});

const mapDispatchToProps = dispatch => {
  return {
    Notice: (history, country, category) => {
      dispatch(searchNotices(history, country, category));
    },
    resetStateNotice: () => {
      dispatch(resetStateNotice());
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
);
