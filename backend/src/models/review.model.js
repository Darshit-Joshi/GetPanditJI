import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    panditId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },

    review: {
      type: String,
      default: "",
      maxlength: 500,
    },
  },
  { timestamps: true },
);

// 🔥 prevent duplicate reviews
reviewSchema.index({ userId: 1, panditId: 1, bookingId: 1 }, { unique: true });

export default mongoose.model("Review", reviewSchema);
