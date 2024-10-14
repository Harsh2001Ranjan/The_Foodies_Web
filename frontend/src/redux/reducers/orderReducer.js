// import { createReducer } from "@reduxjs/toolkit";

// export const orderReducer =
//   createReducer();
//   {},
//   {
//     createOrderRequest: (state) => {
//       state.loading = true;
//     },
//     createOrderSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     },
//     createOrderFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     paymentVerificationRequest: (state) => {
//       state.loading = true;
//     },
//     paymentVerificationSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     },
//     paymentVerificationFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     clearMessage: (state) => {
//       state.message = null;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//   }
// );
/////////////////////////////////////////////
//////Builder form by chat gpt new version of redux
////

// export const ordersReducer = createReducer(
//   { orders: [] },
//   {
//     getMyOrdersRequest: (state) => {
//       state.loading = true;
//     },
//     getMyOrdersSuccess: (state, action) => {
//       state.loading = false;
//       state.orders = action.payload;
//     },
//     getMyOrdersFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     getOrderDetailsRequest: (state) => {
//       state.loading = true;
//     },
//     getOrderDetailsSuccess: (state, action) => {
//       state.loading = false;
//       state.order = action.payload;
//     },
//     getOrderDetailsFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     clearError: (state) => {
//       state.error = null;
//     },
//     clearMessage: (state) => {
//       state.message = null;
//     },
//   }
import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

export const orderReducer = createReducer({}, (builder) => {
  builder
    .addCase("createOrderRequest", (state) => {
      state.loading = true;
    })
    .addCase("createOrderSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("createOrderFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("paymentVerificationRequest", (state) => {
      state.loading = true;
    })
    .addCase("paymentVerificationSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("paymentVerificationFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("clearMessage", (state) => {
      state.message = null;
    })
    .addCase("clearError", (state) => {
      state.error = null;
    });
});

export const ordersReducer = createReducer({ orders: [] }, (builder) => {
  builder
    .addCase("getMyOrdersRequest", (state) => {
      state.loading = true;
    })
    .addCase("getMyOrdersSuccess", (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    })
    .addCase("getMyOrdersFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("getOrderDetailsRequest", (state) => {
      state.loading = true;
    })
    .addCase("getOrderDetailsSuccess", (state, action) => {
      state.loading = false;
      state.order = action.payload;
    })
    .addCase("getOrderDetailsFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("clearError", (state) => {
      state.error = null;
    })
    .addCase("clearMessage", (state) => {
      state.message = null;
    });
});

export const createOrderRequest = createAction("createOrderRequest");
export const createOrderSuccess = createAction("createOrderSuccess");
export const createOrderFail = createAction("createOrderFail");

export const paymentVerificationRequest = createAction(
  "paymentVerificationRequest"
);
export const paymentVerificationSuccess = createAction(
  "paymentVerificationSuccess"
);
export const paymentVerificationFail = createAction("paymentVerificationFail");

export const clearMessage = createAction("clearMessage");
export const clearError = createAction("clearError");

export const getMyOrdersRequest = createAction("getMyOrdersRequest");
export const getMyOrdersSuccess = createAction("getMyOrdersSuccess");
export const getMyOrdersFail = createAction("getMyOrdersFail");

export const getOrderDetailsRequest = createAction("getOrderDetailsRequest");
export const getOrderDetailsSuccess = createAction("getOrderDetailsSuccess");
export const getOrderDetailsFail = createAction("getOrderDetailsFail");
