import React, { Component } from "react";

import PeopleItem from './PeopleItem';

class PeopleList extends Component {
  constructor() {
  	super();
  }
  
  list(data) {
  	const children = (items) => {
      if (items) {
      	return <ul>{ this.list(items) }</ul>
      }
    }
    
    return data.map((node, index) => {
      return <PeopleItem key={ node.id } name={ node.name }>
        { children(node.items) }
      </PeopleItem>
    })
  }
  
  render() {
  	return <ul>
    	{ this.list(this.props.data) }
    </ul>
  }
}

export default PeopleList