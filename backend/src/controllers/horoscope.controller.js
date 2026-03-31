import Horoscope from "../models/Horoscope.model.js";

/**
 * ✅ Create or Update Horoscope (UPSERT)
 */
export const upsertHoroscope = async (req, res) => {
  try {
    const { zodiacSign, category, predictions, date } = req.body;

    if (!zodiacSign || !category || !predictions) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const { general, love, career, health } = predictions;

    if (!general || !love || !career || !health) {
      return res.status(400).json({
        message: "All prediction fields are required",
      });
    }

    const horoscope = await Horoscope.findOneAndUpdate(
      { zodiacSign, category }, // match
      {
        zodiacSign,
        category,
        predictions: {
          general,
          love,
          career,
          health,
        },
        date: date || null,
      },
      {
        returnDocument: "after",
        upsert: true,
        runValidators: true,
      },
    );

    res.status(200).json(horoscope);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * ✅ Get all horoscopes
 */
export const getAllHoroscopes = async (req, res) => {
  try {
    const data = await Horoscope.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * ✅ Get horoscope by sign + category
 */
export const getHoroscope = async (req, res) => {
  try {
    const { zodiacSign, category } = req.query;

    if (!zodiacSign || !category) {
      return res.status(400).json({
        message: "zodiacSign and category required",
      });
    }

    const data = await Horoscope.findOne({
      zodiacSign: zodiacSign.toLowerCase(),
      category,
    });

    if (!data) {
      return res.status(404).json({
        message: "Horoscope not found",
      });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getHoroscopeByType = async (req, res) => {
  try {
    const { category } = req.query; // ✅ extract properly

    if (!category) {
      return res.status(400).json({
        message: "Type is required",
      });
    }

    const data = await Horoscope.find({
      category, // ✅ correct mapping
    });

    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Horoscope not found",
      });
    }

    res.json(data); // ✅ return array
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
