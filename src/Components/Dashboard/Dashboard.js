import React, { Component } from "react";
import House from "../House/House";
import { Link } from 'react-router-dom';
import axios from "axios";

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        axios
          .get("/api/houses")
          .then(res => {
            this.setState({ houses: res.data });
            console.log("houses", this.state.houses);
          })
          .catch(err => console.log("Error found", err));
      }

    render() {
        let houses = this.state.houses
        return (
            <div>
                Dashboard
            {houses.map(house =>
            <h4 key={house.name}>{house.name}</h4>
            )}
            <Link to='/wizard' ><button>Add New Property</button></Link>
                <House />
            </div>
            
        )
    }
}