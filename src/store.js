  
import { createStore } from "redux";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  img: "",
  mortgage: "",
  desired_rent: ""
}

// Exports
export const UPDATE_NAME = "update_name";
export const UPDATE_ADDRESS = "update_address";
export const UPDATE_CITY = "update_city";
export const UPDATE_STATE = "update_state";
export const UPDATE_ZIPCODE = "update_zipcode";
export const UPDATE_IMG = "update_img";
export const UPDATE_MORTGAGE = "update_mortgage";
export const UPDATE_RENT = "update_rent";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_NAME: 
    return {
      ...state,
      name: payload
    }
    case UPDATE_ADDRESS: 
    return {
      ...state,
      address: payload
    }
    case UPDATE_CITY: 
    return {
      ...state,
      city: payload
    }
    case UPDATE_STATE: 
    return {
      ...state,
      state: payload
    }
    case UPDATE_ZIPCODE: 
    return {
      ...state,
      zipcode: payload
    }
    case UPDATE_IMG: 
    return {
      ...state,
      img: payload
    }
    case UPDATE_MORTGAGE: 
    return {
      ...state,
      mortgage: payload
    }
    case UPDATE_RENT: 
    return {
      ...state,
      desired_rent: payload
    }
    default: return state
  }
}

export default createStore(reducer);