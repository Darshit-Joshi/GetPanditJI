import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    panditId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // same User model (role = pandit)
      required: true,
    },

    type: {
      type: String,
      enum: ["chat", "call", "video"],
      required: true,
    },

    startTime: {
      type: Date,
      required: true,
    },

    endTime: {
      type: Date,
      required: true,
    },

    duration: {
      type: Number, // in minutes
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled", "rejected"],
      default: "pending",
    },

    price: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },

    notes: {
      type: String,
      default: "",
    },

    meetingLink: {
      type: String, // for video/call sessions
      default: "",
    },
  },
  { timestamps: true },
);

// 🔥 Prevent exact duplicate bookings (basic protection)
appointmentSchema.index({ panditId: 1, startTime: 1 }, { unique: true });

export default mongoose.model("Appointment", appointmentSchema);
