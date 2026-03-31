import User from "../models/user.model.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
// Generate Access + Refresh Token
const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.log("Token error", error.message);
    throw new Error("Token generation failed");
  }
};

// REGISTER USER
export const RegisterUser = async (req, res) => {
  try {
    let { name, mobile, email, password, role } = req.body;

    if (![name, mobile, email, password].every((field) => field?.trim())) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    email = email.toLowerCase();
    const existingUser = await User.findOne({
      $or: [{ email }, { mobile }],
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      mobile,
      email,
      password,
      role: role || "user",
    });

    return res.status(201).json({
      message: "User successfully registered",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// User PROFILE
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select(
      "-password -refreshToken",
    );

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// LOGIN USER
export const LoginUser = async (req, res) => {
  try {
    let { mobile, email, password } = req.body;
    email = email.toLowerCase();

    if (!password || (!email && !mobile)) {
      return res.status(400).json({
        message: "Email/mobile and password required",
      });
    }

    const user = await User.findOne({
      $or: [{ email }, { mobile }],
    });

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      user._id,
    );

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        message: "Login successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          mobile: user.mobile,
        },
      });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//LOGOUT USER
export const LogoutUser = async (req, res) => {
  try {
    const incomingRefreshToken = req.cookies?.refreshToken;

    if (!incomingRefreshToken) {
      return res.status(400).json({
        message: "No refresh token provided",
      });
    }

    let decoded;

    try {
      decoded = jwt.verify(
        incomingRefreshToken,
        process.env.REFRESH_TOKEN_SECRET,
      );
    } catch (err) {
      return res.status(401).json({
        message: "Invalid or expired refresh token",
      });
    }

    const user = await User.findById(decoded._id);

    if (!user || user.refreshToken !== incomingRefreshToken) {
      return res.status(401).json({
        message: "User not found or token mismatch",
      });
    }

    // Clear token from DB
    user.refreshToken = null;
    await user.save({ validateBeforeSave: false });

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    };

    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json({ message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const refreshAccessToken = async (req, res) => {
  try {
    const incomingRefreshToken =
      req.cookies?.refreshToken || req.body.refreshToken;

    if (!incomingRefreshToken) {
      return res.status(401).json({
        message: "Refresh token required",
      });
    }

    let decoded;

    try {
      decoded = jwt.verify(
        incomingRefreshToken,
        process.env.REFRESH_TOKEN_SECRET,
      );
    } catch (error) {
      return res.status(401).json({
        message: "Invalid or expired refresh token",
      });
    }

    const user = await User.findById(decoded._id);

    if (!user || user.refreshToken !== incomingRefreshToken) {
      return res.status(401).json({
        message: "Refresh token mismatch",
      });
    }

    // 🔥 Generate new tokens (rotation)
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      user._id,
    );

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        message: "Token refreshed successfully",
        accessToken, // optional if you rely only on cookies
      });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
