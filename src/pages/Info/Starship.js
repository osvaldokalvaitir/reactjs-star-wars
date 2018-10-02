import React, { Component } from "react";

import { connect } from "react-redux";

class Starship extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const data = this.props.starships[this.props.match.params.id];
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
  starships: state.starships,
});

export default connect(
  mapStateToProps,
  null
)(Starship);