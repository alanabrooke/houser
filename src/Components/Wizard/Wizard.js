import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import store, { UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIPCODE } from '../../store';


export default class Wizard extends Component {
    constructor() {
        super()
        const reduxState = store.getState();
        this.state = {
          name: reduxState.name,
          address: reduxState.address,
          city: reduxState.city,
          state: reduxState.state,
          zipcode: reduxState.zipcode
        }
      }
  handleInputs = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(value);
  };
  saveChanges = () => {
    store.dispatch({
      type: UPDATE_NAME,
      payload: this.state.name
    })

    store.dispatch({
      type: UPDATE_ADDRESS,
      payload: this.state.address
    })

    store.dispatch({
      type: UPDATE_CITY,
      payload: this.state.city
    })

    store.dispatch({
      type: UPDATE_STATE,
      payload: this.state.state
    })

    store.dispatch({
      type: UPDATE_ZIPCODE,
      payload: this.state.zipcode
    })
  }

  handleAddButton = () => {
    const { property_name, address, city, state, zip, image_url, mortgage, rent } = this.state

    axios.post("/api/add", { property_name, address, city, state, zip, image_url, mortgage, rent}).then(res => {
    })
    this.setState({
      property_name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      image_url: "",
      mortgage: "",
      rent: ""
    })

  }

  handleNext = () => {
    const { property_name, address, city, state, zip } = this.state
    this.setState({
      property_name: property_name,
      address: address,
      city: city,
      state: state,
      zip: zip
    })
  }
  

  render() {
    const { property_name, address, city, state, zip } = this.state;
    return (
      <div>
        <h1>WIZARD</h1>
        <Link to={{ pathname: "/" }}>
          <button>CANCEL</button>
        </Link>

        <input
          name="property_name"
    
          value={property_name}
          onChange={e => this.handleInputs(e)}
          placeholder="name"
        />
        <input
          name="address"
          value={address}
          onChange={e => this.handleInputs(e)}
          placeholder="Address"
        />
        <input
          name="city"
          value={city}
          onChange={e => this.handleInputs(e)}
          placeholder="City"
        />
        <input
          name="state"
          value={state}
          onChange={e => this.handleInputs(e)}
          placeholder="State"
        />
        <input
          name="zip"
          value={zip}
          onChange={e => this.handleInputs(e)}
          placeholder="Zip"
        />
        <Link to={{ pathname: "/" }}>
        <button onClick={this.handleAddButton} >ADD</button>
        </Link>
        <Link to={{ pathname: '/step2'}}>
          <button handleNext={this.handleNext}>Next</button>
        </Link>

        
      </div>
    );
  }
}

