import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addPeople } from "../../store/ducks/peoples";
import { addPlanet } from "../../store/ducks/planets";
import { addSpecie } from "../../store/ducks/species";
import { addStarship } from "../../store/ducks/starships";
import { addVehicle } from "../../store/ducks/vehicles";

import JwPagination from "jw-react-pagination";

import StarApi from "../../services/StarApi";

import ListItem from "./ListItem";

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
}

const customLabels = {
  first: "<<",
  last: ">>",
  previous: "<",
  next: ">"
};

const customStyles = {
  ul: {
    backgroundColor: "#343A40"
  },
  a: {
    color: "white"
  }
};

class List extends Component {
  constructor(props) {
    super(props);
    this.onChangePage = this.onChangePage.bind(this);
  }

  static defaultProps = {
    resource: ""
  };

  state = {
    list: {},
    pageOfItems: []
  };

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems });
  }

  async getApi(resource) {
    var Prop;
    if (resource === "people") Prop = this.props.peoples;
    else if (resource === "planets") Prop = this.props.planets;
    else if (resource === "species") Prop = this.props.species;
    else if (resource === "starships") Prop = this.props.starships;
    else if (resource === "vehicles") Prop = this.props.vehicles;

    if (isEmpty(Prop)) {
      let nextURL = `${resource}`;
      do {
        let response;
        try {
          response = await StarApi(nextURL);
          if (!response) return window.alert("Servidor não encontrado.");
        } catch (e) {
          return window.alert(`Servidor não está respondendo. ${e}`);
        }
        const { next, results } = response.data;
        next !== null
          ? (nextURL = next.substring(StarApi.defaults.baseURL.length))
          : (nextURL = null);
        results.map((elem, index) => {
          if (resource === "people") this.props.addPeople(index, elem);
          else if (resource === "planets") this.props.addPlanet(index, elem);
          else if (resource === "species") this.props.addSpecie(index, elem);
          else if (resource === "starships") this.props.addStarship(index, elem);
          else if (resource === "vehicles") this.props.addVehicle(index, elem);
          return null;
        });
        if (resource === "people")
          this.setState({
            list: this.props.peoples
          });
        else if (resource === "planets")
          this.setState({
            list: this.props.planets
          });
        else if (resource === "species")
          this.setState({
            list: this.props.species
          });
        else if (resource === "starships")
          this.setState({
            list: this.props.starships
          });
        else if (resource === "vehicles")
          this.setState({
            list: this.props.vehicles
          });
      } while (nextURL !== null);
    } else {
      if (resource === "people")
        this.setState({
          list: this.props.peoples
        });
      else if (resource === "planets")
        this.setState({
          list: this.props.planets
        });
      else if (resource === "species")
        this.setState({
          list: this.props.species
        });
      else if (resource === "starships")
        this.setState({
          list: this.props.starships
        });
      else if (resource === "vehicles")
        this.setState({
          list: this.props.vehicles
        });
    }
  }

  componentDidMount() {
    this.getApi(this.props.resource);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.resource !== this.props.resource) {
      this.getApi(this.props.resource);
    }
  }

  render() {
    return (
      <div className="card bg-light">
        <ul className="list-group border-dark">
          {this.state.pageOfItems.map((item, id) => (
            <ListItem
              item={item}
              resource={this.props.resource}
              id={id}
              key={id}
            />
          ))}
        </ul>
        <JwPagination
          items={this.state.list}
          onChangePage={this.onChangePage}
          pageSize={15}
          styles={customStyles}
          labels={customLabels}
        />
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { addPeople, addPlanet, addSpecie, addStarship, addVehicle },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
