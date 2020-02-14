import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Step2 extends Component {

  render() {
    console.log('step 2 started')
    return (
      <div>
        <h1>THIS IS STEP 2</h1>

        <input placeholder='Image URL'></input>
        

        <Link to={{ pathname: '/wizard'}}>
        <button>BACK</button>
        </Link>

        <Link to={{ pathname: '/step3'}}>
        <button>NEXT</button>
        </Link>
        
      </div>
    );
  }
}

