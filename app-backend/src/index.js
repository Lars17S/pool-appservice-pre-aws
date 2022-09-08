import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import cookieSession from "cookie-session";
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";
import serviceRouter from "./routes/service.js";
import stripeRouter from "./routes/stripe.js";
import localStrategy from "./passport/passport.js";
// import orderRouter from "./routes/order";

dotenv.config();

const app = express();

const port = process.env.EXPRESS_PORT || "5000";
const mongooseurl = process.env.MONGO_URL;

mongoose
  .connect(mongooseurl)
  .then(() => console.log("DB Connection Successful!"));

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use(
  cors({
    origin: [
      `http://localhost:${process.env.REACT_APP_STORE_PORT || "3000"}`,
      `http://localhost:${process.env.REACT_APP_ADMIN_PORT || "3002"}`,
    ],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

localStrategy(passport);
app.use(
  cookieSession({ name: "session", keys: ["lars"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/services", serviceRouter);
// app.use("/orders", orderRouter);
app.use("/checkout", stripeRouter);

app.listen(port, () => {
  let listApp = `App listening on port ${port}! (http://localhost:${port})`;
  return console.log(listApp);
});
