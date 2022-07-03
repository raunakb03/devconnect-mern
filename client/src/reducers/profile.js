import { GET_PROFILE, PROFILE_ERROR } from "../actions/types";

const initialState = {
  profile: null, // this will contain the profile of the user
  profiles: [], // this will contain profiles of all other users
  repos: [], // this will contain the github repos of all the users
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}