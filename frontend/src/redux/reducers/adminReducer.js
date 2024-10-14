import { createReducer, createAction } from "@reduxjs/toolkit";

// Action Creators
export const getDashboardStatsRequest = createAction(
  "getDashboardStatsRequest"
);
export const getDashboardStatsSuccess = createAction(
  "getDashboardStatsSuccess"
);
export const getDashboardStatsFail = createAction("getDashboardStatsFail");

export const getAdminUsersRequest = createAction("getAdminUsersRequest");
export const getAdminUsersSuccess = createAction("getAdminUsersSuccess");
export const getAdminUsersFail = createAction("getAdminUsersFail");

export const getAdminOrdersRequest = createAction("getAdminOrdersRequest");
export const getAdminOrdersSuccess = createAction("getAdminOrdersSuccess");
export const getAdminOrdersFail = createAction("getAdminOrdersFail");

export const processOrderRequest = createAction("processOrderRequest");
export const processOrderSuccess = createAction("processOrderSuccess");
export const processOrderFail = createAction("processOrderFail");

export const clearError = createAction("clearError");
export const clearMessage = createAction("clearMessage");

// Reducer
export const adminReducer = createReducer(
  { orders: [], users: [] }, // initial state
  (builder) => {
    builder
      // Dashboard Stats
      .addCase(getDashboardStatsRequest, (state) => {
        state.loading = true;
      })
      .addCase(getDashboardStatsSuccess, (state, action) => {
        state.loading = false;
        state.usersCount = action.payload.usersCount;
        state.ordersCount = action.payload.ordersCount;
        state.totalIncome = action.payload.totalIncome;
      })
      .addCase(getDashboardStatsFail, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Admin Users
      .addCase(getAdminUsersRequest, (state) => {
        state.loading = true;
      })
      .addCase(getAdminUsersSuccess, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAdminUsersFail, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Admin Orders
      .addCase(getAdminOrdersRequest, (state) => {
        state.loading = true;
      })
      .addCase(getAdminOrdersSuccess, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(getAdminOrdersFail, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Process Order
      .addCase(processOrderRequest, (state) => {
        state.loading = true;
      })
      .addCase(processOrderSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(processOrderFail, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Clear Error and Message
      .addCase(clearError, (state) => {
        state.error = null;
      })
      .addCase(clearMessage, (state) => {
        state.message = null;
      });
  }
);
