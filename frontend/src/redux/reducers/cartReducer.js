import { createReducer, isAction } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? {
        cheeseBurger: {
          quantity:
            JSON.parse(localStorage.getItem("cartItems")).cheeseBurger
              ?.quantity || 0,
          price: 200,
        },
        vegCheeseBurger: {
          quantity:
            JSON.parse(localStorage.getItem("cartItems")).vegCheeseBurger
              ?.quantity || 0,
          price: 500,
        },
        burgerWithFries: {
          quantity:
            JSON.parse(localStorage.getItem("cartItems")).burgerWithFries
              ?.quantity || 0,
          price: 1800,
        },
      }
    : {
        cheeseBurger: {
          quantity: 0,
          price: 200,
        },
        vegCheeseBurger: {
          quantity: 0,
          price: 500,
        },
        burgerWithFries: {
          quantity: 0,
          price: 1800,
        },
      },
  subTotal: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
    : 0,
  tax: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).tax
    : 0,
  shippingCharges: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
    : 0,
  total: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).total
    : 0,
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
};

////////////////////////////////////////////////////////////////////////////////////
// const initialState = {
//   cartItems: localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : {
//         // cartItems: {
//         cheeseBurger: {
//           quantity: 0,
//           price: 200,
//         },
//         vegCheeseBurger: {
//           quantity: 0,
//           price: 500,
//         },
//         burgerWithFries: {
//           quantity: 0,
//           price: 1800,
//         },
//       },
//   subTotal: localStorage.getItem("cartPrices")
//     ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
//     : 0,
//   tax: localStorage.getItem("cartPrices")
//     ? JSON.parse(localStorage.getItem("cartPrices")).tax
//     : 0,
//   shippingCharges: localStorage.getItem("cartPrices")
//     ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
//     : 0,
//   total: localStorage.getItem("cartPrices")
//     ? JSON.parse(localStorage.getItem("cartPrices")).total
//     : 0,
//   shippingInfo: localStorage.getItem("shippingInfo")
//     ? JSON.parse(localStorage.getItem("shippingInfo"))
//     : {},

//   // subTotal: 0,
//   // tax: 0,
//   // shippingCharges: 0,
//   // total: 0,
//   // shippingInfo: {},
// };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export const cartReducer = createReducer(initialState, {
//   cheeseBurgerIncrement: (state) => {
//     state.cartItems.cheeseBurger.quantity += 1;
//   },
//   vegCheeseBurgerIncrement: (state) => {
//     state.cartItems.vegCheeseBurger.quantity += 1;
//   },
//   burgerWithFriesIncrement: (state) => {
//     state.cartItems.burgerWithFries.quantity += 1;
//   },
//   cheeseBurgerDecrement: (state) => {
//     state.cartItems.cheeseBurger.quantity -= 1;
//   },
//   vegCheeseBurgerDecrement: (state) => {
//     state.cartItems.vegCheeseBurger.quantity -= 1;
//   },
//   burgerWithFriesDecrement: (state) => {
//     state.cartItems.burgerWithFries.quantity -= 1;
//   },

//     calculatePrice: (state) => {
//       state.subTotal =
//         state.cartItems.cheeseBurger.price *
//           state.cartItems.cheeseBurger.quantity +
//         state.cartItems.vegCheeseBurger.price *
//           state.cartItems.vegCheeseBurger.quantity +
//         state.cartItems.burgerWithFries.price *
//           state.cartItems.burgerWithFries.quantity;

//       state.tax = state.subTotal * 0.18;
//       state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
//       state.total = state.subTotal + state.tax + state.shippingCharges;
//     },

//     emptyState: (state) => {
//       state.cartItems = {
//         cheeseBurger: {
//           quantity: 0,
//           price: 200,
//         },
//         vegCheeseBurger: {
//           quantity: 0,
//           price: 500,
//         },
//         burgerWithFries: {
//           quantity: 0,
//           price: 1800,
//         },
//       };

//       state.subTotal = 0;
//       state.shippingCharges = 0;
//       state.tax = 0;
//       state.total = 0;
//     },

//     addShippingInfo: (state, action) => {
//       state.shippingInfo = {
//         hNo: action.payload.hNo,
//         city: action.payload.city,
//         state: action.payload.state,
//         country: action.payload.country,
//         pinCode: action.payload.pinCode,
//         phoneNo: action.payload.phoneNo,
//       };
//     },
//  });

//updating the above code using CHATGPT as  the object-style notation for createReducer is still being used, which is no longer supported in Redux Toolkit.
export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("cheeseBurgerIncrement", (state) => {
      state.cartItems.cheeseBurger.quantity += 1;
    })
    .addCase("vegCheeseBurgerIncrement", (state) => {
      state.cartItems.vegCheeseBurger.quantity += 1;
    })
    .addCase("burgerWithFriesIncrement", (state) => {
      state.cartItems.burgerWithFries.quantity += 1;
    })
    .addCase("cheeseBurgerDecrement", (state) => {
      state.cartItems.cheeseBurger.quantity -= 1;
    })
    .addCase("vegCheeseBurgerDecrement", (state) => {
      state.cartItems.vegCheeseBurger.quantity -= 1;
    })
    .addCase("burgerWithFriesDecrement", (state) => {
      state.cartItems.burgerWithFries.quantity -= 1;
    })
    .addCase("calculatePrice", (state) => {
      state.subTotal =
        state.cartItems.cheeseBurger.price *
          state.cartItems.cheeseBurger.quantity +
        state.cartItems.vegCheeseBurger.price *
          state.cartItems.vegCheeseBurger.quantity +
        state.cartItems.burgerWithFries.price *
          state.cartItems.burgerWithFries.quantity;

      state.tax = state.subTotal * 0.18;
      state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
      state.total = state.subTotal + state.tax + state.shippingCharges;
    })
    .addCase("emptyState", (state) => {
      state.cartItems = {
        cheeseBurger: {
          quantity: 0,
          price: 200,
        },
        vegCheeseBurger: {
          quantity: 0,
          price: 500,
        },
        burgerWithFries: {
          quantity: 0,
          price: 1800,
        },
      };

      state.subTotal = 0;
      state.shippingCharges = 0;
      state.tax = 0;
      state.total = 0;
    })
    .addCase("addShippingInfo", (state, action) => {
      state.shippingInfo = {
        hNo: action.payload.hNo,
        city: action.payload.city,
        state: action.payload.state,
        country: action.payload.country,
        pinCode: action.payload.pinCode,
        phoneNo: action.payload.phoneNo,
      };
    });
});
// export const orderReducer = createReducer(
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
//     clearMessage: (state) => {
//       state.message = null;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//   }
// );

// update the above aswell with the updated code
///////////////////////////////////////////////
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

////////////////////////////////////////////////
////chat gpt to import into cart.jsx

// Defining action creators
export const cheeseBurgerIncrement = createAction("cheeseBurgerIncrement");
export const vegCheeseBurgerIncrement = createAction(
  "vegCheeseBurgerIncrement"
);
export const burgerWithFriesIncrement = createAction(
  "burgerWithFriesIncrement"
);

export const cheeseBurgerDecrement = createAction("cheeseBurgerDecrement");
export const vegCheeseBurgerDecrement = createAction(
  "vegCheeseBurgerDecrement"
);
export const burgerWithFriesDecrement = createAction(
  "burgerWithFriesDecrement"
);

export const calculatePrice = createAction("calculatePrice");

////////////////////////////////////
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
