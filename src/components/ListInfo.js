import React, { Component } from "react";

import { connect } from "react-redux";

import ListItemInfo from "../components/ListItemInfo";

class Info extends Component {
  static defaultProps = {
    resource: "people", // mudar aqui
    id: "",
  };

  state = {
    obj: []
  };

  componentDidMount() {
    const resource = this.props.resource;
    let Prop;
    if (resource === "people") Prop = this.props.peoples;
    else if (resource === "planets") Prop = this.props.planets;
    else if (resource === "species") Prop = this.props.species;
    else if (resource === "starships") Prop = this.props.starships;
    else if (resource === "vehicles") Prop = this.props.vehicles;

     const obj = Prop[this.props.id];
     this.setState({ obj });
  }

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item list-group-item-dark">
          {
            // JSON.stringify(this.state.obj)
            this.state.obj
          //      .map((item, id) => <ListItemInfo item={item} key={id} />)
          }
        </li>
      </ul>
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