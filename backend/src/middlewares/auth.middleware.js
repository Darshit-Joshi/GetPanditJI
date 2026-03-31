import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const verifyJWT = async (req, res, next) => {
  try {
    let token;

    // from cookies
    if (req.cookies?.accessToken) {
      token = req.cookies.accessToken;
    }
    // from header
    else if (req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized: Token missing",
      });
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decoded._id).select(
      "-password -refreshToken",
    );

    if (!user) {
      return res.status(401).json({
        message: "Unauthorized: User not found",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized: " + error.message,
    });
  }
};

// 🔥 Role-based access
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Forbidden: Access denied",
      });
    }
    next();
  };
};

export default verifyJWT;
