import React, { Component } from "react";

import { connect } from "react-redux";

import { injectIntl } from "react-intl";

import ListItem from "./ListItem";
import NoInfo from "./NoInfo";

class Starship extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const data = this.props.starships[this.props.match.params.id];
    if (data) this.setState({ data: [data.attributes] });
  }

  render() {
    const StarshipInfo = this.state.data;
    console.log(StarshipInfo);

    return (
      <div>
        {StarshipInfo.length > 0 ? (
          StarshipInfo.map(starship => {
            const {
              name,
              created,
              starship_class,
              model,
              manufacturer,
              MGLT,
              length,
              max_atmosphering_speed,
              hyperdrive_rating,
              cargo_capacity,
              passengers,
              crew,
              consumables,
              cost_in_credits
            } = starship;
            const intl = this.props.intl;
            const starshipClass = intl.formatMessage({ id: "starshipClass" });
            const starshipModel = intl.formatMessage({ id: "starshipModel" });
            const starshipManufacturer = intl.formatMessage({ id: "starshipManufacturer" });
            const starshipMGLT = intl.formatMessage({ id: "starshipMGLT" });
            const starshipLength = intl.formatMessage({ id: "starshipLength" });
            const starshipMaxAtmospheringSpeed = intl.formatMessage({ id: "starshipMaxAtmospheringSpeed" });
            const starshipHyperdriveRating = intl.formatMessage({ id: "starshipHyperdriveRating" });
            const starshipCargoCapacity = intl.formatMessage({ id: "starshipCargoCapacity" });
            const starshipPassengers = intl.formatMessage({ id: "starshipPassengers" });
            const starshipCrew = intl.formatMessage({ id: "starshipCrew" });
            const starshipConsumables = intl.formatMessage({ id: "starshipConsumables" });
            const starshipCostInCredits = intl.formatMessage({ id: "starshipCostInCredits" });
            return (
              <div key={created}>
                <h1 className="text-center text-white">{name}</h1>
                <ul className="list-group">
                  <ListItem name={starshipClass} value={starship_class} />
                  <ListItem name={starshipModel} value={model} />
                  <ListItem name={starshipManufacturer} value={manufacturer} />
                  <ListItem name={starshipMGLT} value={MGLT} />
                  <ListItem name={starshipLength} value={length} />
                  <ListItem name={starshipMaxAtmospheringSpeed} value={max_atmosphering_speed} />
                  <ListItem name={starshipHyperdriveRating} value={hyperdrive_rating} />
                  <ListItem name={starshipCargoCapacity} value={cargo_capacity} />
                  <ListItem name={starshipPassengers} value={passengers} />
                  <ListItem name={starshipCrew} value={crew} />
                  <ListItem name={starshipConsumables} value={consumables} />
                  <ListItem name={starshipCostInCredits} value={cost_in_credits} />
                </ul>
              </div>
            );
          })
        ) : (
          <NoInfo />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  starships: state.starships
});

export default connect(
  mapStateToProps,
  null
)(injectIntl(Starship));
