import express from "express";
import passport from "passport";
import { logout, myProfile } from "../controllers/user.js";

import { getAdminStats, getAdminUsers } from "../controllers/user.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get(
  "/login",
  // (req, res, next) => {
  //   res.send("Logged In");
  // }
  //////////////**************************
  ///////////////********* I Think some error is here 36:00 */********************************************************************************************************************* */
  // passport.authenticate("google", {
  //   scope: ["profile"],
  //   successRedirect: process.env.FRONTEND_URL,
  // })
  passport.authenticate("google"),
  (req, res, next) => {
    res.send("Logged In");
  }
);

router.get("/me", isAuthenticated, myProfile);

router.get("/logout", logout);

// Admin Routes
router.get("/admin/users", isAuthenticated, authorizeAdmin, getAdminUsers);

router.get("/admin/stats", isAuthenticated, authorizeAdmin, getAdminStats);

export default router;
