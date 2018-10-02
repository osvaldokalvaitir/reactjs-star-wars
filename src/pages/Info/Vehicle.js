import React, { Component } from "react";

import { connect } from "react-redux";

class Vehicle extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const data = this.props.vehicles[this.props.match.params.id];
    this.setState({ data });
  }

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item list-group-item-dark">
          {
             JSON.stringify(this.state.data)
            
          //      .map((item, id) => <ListItemInfo item={item} key={id} />)
          }
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  vehicles: state.vehicles,
});

export default connect(
  mapStateToProps,
  null
)(Vehicle);