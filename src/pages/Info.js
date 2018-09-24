import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { FormattedMessage } from "react-intl";

import ListItemInfo from "../components/ListItemInfo";

class Info extends Component {
  state = {
    obj: []
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const obj = this.props.peoples[id];
    this.setState({ obj });
  }

  render() {
    return (
      <div className="card block-height block-width bg-secondary">
        <div className="btn-group block-width bg-dark">
          <Link className="btn btn-dark" to="/">
            <i className="material-icons align-bottom">arrow_back</i>
            {"  "}
            <FormattedMessage id="back" />
          </Link>
        </div>
        <ul className="list-group">
          <li className="list-group-item list-group-item-dark">
            {JSON.stringify(this.state.obj)
            // this.state.obj
            //      .map((item, id) => <ListItemInfo item={item} key={id} />)
            }
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  peoples: state.peoples,
  planets: state.planets,
  species: state.species,
  starships: state.starships,
  vehicles: state.vehicles
});

export default connect(
  mapStateToProps,
  null
)(Info);
