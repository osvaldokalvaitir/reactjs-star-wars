import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FormattedMessage, injectIntl } from "react-intl";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login } from "../../store/ducks/auth";

import { withFormik } from "formik";

import Particles from "react-particles-js";
import cfg from "../../particles/config-dark.json";

import LogoImg from "../../assets/img/tropperstorm.png";

const particlesStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  marginTop: "-30px",
  width: "100%",
  height: "100%"
};

const logoStyle = {
  width: "50px",
  height: "auto"
};

class LoginForm extends Component {
  componentDidMount() {
    document.body.classList.toggle("body-center");
  }

  componentWillUnmount() {
    document.body.classList.remove("body-center");
  }

  render() {
    const intl = this.props.intl;
    const username = intl.formatMessage({ id: "username" });
    const password = intl.formatMessage({ id: "password" });
    const StarWarsLogo = intl.formatMessage({ id: "StarWarsLogo" });

    const { values, handleChange, handleSubmit, isSubmitting } = this.props;
    return (
      <div>
        <div style={particlesStyle}>
          <Particles params={cfg} />
        </div>
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="card border-light">
            <h4 className="card-header bg-dark mb-3 text-white text-center">
              <img src={LogoImg} alt={StarWarsLogo} style={logoStyle} />{" "}
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
      return searched
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
