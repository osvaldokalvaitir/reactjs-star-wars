import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FormattedMessage, injectIntl } from "react-intl";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logout } from "./../store/ducks/auth";

import LogoImg from "../assets/img/tropperstorm.png";

class Header extends Component {
  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const intl = this.props.intl;
    const StarWarsLogo = intl.formatMessage({ id: "StarWarsLogo" });

    return (
      <nav className="navbar navbar-default navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">
          <img src={LogoImg} alt={StarWarsLogo} width="30" height="30" /> Star
          Wars
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <FormattedMessage id="home" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <FormattedMessage id="about" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={this.handleLogout}>
                <FormattedMessage id="logout" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(injectIntl(Header));
