import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Wizard extends Component {
    constructor() {
    super();
    this.state = {
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: 0
    }
this.handleChange = this.handleChange.bind(this);
}
handleChange(e) {
    this.setState(
        { value : e.target.value });
    console.log(e.target.value)
}

    render() {
        return (
            <div>
                Wizard
                <input placeholder='name' onChange={this.handleChange} />
                <input placeholder='address' onChange={this.handleChange} />
                <input placeholder='city' onChange={this.handleChange} />
                <input placeholder='state' onChange={this.handleChange} />
                <input placeholder='zipcode' onChange={this.handleChange} />
                <Link to='/' ><button>Cancel</button></Link>
                <button>Complete</button>
            </div>
            
        )
    }
}