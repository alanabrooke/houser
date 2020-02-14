import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houses: []
    };
  }

  componentDidMount = () => {
    axios
      .get("/api/houses")
      .then(res => {
        this.setState({ houses: res.data });
        console.log("houses", this.state.houses);
      })
      .catch(err => console.log("Error in dashboard", err));
  }


  deleteHouse = id => {
    axios
      .delete(`/api/delete/${id}`)
      .then(res => {
        this.componentDidMount()
      })
      .catch(err => console.log("brkn delete", err));
  };

  render() {
    console.log("before destructure", this.state.houses);
    //   let { houses } = this.state.houses
    //   console.log('houses in render',houses)
    return (
      <div>
        <header>
         Dashboard
        <Link to={{ pathname: "/wizard" }}>         
          <button className='add-button'>ADD A NEW PROPERTY</button>
        </Link>
        </header>

        <div className="mapped-houses" key={0}>
          {this.state.houses.map((obj, index) => {
            return (
              <div key={index}>
                <House obj={obj} deleteHouse={this.deleteHouse} didMount={this.componentDidMount}/>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

