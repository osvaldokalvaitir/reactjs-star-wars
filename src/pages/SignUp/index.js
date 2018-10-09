import React, { Component } from "react";

import { FormattedMessage, injectIntl } from "react-intl";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { signUp } from "../../store/ducks/users";

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

class SignUpForm extends Component {
  componentDidMount() {
    document.body.classList.toggle("body-center");
  }

  componentWillUnmount() {
    document.body.classList.remove("body-center");
  }

  render() {
    const intl = this.props.intl;
    const name = intl.formatMessage({ id: "name" });
    const username = intl.formatMessage({ id: "username" });
    const email = intl.formatMessage({ id: "email" });
    const city = intl.formatMessage({ id: "city" });
    const state = intl.formatMessage({ id: "state" });
    const password = intl.formatMessage({ id: "password" });
    const StarWarsLogo = intl.formatMessage({ id: "StarWarsLogo" });

    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting
    } = this.props;
    return (
      <div>
        <div style={particlesStyle}>
          <Particles params={cfg} />
        </div>
        <form className="bodys form-signup" onSubmit={handleSubmit}>
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

              <div className="form-row">
                <div className="input-group col-md-6">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="material-icons">face</i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder={name}
                    required
                    maxLength="50"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="input-group col-md-6">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="material-icons">account_circle</i>
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
                    onBlur={handleBlur}
                  />
                </div>
                <div className="input-group col-md-6">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="material-icons">alternate_email</i>
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder={email}
                    required
                    maxLength="50"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="input-group col-md-6">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="material-icons">location_city</i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder={city}
                    required
                    maxLength="50"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="input-group col-md-6">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="material-icons">public</i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    placeholder={state}
                    required
                    maxLength="50"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="input-group col-md-6">
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
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-md-12">
                  <br />
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="isFan"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.isFan}
                    />
                    <label className="form-check-label" htmlFor="isFan">
                      <FormattedMessage id="reallyFan" />
                    </label>
                  </div>
                  {errors.isFan &&
                    touched.isFan && (
                      <div className="input-feedback font-weight-bold text-danger">
                        <small>
                          <FormattedMessage id="fan" />
                        </small>
                      </div>
                    )}
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="col-md-12">
                <button
                  type="submit"
                  className="btn btn-dark btn-lg mx-auto d-block btn-block"
                  disabled={isSubmitting}
                >
                  <FormattedMessage id="signUp" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const SignUp = withFormik({
  mapPropsToValues: () => ({
    name: "",
    username: "",
    email: "",
    city: "",
    state: "",
    password: "",
    isFan: false
  }),
  validate: values => {
    let errors = {};
    if (!values.isFan) {
      errors.isFan = true;
    }
    return errors;
  },
  handleSubmit: (payload, { props, setSubmitting }) => {
    const content = {
      name: payload.name,
      email: payload.email,
      city: payload.city,
      state: payload.state,
      password: payload.password
    };
    props.signUp(payload.username, content);
    props.history.push("/");
  },
  displayName: "SignUpForm"
})(injectIntl(SignUpForm));

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => bindActionCreators({ signUp }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
