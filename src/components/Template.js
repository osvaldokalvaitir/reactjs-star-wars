import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import UserProfile from "./UserProfile";

import Home from "../pages/Home";
import Info from "../pages/Info";
import About from "../pages/About";

const Template = () => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row page-margin page-size">
        <div className="col-md-3 col-sm-12">
          <UserProfile />
        </div>
        <div className="col-md-9 col-sm-12">
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/people/:id" component={Info} />
            <Route exact path="/planets/:id" component={Info} />
            <Route exact path="/species/:id" component={Info} />
            <Route exact path="/starships/:id" component={Info} />
            <Route exact path="/vehicles/:id" component={Info} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Template;
