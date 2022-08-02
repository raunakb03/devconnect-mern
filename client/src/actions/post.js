import {
  ADD_POST,
  DELETE_POSTS,
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";

const API_KEY = "http://localhost:5000";

// get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_KEY}/api/posts`);

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
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
    const res = await axios.put(`${API_KEY}/api/posts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
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
    const res = await axios.put(`${API_KEY}/api/posts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
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
    const res = await axios.delete(`${API_KEY}/api/posts/${id}`);

    dispatch({
      type: DELETE_POSTS,
      payload: id,
    });

    dispatch(setAlert("Post Removed", "success"));
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

// add post
export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(`${API_KEY}/api/posts`, formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });

    dispatch(setAlert("Post Created", "success"));
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

// get post
export const getPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_KEY}/api/posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
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

// add comment
export const addComment = (postId, formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(`${API_KEY}/api/posts/comment/${postId}`, formData, config);

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });

    dispatch(setAlert("Comment Added", "success"));
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

// delete comment
export const deleteComment = (postId, commentId) => async (dispatch) => {

  try {
    const res = await axios.delete(`${API_KEY}/api/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });

    dispatch(setAlert("Comment Removed", "success"));
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

