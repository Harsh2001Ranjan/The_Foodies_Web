// import express from "express";
// import {
//   getMyOrders,
//   getOrderDetails,
//   getAdminOrders,
//   //   paymentVerification,
//   placeOrder,
//   //   placeOrderOnline,
//   processOrder,
// } from "../controllers/order.js";
// import { isAuthenticated } from "../middlewares/auth.js";

// const router = express.Router();

// router.post("/createorder", isAuthenticated, placeOrder);

// // router.post("/createorderonline", isAuthenticated, placeOrderOnline);

// // router.post("/paymentverification", isAuthenticated, paymentVerification);

// router.get("/myorders", isAuthenticated, getMyOrders);

// router.get("/order/:id", isAuthenticated, getOrderDetails);

// // // Add Admin Middleware
// router.get("/admin/orders", isAuthenticated, authorizeAdmin, getAdminOrders);
// router.get("/admin/order/:id", isAuthenticated, authorizeAdmin, processOrder);

// export default router;
/////////////////// Above portion has some issue so after correcting the above one I have wriiten the correct code below
import express from "express";
import {
  getMyOrders,
  getOrderDetails,
  getAdminOrders,
  paymentVerification,
  placeOrder,
  placeOrderOnline,
  processOrder,
} from "../controllers/order.js";
import { isAuthenticated, authorizeAdmin } from "../middlewares/auth.js"; // Import authorizeAdmin

const router = express.Router();

router.post("/createorder", isAuthenticated, placeOrder);

router.post("/createorderonline", isAuthenticated, placeOrderOnline);

router.post("/paymentverification", isAuthenticated, paymentVerification);

router.get("/myorders", isAuthenticated, getMyOrders);

router.get("/order/:id", isAuthenticated, getOrderDetails);

// // Add Admin Middleware
router.get("/admin/orders", isAuthenticated, authorizeAdmin, getAdminOrders);
router.get("/admin/order/:id", isAuthenticated, authorizeAdmin, processOrder);

export default router;
