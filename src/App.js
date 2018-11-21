import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Template from './components/Template';

class App extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const shouldUpdate = this.props.auth.isLogged !== nextProps.auth.isLogged;
    return shouldUpdate;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route path="/" component={this.props.auth.isLogged ? Template : Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  null,
)(App);
