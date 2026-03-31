import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password -refreshToken");

    res.status(200).json({
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllPandits = async (req, res) => {
  try {
    const pandits = await User.find({ role: "pandit" }).select(
      "-password -refreshToken",
    );

    res.status(200).json({
      pandits,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

import Appointment from "../models/appointment.model.js";

export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("userId", "name email")
      .populate("panditId", "name email");

    res.status(200).json({
      appointments,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    res.status(200).json({
      message: "User deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
