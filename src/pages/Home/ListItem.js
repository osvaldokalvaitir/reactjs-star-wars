import React, { Component } from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none"
};

class ListItem extends Component {
  static defaultProps = {
    item: {},
    resource: "",
    id: ""
  };

  render() {
    var props = this.props,
      item = props.item,
      resource = props.resource,
      id = props.id;

    return (
      <li className="list-group-item list-group-item-action list-group-item-dark">
        <Link
          to={`${resource}/${id}`}
          className="text-dark font-weight-bold"
          style={linkStyle}
        >
          {item.attributes.name}
        </Link>
      </li>
    );
  }
}

export default ListItem;
