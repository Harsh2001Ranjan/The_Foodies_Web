import axios from "axios";
import { server } from "../store";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });

    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });

    dispatch({
      type: "loadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    //////////////////// I am doing some Updates here
    let errorMessage = "An unknown error occurred";
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    }
    ///////////////////////////////////////////////////////////////////////////
    dispatch({
      type: "loadUserFail",
      // removing this line
      //payload: error.response.data.message,
      ////adding here
      payload: errorMessage,
      //////////////////////////////////////////////////////////////////////////
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });
    //changed this line
    // const { data } = await axios.get(`${server}/logout`, {
    //   withCredentials: true,
    // });
    // to
    //////////////////////////////////////////////
    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });
    ////////////////////////////////////////////////////////
    dispatch({
      type: "logoutSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "logoutFail",
      payload: error.response.data.message,
    });
  }
};
