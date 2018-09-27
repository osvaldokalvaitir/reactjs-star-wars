import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FormattedMessage, injectIntl } from "react-intl";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login } from "../store/ducks/auth";

import { withFormik } from "formik";

import Footer from "../components/Footer";

import LogoImg from "../assets/img/tropperstorm.png";

class LoginForm extends Component {
  render() {
    const intl = this.props.intl;
    const username = intl.formatMessage({ id: "username" });
    const password = intl.formatMessage({ id: "password" });
    const StarWarsLogo = intl.formatMessage({ id: "StarWarsLogo" });

    const { values, handleChange, handleSubmit, isSubmitting } = this.props;
    return (
      <div className="container-fluid block-margin">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 ml-auto mr-auto">
            <form onSubmit={handleSubmit}>
              <div className="card">
                <h4 className="card-header bg-secondary mb-3 text-white text-center">
                  <img
                    src={LogoImg}
                    alt={StarWarsLogo}
                    style={{ width: "50px", height: "auto" }}
                  />{" "}
                  <FormattedMessage id="StarWars" />
                </h4>
                <div className="card-body">
                  <h4 className="text-center">
                    <FormattedMessage id="welcome" />
                  </h4>
                  <p className="text-center">
                    <FormattedMessage id="darkside" />
                  </p>

                  <div className="form">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="material-icons">face</i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder={username}
                        required
                        maxLength="50"
                        value={values.username}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="material-icons">lock</i>
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder={password}
                        required
                        maxLength="15"
                        value={values.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <br />
                      <FormattedMessage id="withoutAccount" />
                      <Link to="/signup">
                        <FormattedMessage id="createAccount" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div>
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg mx-auto d-block btn-block"
                      disabled={isSubmitting}
                    >
                      <FormattedMessage id="enter" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const Login = withFormik({
  mapPropsToValues: () => ({
    username: "",
    password: ""
  }),
  handleSubmit: (payload, { props, setSubmitting }) => {
    setSubmitting(false);
    let searched = false;
    props.users.map(user => {
      if (
        user.username === payload.username &&
        user.content.password === payload.password
      ) {
        searched = true;
        const userData = {
          username: user.username,
          name: user.content.name,
          email: user.content.email,
          city: user.content.city,
          state: user.content.state,
          password: user.content.password
        };
        props.login(userData);
        props.history.push("/");
      }
    });
    if (!searched) {
      window.alert("Usuário não encontrado ou senha incorreta.");
    }
  },
  displayName: "LoginForm"
})(injectIntl(LoginForm));

const mapStateToProps = state => ({
  auth: state.auth,
  users: state.users
});

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
