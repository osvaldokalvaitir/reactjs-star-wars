import React, { Component } from "react";

import { connect } from "react-redux";

import PeopleList from './PeopleList';

class People extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const data = this.props.peoples[this.props.match.params.id];
    this.setState({ data: [data.attributes] });
  }

  render() {
    return (
      <ul>
      {this.state.data.map((item, index) => {
        return <h1>{item.name}</h1>        
      })}
      </ul>
      //JSON.stringify(this.state.data)
      //<PeopleList data={this.state.data} />
    );
  }
}

const mapStateToProps = state => ({
  peoples: state.peoples,
});

export default connect(
  mapStateToProps,
  null
)(People);