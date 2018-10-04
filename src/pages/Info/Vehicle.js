import React, { Component } from "react";

import { connect } from "react-redux";

import { injectIntl } from "react-intl";

import ListItem from "./ListItem";
import NoInfo from "./NoInfo";

class Vehicle extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const data = this.props.vehicles[this.props.match.params.id];
    if (data) this.setState({ data: [data.attributes] });
  }

  render() {
    const VehicleInfo = this.state.data;

    return (
      <div>
        {VehicleInfo.length > 0 ? (
          VehicleInfo.map(vehicle => {
            const {
              name,
              created,
              vehicle_class,
              model,
              manufacturer,
              length,
              max_atmosphering_speed,
              cargo_capacity,
              passengers,
              crew,
              consumables,
              cost_in_credits
            } = vehicle;
            const intl = this.props.intl;
            const vehicleClass = intl.formatMessage({ id: "vehicleClass" });
            const vehicleModel = intl.formatMessage({ id: "vehicleModel" });
            const vehicleManufacturer = intl.formatMessage({ id: "vehicleManufacturer" });
            const vehicleLength = intl.formatMessage({ id: "vehicleLength" });
            const vehicleMaxAtmospheringSpeed = intl.formatMessage({ id: "vehicleMaxAtmospheringSpeed" });
            const vehicleCargoCapacity = intl.formatMessage({ id: "vehicleCargoCapacity" });
            const vehiclePassengers = intl.formatMessage({ id: "vehiclePassengers" });
            const vehicleCrew = intl.formatMessage({ id: "vehicleCrew" });
            const vehicleConsumables = intl.formatMessage({ id: "vehicleConsumables" });
            const vehicleCostInCredits = intl.formatMessage({ id: "vehicleCostInCredits" });
            return (
              <div key={created}>
                <h1 className="text-center text-white">{name}</h1>
                <ul className="list-group">
                  <ListItem name={vehicleClass} value={vehicle_class} />
                  <ListItem name={vehicleModel} value={model} />
                  <ListItem name={vehicleManufacturer} value={manufacturer} />
                  <ListItem name={vehicleLength} value={length} />
                  <ListItem name={vehicleMaxAtmospheringSpeed} value={max_atmosphering_speed} />
                  <ListItem name={vehicleCargoCapacity} value={cargo_capacity} />
                  <ListItem name={vehiclePassengers} value={passengers} />
                  <ListItem name={vehicleCrew} value={crew} />
                  <ListItem name={vehicleConsumables} value={consumables} />
                  <ListItem name={vehicleCostInCredits} value={cost_in_credits} />
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
  vehicles: state.vehicles
});

export default connect(
  mapStateToProps,
  null
)(injectIntl(Vehicle));
