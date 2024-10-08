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
/////////////////////////////////////////////////
// router.get(
//   "/login",
//   ///////////////*** I Think some error is here 36:00 /**************************************** */
//   // passport.authenticate("google", {
//   //   successRedirect: process.env.FRONTEND_URL,
//   // })
//   passport.authenticate("google"),
//   (req, res, next) => {
//     res.send("Logged In");
//   }
// );
////////////////////////////////////
router.get(
  "/login",
  passport.authenticate("google", { failureRedirect: "/login/failure" }),
  (req, res) => {
    // Redirect to the frontend after successful login
    res.redirect(process.env.FRONTEND_URL);
  }
);

/////////////////////////////////////////////
router.get("/me", isAuthenticated, myProfile);

router.get("/logout", logout);

// Admin Routes
router.get("/admin/users", isAuthenticated, authorizeAdmin, getAdminUsers);

router.get("/admin/stats", isAuthenticated, authorizeAdmin, getAdminStats);

export default router;
