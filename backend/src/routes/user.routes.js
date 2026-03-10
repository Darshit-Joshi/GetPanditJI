import express from "express";
import { LoginUser, RegisterUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/login", LoginUser);
router.post("/register", RegisterUser);

export default router;
