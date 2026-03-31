import { apiRequest } from "../utils/apiRequest";

/**
 * ✅ Create or Update Horoscope (UPSERT)
 * POST /horoscope/upsert
 */
export const upsertHoroscope = (data) => {
  return apiRequest({
    method: "post",
    url: "/horoscope/upsert",
    data,
  });
};

/**
 * ✅ Get all horoscopes
 * GET /horoscope/all
 */
export const getAllHoroscopes = () => {
  return apiRequest({
    method: "get",
    url: "/horoscope/all",
  });
};

/**
 * ✅ Get horoscope by zodiacSign + category
 * GET /horoscope?zodiacSign=aries&category=daily
 */
export const getHoroscope = ({ zodiacSign, category }) => {
  return apiRequest({
    method: "get",
    url: "/horoscope",
    params: {
      zodiacSign,
      category,
    },
  });
};
