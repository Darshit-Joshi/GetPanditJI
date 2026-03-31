import mongoose from "mongoose";

const horoscopeSchema = new mongoose.Schema(
  {
    zodiacSign: {
      type: String,
      required: true,
      lowercase: true,
      enum: [
        "aries",
        "taurus",
        "gemini",
        "cancer",
        "leo",
        "virgo",
        "libra",
        "scorpio",
        "sagittarius",
        "capricorn",
        "aquarius",
        "pisces",
      ],
    },

    // matches your frontend "category"
    category: {
      type: String,
      required: true,
      enum: ["daily", "monthly", "yearly"],
    },

    // optional but useful for daily/monthly/yearly tracking
    date: {
      type: Date,
      default: null,
    },

    // structured predictions matching your form
    predictions: {
      general: {
        type: String,
        required: true,
      },
      love: {
        type: String,
        required: true,
      },
      health: {
        type: String,
        required: true,
      },
      career: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true },
);

// prevent duplicate entry for same sign + category
horoscopeSchema.index({ zodiacSign: 1, category: 1 }, { unique: true });

export default mongoose.model("Horoscope", horoscopeSchema);
