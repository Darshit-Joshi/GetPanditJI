import express from "express";
import verifyJWT, { authorizeRoles } from "../middlewares/auth.middleware.js";

import {
  bookAppointment,
  getMyAppointments,
  getPanditAppointments,
  updateAppointmentStatus,
} from "../controllers/appointment.controller.js";

const router = express.Router();

// user
router.post("/book", verifyJWT, authorizeRoles("user"), bookAppointment);
router.get("/my", verifyJWT, authorizeRoles("user"), getMyAppointments);

// pandit
router.get(
  "/pandit",
  verifyJWT,
  authorizeRoles("pandit"),
  getPanditAppointments,
);
router.patch(
  "/:id/status",
  verifyJWT,
  authorizeRoles("pandit"),
  updateAppointmentStatus,
);

export default router;
