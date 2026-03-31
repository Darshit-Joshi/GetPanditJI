import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/user.routes.js";
import router from "./routes/horoscope.routes.js";
dotenv.config();

const app = express();

// 🔐 CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  }),
);

// 🍪 Cookies
app.use(cookieParser());

// 📦 Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
  });
});

// 🔥 Routes
app.use("/api/auth", authRoutes);

app.use("/api/horoscope", router);

// ❌ Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export { app };
