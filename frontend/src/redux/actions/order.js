// import axios from "axios";
// import { server } from "../store";

// export const createOrder =
//   (
//     shippingInfo,
//     orderItems,
//     paymentMethod,
//     itemsPrice,
//     taxPrice,
//     shippingCharges,
//     totalAmount
//   ) =>
//   async (dispatch) => {
//     try {
//       dispatch({
//         type: "createOrderRequest",
//       });

//       const { data } = await axios.post(
//         `${server}/createorder`,
//         {
//           shippingInfo,
//           orderItems,
//           paymentMethod,
//           itemsPrice,
//           taxPrice,
//           shippingCharges,
//           totalAmount,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );

//       dispatch({
//         type: "createOrderSuccess",
//         payload: data.message,
//       });
//     } catch (error) {
//       dispatch({
//         type: "createOrderFail",
//         payload: error.response.data.message,
//       });
//     }
//   };

// // export const paymentVerification =
// //   (razorpay_payment_id, razorpay_order_id, razorpay_signature, orderOptions) =>
// //   async (dispatch) => {
// //     try {
// //       dispatch({
// //         type: "paymentVerificationRequest",
// //       });

// //       const { data } = await axios.post(
// //         `${server}/paymentverification`,
// //         {
// //           razorpay_payment_id,
// //           razorpay_order_id,
// //           razorpay_signature,
// //           orderOptions,
// //         },
// //         {
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           withCredentials: true,
// //         }
// //       );

// //       dispatch({
// //         type: "paymentVerificationSuccess",
// //         payload: data.message,
// //       });
// //     } catch (error) {
// //       dispatch({
// //         type: "paymentVerificationFail",
// //         payload: error.response.data.message,
// //       });
// //     }
// //   };

// // export const getMyOrders = () => async (dispatch) => {
// //   try {
// //     dispatch({ type: "getMyOrdersRequest" });

// //     const { data } = await axios.get(`${server}/myorders`, {
// //       withCredentials: true,
// //     });

// //     dispatch({ type: "getMyOrdersSuccess", payload: data.orders });
// //   } catch (error) {
// //     dispatch({ type: "getMyOrdersFail", payload: error.response.data.message });
// //   }
// // };

// // export const getOrderDetails = (id) => async (dispatch) => {
// //   try {
// //     dispatch({ type: "getOrderDetailsRequest" });

// //     const { data } = await axios.get(`${server}/order/${id}`, {
// //       withCredentials: true,
// //     });

// //     dispatch({ type: "getOrderDetailsSuccess", payload: data.order });
// //   } catch (error) {
// //     dispatch({
// //       type: "getOrderDetailsFail",
// //       payload: error.response.data.message,
// //     });
// //   }
// // };
////////////////////////////////

import axios from "axios";
import {
  createOrderRequest,
  createOrderSuccess,
  createOrderFail,
  paymentVerificationRequest,
  paymentVerificationSuccess,
  paymentVerificationFail,
  getMyOrdersRequest,
  getMyOrdersSuccess,
  getMyOrdersFail,
  getOrderDetailsRequest,
  getOrderDetailsSuccess,
  getOrderDetailsFail,
} from "../reducers/orderReducer"; // Assuming you’ve exported these action creators from the correct file
import { server } from "../store";

// Create Order Action
export const createOrder =
  (
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount
  ) =>
  async (dispatch) => {
    try {
      dispatch(createOrderRequest());

      const { data } = await axios.post(
        `${server}/createorder`,
        {
          shippingInfo,
          orderItems,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingCharges,
          totalAmount,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(createOrderSuccess(data.message));
    } catch (error) {
      dispatch(createOrderFail(error.response.data.message));
    }
  };

// Payment Verification Action
export const paymentVerification =
  (razorpay_payment_id, razorpay_order_id, razorpay_signature, orderOptions) =>
  async (dispatch) => {
    try {
      dispatch(paymentVerificationRequest());

      const { data } = await axios.post(
        `${server}/paymentverification`,
        {
          razorpay_payment_id,
          razorpay_order_id,
          razorpay_signature,
          orderOptions,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(paymentVerificationSuccess(data.message));
    } catch (error) {
      dispatch(paymentVerificationFail(error.response.data.message));
    }
  };

//Get My Orders Action 1:55
export const getMyOrders = () => async (dispatch) => {
  try {
    dispatch(getMyOrdersRequest());

    const { data } = await axios.get(`${server}/myorders`, {
      withCredentials: true,
    });

    dispatch(getMyOrdersSuccess(data.orders));
  } catch (error) {
    dispatch(getMyOrdersFail(error.response.data.message));
  }
};

//Get Order Details Action1:58
export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch(getOrderDetailsRequest());

    const { data } = await axios.get(`${server}/order/${id}`, {
      withCredentials: true,
    });

    dispatch(getOrderDetailsSuccess(data.order));
  } catch (error) {
    dispatch(getOrderDetailsFail(error.response.data.message));
  }
};
