import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class People extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const data = this.props.peoples[this.props.match.params.id];
    this.setState( { data: [ data.attributes ] } );
  }

  render() {
    const PeopleInfo = this.state.data;

    return (
      <div>
        {
          PeopleInfo.map(people => {
            const {name} = people;
            return
              <div>
                Nome: <h3>{ name }</h3>
              </div>
          })      
        }
      </div>
      
      // <ul className="list-group">
      //   <li className="list-group-item list-group-item-dark">
      //     {
      //       <li className="list-group-item list-group-item-dark">
      //         <div className="text-dark font-weight-bold">{this.props.item}</div>
      //       </li>
      //     }
      //   </li>
      // </ul>
    );
  }
}

const mapStateToProps = state => ({
  peoples: state.peoples,
});

export default connect(
  mapStateToProps,
  null
)(People);