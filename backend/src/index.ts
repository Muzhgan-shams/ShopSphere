/** Entry point */
import express from "express";
import cors from "cors";
import { ENV } from "./config/env";
import { clerkMiddleware } from "@clerk/express";

const app = express();
const port = ENV.PORT;

/** Middlewares */
app.use(cors({ origin: ENV.FRONTEND_URL })); // Enables CORS for all routes
app.use(clerkMiddleware()); // Integrates Clerk authentication middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses form data

//** Routes */
app.get("/", (req, res) => {
  res.json({ success: true, message: "Welcome to ShopSphere API!" });
});

//** Start the server */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
