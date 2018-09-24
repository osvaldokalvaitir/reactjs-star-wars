import React, { Component } from "react";

class ListItemInfo extends Component {
  static defaultProps = {
    item: {}
  };

  render() {
    return (
      <li className="list-group-item list-group-item-dark">
        <div className="text-dark font-weight-bold">{this.props.item}</div>
      </li>
    );
  }
}

export default ListItemInfo;
