import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer";
import { authReducer } from "./reducers/userReducer";
///////////////changing 1:59
// import { orderReducer } from "./reducers/cartReducer";
import { orderReducer, ordersReducer } from "./reducers/orderReducer";
/////////////////////////
import { adminReducer } from "./reducers/adminReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    orders: ordersReducer,
    admin: adminReducer,
  },
});

export default store;

// export const server = "https://mbaburgerwala.herokuapp.com/api/v1";
export const server = "http://localhost:4000/api/v1";
