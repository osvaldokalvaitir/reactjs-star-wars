import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import UserProfile from "./UserProfile";

import Home from "../pages/Home";
import Info from "../pages/Info";
import About from "../pages/About";
import NotFound from "../components/NotFound";

import Particles from "react-particles-js";
import cfg from "../particles/config-light.json";

const particlesStyle = {
  position: "absolute", 
  top: "0",
  left: "0",
  width: "100%",
  height: "100%"  
}

const Template = () => {
  return (
    <div className="container-fluid">
      <div style={particlesStyle}>
        <Particles params={cfg} />
      </div>
      <Header />
      <div className="row block-margin">
        <div className="col-md-3 col-sm-12 block-padding">
          <UserProfile />
        </div>
        <div className="col-md-9 col-sm-12 block-padding">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/people" component={Home} />
            <Route exact path="/people/:id" component={Info} />
            <Route exact path="/planets" component={Home} />
            <Route exact path="/planets/:id" component={Info} />
            <Route exact path="/species" component={Home} />
            <Route exact path="/species/:id" component={Info} />
            <Route exact path="/starships" component={Home} />
            <Route exact path="/starships/:id" component={Info} />
            <Route exact path="/vehicles" component={Home} />
            <Route exact path="/vehicles/:id" component={Info} />
            <Route exact path="/about" component={About} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Template;
