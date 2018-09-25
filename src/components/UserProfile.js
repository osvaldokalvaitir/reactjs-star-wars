import React, { Component } from "react";

import { injectIntl } from "react-intl";

import { connect } from "react-redux";

import AvatarImg from "../assets/img/tropperstorm.png";

class UserProfile extends Component {
  render() {
    const intl = this.props.intl;
    const profileAvatar = intl.formatMessage({ id: "profileAvatar" });

    return (
      <div className="card bg-secondary text-white block-height">
        <h4 className="card-header bg-dark text-center">
          <img
            src={AvatarImg}
            alt={profileAvatar}
            style={{ width: "150px", height: "auto" }}
          />
        </h4>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item list-group-item-dark">
              <h6 className="text-center">{this.props.auth.user.name}</h6>
            </li>
            <li className="list-group-item list-group-item-dark">
              <p className="text-center">{this.props.auth.user.username}</p>
            </li>
            <li className="list-group-item list-group-item-dark">
              <p className="text-center">{this.props.auth.user.email}</p>
            </li>
            <li className="list-group-item list-group-item-dark">
              <p className="text-center">
                {this.props.auth.user.city} - {this.props.auth.user.state}
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(injectIntl(UserProfile));
