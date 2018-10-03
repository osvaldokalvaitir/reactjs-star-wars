import React, { Component } from "react";

import { connect } from "react-redux";

import { injectIntl } from "react-intl";

import ListItem from './ListItem';
import NoInfo from './NoInfo';

class People extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const data = this.props.peoples[this.props.match.params.id];
    if(data) this.setState( { data: [ data.attributes ] } );
  }

  render() {
    const PeopleInfo = this.state.data;

    return (
      <div>
        { PeopleInfo.length > 0 ? 
            (            
              PeopleInfo.map(people => {
                const {name, created, birth_year, gender, height, skin_color, hair_color, eye_color} = people;
                const intl = this.props.intl;
                const peopleBirthYear = intl.formatMessage({ id: "peopleBirthYear" });
                const peopleGender = intl.formatMessage({ id: "peopleGender" });
                const peopleHeight = intl.formatMessage({ id: "peopleHeight" });
                const peopleSkinColor = intl.formatMessage({ id: "peopleSkinColor" });
                const peopleHairColor = intl.formatMessage({ id: "peopleHairColor" });
                const peopleEyeColor = intl.formatMessage({ id: "peopleEyeColor" });
                return (
                  <div key={ created }>
                    <h1 className="text-center text-white">{ name }</h1>
                    <ul className="list-group">
                      <ListItem name={ peopleBirthYear } value={ birth_year } />
                      <ListItem name={ peopleGender } value={ gender } />
                      <ListItem name={ peopleHeight } value={ height } />
                      <ListItem name={ peopleSkinColor } value={ skin_color } />
                      <ListItem name={ peopleHairColor } value={ hair_color } />
                      <ListItem name={ peopleEyeColor } value={ eye_color } />
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
  peoples: state.peoples,
});

export default connect(
  mapStateToProps,
  null
)(injectIntl(People));