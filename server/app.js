import { urlencoded } from "express";
import express from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import cors from "cors";

const app = express();
export default app;
dotenv.config({
  path: "./config/config.env",
});

// Using Middlewares
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // /////////////////////////////.........................gp
    // cookie: { secure: true },

    cookie: {
      // secure: process.env.NODE_ENV === "development" ? false : true,
      // httpOnly: process.env.NODE_ENV === "development" ? false : true,
      // sameSite: process.env.NODE_ENV === "development" ? false : "none",
      secure: process.env.NODE_ENV === "production", // secure should be false in development
      httpOnly: true, // Always keep this true for security
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // 'lax' is fine for development, 'none' is needed for cross-site cookies
    },
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
////////////// for deployment
app.enable("trust proxy");
////////////////////////////////////////////
connectPassport();

// // Importing Routes
import userRoute from "./routes/user.js";
import orderRoute from "./routes/order.js";

app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);

// Using Error Middleware
app.use(errorMiddleware);
