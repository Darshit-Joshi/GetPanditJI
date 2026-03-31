import { apiRequest } from "../utils/apiRequest";
export const getHoroscopeByType = (category) => {
  return apiRequest({
    method: "get",
    url: `/horoscope/searchtype?category=${category}`, // ✅ force it
  });
};
