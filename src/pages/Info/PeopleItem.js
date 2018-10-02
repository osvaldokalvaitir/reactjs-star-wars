import React, { Component } from "react";

class PeopleItem extends Component {
  // static defaultProps = {
  //   item: {}
  // };

  render() {
    return <li>
      	{ this.props.name }
        { this.props.children }
    </li>
  }
}

export default PeopleItem;
