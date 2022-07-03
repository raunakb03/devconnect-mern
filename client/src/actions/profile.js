import axios from "axios";
import { setAlert } from "./alert";
import { GET_PROFILE, PROFILE_ERROR } from "./types";

const API_KEY = "http://localhost:5000";

// get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_KEY}/api/profile/me`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
