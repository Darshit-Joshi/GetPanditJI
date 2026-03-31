import express from "express";
import verifyJWT, { authorizeRoles } from "../middlewares/auth.middleware.js";

import {
  getAllUsers,
  getAllPandits,
  getAllAppointments,
  deleteUser,
} from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/users", verifyJWT, authorizeRoles("admin"), getAllUsers);

router.get("/pandits", verifyJWT, authorizeRoles("admin"), getAllPandits);

router.get(
  "/appointments",
  verifyJWT,
  authorizeRoles("admin"),
  getAllAppointments,
);

router.delete("/user/:id", verifyJWT, authorizeRoles("admin"), deleteUser);

export default router;
