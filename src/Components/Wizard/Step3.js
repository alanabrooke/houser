import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Step3 extends Component {

  render() {
    console.log('step 3 started')
    return (
      <div>
        <h1>THIS IS STEP 3</h1>

        <input placeholder='Monthly Mortgage Amount'></input>
        <input placeholder='Desired Monthly Rent'></input>

        <Link to={{ pathname: '/step2'}}>
        <button>BACK</button>
        </Link>
        <button>NEXT</button>
        
      </div>
    );
  }
}

