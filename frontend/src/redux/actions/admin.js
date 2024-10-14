import axios from "axios";
import { server } from "../store"; // Update with your actual store path
import {
  getDashboardStatsRequest,
  getDashboardStatsSuccess,
  getDashboardStatsFail,
  getAdminUsersRequest,
  getAdminUsersSuccess,
  getAdminUsersFail,
  getAdminOrdersRequest,
  getAdminOrdersSuccess,
  getAdminOrdersFail,
  processOrderRequest,
  processOrderSuccess,
  processOrderFail,
} from "../reducers/adminReducer"; // Make sure to update the correct import path

export const getAdminStats = () => async (dispatch) => {
  try {
    dispatch(getDashboardStatsRequest());

    const { data } = await axios.get(`${server}/admin/stats`, {
      withCredentials: true,
    });

    dispatch(getDashboardStatsSuccess(data));
  } catch (error) {
    dispatch(getDashboardStatsFail(error.response.data.message));
  }
};

export const getAdminUsers = () => async (dispatch) => {
  try {
    dispatch(getAdminUsersRequest());

    const { data } = await axios.get(`${server}/admin/users`, {
      withCredentials: true,
    });

    dispatch(getAdminUsersSuccess(data.users));
  } catch (error) {
    dispatch(getAdminUsersFail(error.response.data.message));
  }
};

export const getAdminOrders = () => async (dispatch) => {
  try {
    dispatch(getAdminOrdersRequest());

    const { data } = await axios.get(`${server}/admin/orders`, {
      withCredentials: true,
    });

    dispatch(getAdminOrdersSuccess(data.orders));
  } catch (error) {
    dispatch(getAdminOrdersFail(error.response.data.message));
  }
};

export const processOrder = (id) => async (dispatch) => {
  try {
    dispatch(processOrderRequest());

    const { data } = await axios.get(`${server}/admin/order/${id}`, {
      withCredentials: true,
    });

    dispatch(processOrderSuccess(data.message));
  } catch (error) {
    dispatch(processOrderFail(error.response.data.message));
  }
};
