import React, { Component } from "react";

import { connect } from "react-redux";

import { injectIntl } from "react-intl";

import ListItem from './ListItem';
import NoInfo from './NoInfo';

class Planet extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const data = this.props.planets[this.props.match.params.id];
    if(data) this.setState( { data: [ data.attributes ] } );
  }

  render() {
    const PlanetInfo = this.state.data;

    return (
      <div>
        { PlanetInfo.length > 0 ? 
            (            
              PlanetInfo.map(planet => {
                const {name, created, population, diameter, climate, terrain, gravity, orbital_period, rotation_period, surface_water } = planet;
                const intl = this.props.intl;
                const planetPopulation = intl.formatMessage({ id: "planetPopulation" });
                const planetDiameter = intl.formatMessage({ id: "planetDiameter" });
                const planetClimate = intl.formatMessage({ id: "planetClimate" });
                const planetTerrain = intl.formatMessage({ id: "planetTerrain" });
                const planetGravity = intl.formatMessage({ id: "planetGravity" });
                const planetOrbitalPeriod = intl.formatMessage({ id: "planetOrbitalPeriod" });
                const planetRotationPeriod = intl.formatMessage({ id: "planetRotationPeriod" });
                const planetSurfaceWater = intl.formatMessage({ id: "planetSurfaceWater" });                                
                return (
                  <div key={ created }>
                    <h1 className="text-center text-white">{ name }</h1>
                    <ul className="list-group">
                      <ListItem name={ planetPopulation } value={ population } />
                      <ListItem name={ planetDiameter } value={ diameter } />
                      <ListItem name={ planetClimate } value={ climate } />
                      <ListItem name={ planetTerrain } value={ terrain } />
                      <ListItem name={ planetGravity } value={ gravity } />
                      <ListItem name={ planetOrbitalPeriod } value={ orbital_period } />
                      <ListItem name={ planetRotationPeriod } value={ rotation_period } />                      
                      <ListItem name={ planetSurfaceWater } value={ surface_water } />
                    </ul>
                  </div>
                )
              })      
            )
          : (
            <NoInfo />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  planets: state.planets,
});

export default connect(
  mapStateToProps,
  null
)(injectIntl(Planet));