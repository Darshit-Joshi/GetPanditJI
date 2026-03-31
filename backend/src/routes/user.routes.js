import express from "express";
import {
  RegisterUser,
  LoginUser,
  LogoutUser,
  refreshAccessToken,
  getProfile,
} from "../controllers/auth.controller.js";

import verifyJWT, { authorizeRoles } from "../middlewares/auth.middleware.js";

const authRoutes = express.Router();

// 🔓 Public routes
authRoutes.post("/register", RegisterUser);
authRoutes.post("/login", LoginUser);
authRoutes.post("/refresh", refreshAccessToken);

// 🔐 Protected routes
authRoutes.get("/profile", verifyJWT, getProfile);
authRoutes.post("/logout", verifyJWT, LogoutUser);

// 🔥 Example role-based route (for future use)
// router.get("/admin", verifyJWT, authorizeRoles("admin"), (req, res) => {
//   res.json({ message: "Welcome Admin" });
// });

export default authRoutes;
