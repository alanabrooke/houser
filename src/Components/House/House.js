import React, { Component } from "react";

export default class House extends Component {
  render() {

    return (
      <div>
        House
        <h4>{this.props.obj.address}</h4>
        <h4>{this.props.obj.city}</h4>
        <h4>{this.props.obj.property_name}</h4>
        <h4>{this.props.obj.state}</h4>
        <h4>{this.props.obj.zip}</h4>
        <button
          onClick={() => {
            this.props.deleteHouse(this.props.obj.id);
            this.props.didMount();
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

// address: "123 street"
// city: "dallas"
// id: 1
// property_name: "alana's house"
// state: "texas"
// zip: 74215