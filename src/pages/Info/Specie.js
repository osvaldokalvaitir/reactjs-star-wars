import React, { Component } from "react";

import { connect } from "react-redux";

class Specie extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const data = this.props.species[this.props.match.params.id];
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
  species: state.species,
});

export default connect(
  mapStateToProps,
  null
)(Specie);