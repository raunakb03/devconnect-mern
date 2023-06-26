import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];

    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}


//here we made initialState an array. This array contains objects and each oject contains {id, message, alertType}

// where as in the alert type we took initialState as a single onject as there will be a single user authenticating at a single time and the object containsa information related to the authentication of the user 