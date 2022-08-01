import { GET_POSTS, POST_ERROR } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

const API_KEY = "http://localhost:5000";

// get posts
export const getPosts = () => async (dispatch) => {

    try {
        const res= await axios.get(`${API_KEY}/api/posts`)

        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
          type: POST_ERROR,
          payload: {
            msg: error.response.statusText,
            status: error.response.status,
          },
        });
    }
};
