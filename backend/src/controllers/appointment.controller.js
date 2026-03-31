import Appointment from "../models/appointment.model.js";
import User from "../models/user.model.js";

// 🔹 1. Book Appointment (USER)
export const bookAppointment = async (req, res) => {
  try {
    const { panditId, type, startTime, endTime, price, notes } = req.body;

    // basic validation
    if (!panditId || !type || !startTime || !endTime || !price) {
      return res.status(400).json({
        message: "All required fields missing",
      });
    }

    // check pandit exists
    const pandit = await User.findById(panditId);

    if (!pandit || pandit.role !== "pandit") {
      return res.status(400).json({
        message: "Invalid pandit",
      });
    }

    // 🔥 Prevent overlapping booking (IMPORTANT)
    const conflict = await Appointment.findOne({
      panditId,
      $or: [
        {
          startTime: { $lt: endTime },
          endTime: { $gt: startTime },
        },
      ],
    });

    if (conflict) {
      return res.status(400).json({
        message: "Time slot not available",
      });
    }

    // duration calculation
    const duration = (new Date(endTime) - new Date(startTime)) / (1000 * 60);

    const booking = await Appointment.create({
      userId: req.user._id,
      panditId,
      type,
      startTime,
      endTime,
      duration,
      price,
      notes,
    });

    return res.status(201).json({
      message: "Appointment booked successfully",
      booking,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// 🔹 2. Get My Appointments (USER)
export const getMyAppointments = async (req, res) => {
  try {
    const bookings = await Appointment.find({ userId: req.user._id }).populate(
      "panditId",
      "name email",
    );

    return res.status(200).json({
      bookings,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// 🔹 3. Get Pandit Appointments (PANDIT)
export const getPanditAppointments = async (req, res) => {
  try {
    if (req.user.role !== "pandit") {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    const bookings = await Appointment.find({
      panditId: req.user._id,
    }).populate("userId", "name email");

    return res.status(200).json({
      bookings,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// 🔹 4. Update Appointment Status (PANDIT)
export const updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    const booking = await Appointment.findById(id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    // only assigned pandit can update
    if (booking.panditId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    booking.status = status;

    await booking.save();

    return res.status(200).json({
      message: "Status updated",
      booking,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
