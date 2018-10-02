import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { FormattedMessage } from "react-intl";

import List from "./List";

const Home = () => {
  return (
    <div className="card bg-light block-height block-width">
      <div className="btn-group btn-group-justified block-width">
        <Link to="/people" className="btn btn-dark block-width">
          <span className="d-none d-sm-block"><FormattedMessage id="peoples" /></span>
          <span className="d-sm-none"><FormattedMessage id="peoples_abbr" /></span>
        </Link>
        <Link to="/planets" className="btn btn-dark block-width">
          <span className="d-none d-sm-block"><FormattedMessage id="planets" /></span>
          <span className="d-sm-none"><FormattedMessage id="planets_abbr" /></span>
        </Link>
        <Link to="/species" className="btn btn-dark block-width">
          <span className="d-none d-sm-block"><FormattedMessage id="species" /></span>
          <span className="d-sm-none"><FormattedMessage id="species_abbr" /></span>          
        </Link>
        <Link to="/starships" className="btn btn-dark block-width">
          <span className="d-none d-sm-block"><FormattedMessage id="starships" /></span>
          <span className="d-sm-none"><FormattedMessage id="starships_abbr" /></span>
        </Link>
        <Link to="/vehicles" className="btn btn-dark block-width">
          <span className="d-none d-sm-block"><FormattedMessage id="vehicles" /></span>
          <span className="d-sm-none"><FormattedMessage id="vehicles_abbr" /></span>          
        </Link>
      </div>
      <Switch>
        <Route
          exact
          path="/people"
          render={() => <List resource={"people"} />}
        />
        <Route
          exact
          path="/planets"
          render={() => <List resource={"planets"} />}
        />
        <Route
          exact
          path="/species"
          render={() => <List resource={"species"} />}
        />
        <Route
          exact
          path="/starships"
          render={() => <List resource={"starships"} />}
        />
        <Route
          exact
          path="/vehicles"
          render={() => <List resource={"vehicles"} />}
        />
        <Route 
          exact 
          path="/" 
          render={() => <List resource={"people"} />} 
        />        
      </Switch>
    </div>
  );
};

export default Home;
