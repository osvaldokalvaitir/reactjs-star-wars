import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FormattedMessage } from "react-intl";

import ListInfo from "../components/ListInfo";

class Info extends Component {
  componentDidMount() {
    console.log(window.location.href)
  }

  render() {
    return (
      <div className="card bg-secondary block-height block-width">
        <div className="btn-group block-width bg-dark">
          <Link className="btn btn-dark" to="/">
            <i className="material-icons align-bottom">arrow_back</i>
            {"  "}
            <FormattedMessage id="back" />
          </Link>
        </div>
        <ListInfo resource={this.props.match.params.id} id={this.props.match.params.id} />
      </div>
    );
  }
}

export default Info;
