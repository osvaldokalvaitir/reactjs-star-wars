import React, { Component } from "react";

import { connect } from "react-redux";

import { injectIntl } from "react-intl";

import ListItem from "./ListItem";
import NoInfo from "./NoInfo";

class Specie extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const data = this.props.species[this.props.match.params.id];
    if (data) this.setState({ data: [data.attributes] });
  }

  render() {
    const SpecieInfo = this.state.data;

    return (
      <div>
        {SpecieInfo.length > 0 ? (
          SpecieInfo.map(specie => {
            const {
              name,
              created,
              classification,
              designation,
              language,
              average_lifespan,
              average_height,
              skin_colors,
              hair_colors,
              eye_colors
            } = specie;
            const intl = this.props.intl;
            const specieClassification = intl.formatMessage({ id: "specieClassification" });
            const specieDesignation = intl.formatMessage({ id: "specieDesignation" });
            const specieLanguage = intl.formatMessage({ id: "specieLanguage" });
            const specieAverageLifespan = intl.formatMessage({ id: "specieAverageLifespan" });
            const specieAverageHeight = intl.formatMessage({ id: "specieAverageHeight" });
            const specieSkinColors = intl.formatMessage({ id: "specieSkinColors" });
            const specieHairColors = intl.formatMessage({ id: "specieHairColors" });
            const specieEyeColors = intl.formatMessage({ id: "specieEyeColors" });
            return (
              <div key={created}>
                <h1 className="text-center text-white">{name}</h1>
                <ul className="list-group">
                  <ListItem name={specieClassification} value={classification} />
                  <ListItem name={specieDesignation} value={designation} />
                  <ListItem name={specieLanguage} value={language} />
                  <ListItem name={specieAverageLifespan} value={average_lifespan} />
                  <ListItem name={specieAverageHeight} value={average_height} />
                  <ListItem name={specieSkinColors} value={skin_colors} />
                  <ListItem name={specieHairColors} value={hair_colors} />
                  <ListItem name={specieEyeColors} value={eye_colors} />
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
  species: state.species
});

export default connect(
  mapStateToProps,
  null
)(injectIntl(Specie));
