import mongoose from "mongoose";

const kundliSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    dateOfBirth: {
      type: Date,
      required: true,
    },

    timeOfBirth: {
      type: String,
      required: true,
    },

    placeOfBirth: {
      type: String,
      required: true,
    },

    latitude: Number,
    longitude: Number,

    planets: [
      {
        name: String,
        sign: String,
        house: Number,
      },
    ],

    houses: [String],
    ascendant: String,
  },
  { timestamps: true },
);

export default mongoose.model("Kundli", kundliSchema);
