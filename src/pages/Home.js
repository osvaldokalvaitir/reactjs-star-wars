import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { FormattedMessage } from "react-intl";

import List from "../components/List";
import NotFound from "../components/NotFound";

const Home = () => {
  return (
    <div className="block-height block-width">
      <div className="btn-group btn-group-justified block-width">
        <Link to="/people" className="btn btn-dark block-width">
          <FormattedMessage id="peoples" />
        </Link>
        <Link to="/planets" className="btn btn-dark block-width">
          <FormattedMessage id="planets" />
        </Link>
        <Link to="/species" className="btn btn-dark block-width">
          <FormattedMessage id="species" />
        </Link>
        <Link to="/starships" className="btn btn-dark block-width">
          <FormattedMessage id="starships" />
        </Link>
        <Link to="/vehicles" className="btn btn-dark block-width">
          <FormattedMessage id="vehicles" />
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
        <Route 
          path="*" 
          component={NotFound} 
        />
      </Switch>
    </div>
  );
};

export default Home;
