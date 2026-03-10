import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import router from "./routes/user.routes.js";

const app = express();
app.set("trust proxy", 1);
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
  });
});

app.use("/api/user", router);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export { app };
