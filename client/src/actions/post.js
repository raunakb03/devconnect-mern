import { DELETE_POSTS, GET_POSTS, POST_ERROR, UPDATE_LIKES } from "./types";
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

// add like
export const addLike = (id) => async (dispatch) => {

    try {
        const res= await axios.put(`${API_KEY}/api/posts/like/${id}`)

        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: res.data }
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
// remove like
export const removeLike = (id) => async (dispatch) => {

    try {
        const res= await axios.put(`${API_KEY}/api/posts/unlike/${id}`)

        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: res.data }
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
// delete post
export const deletePost = (id) => async (dispatch) => {

    try {
        const res= await axios.delete(`${API_KEY}/api/posts/${id}`)

        dispatch({
            type: DELETE_POSTS,
            payload: id
        })

        dispatch(setAlert('Post Removed', 'success'))
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
