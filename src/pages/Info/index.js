import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import { FormattedMessage } from "react-intl";

import People from './People';
import Planet from './Planet';
import Specie from './Specie';
import Starship from './Starship';
import Vehicle from './Vehicle';
class Info extends Component {
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
        <Switch>
          <Route exact path="/people/:id" component={People} />
          <Route exact path="/planets/:id" component={Planet} />
          <Route exact path="/species/:id" component={Specie} />
          <Route exact path="/starships/:id" component={Starship} />
          <Route exact path="/vehicles/:id" component={Vehicle} />
        </Switch>
      </div>
    );
  }
}

export default Info;
