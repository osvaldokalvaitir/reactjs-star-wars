import React, { Component } from "react";

import { connect } from "react-redux";

class Planet extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const data = this.props.planets[this.props.match.params.id];
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
  planets: state.planets,
});

export default connect(
  mapStateToProps,
  null
)(Planet);