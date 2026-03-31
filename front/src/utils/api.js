import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;

    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;

      try {
        // ✅ correct endpoint
        const res = await api.post("/user/refresh");

        // If backend returns new access token
        const newAccessToken = res.data?.accessToken;

        if (newAccessToken) {
          localStorage.setItem("accessToken", newAccessToken);
        }

        return api(original);
      } catch (err) {
        console.error("Session expired");

        // optional: logout user
        localStorage.removeItem("accessToken");

        return Promise.reject(err);
      }
    }

    return Promise.reject(error.response?.data || error);
  },
);

export default api;
