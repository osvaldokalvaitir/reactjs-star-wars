import React, { Component } from "react";

class ListItem extends Component {
  static defaultProps = {
    name: '',
    value: '',
  };

  render() {
    return (
      <li className="list-group-item list-group-item-dark">
        <div className="text-dark">{`${this.props.name}:`} <span className="font-weight-bold">{ this.props.value }</span></div>
      </li>
    )
  }
}

export default ListItem;
