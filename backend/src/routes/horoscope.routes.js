import express from "express";
import {
  upsertHoroscope,
  getAllHoroscopes,
  getHoroscope,
  getHoroscopeByType,
} from "../controllers/horoscope.controller.js";

//import verifyJWT, { authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// =======================
// 🌍 PUBLIC ROUTES
// =======================

// Get all horoscopes
router.get("/", getAllHoroscopes);

// Get specific horoscope (by query)
router.get("/search", getHoroscope);
router.get("/searchtype", getHoroscopeByType);

// =======================
// 🔐 ADMIN ROUTES (TEMPORARILY UNPROTECTED)
// =======================

// Create or update horoscope
router.post("/upsert", upsertHoroscope);

// Delete horoscope

export default router;
