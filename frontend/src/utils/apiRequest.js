import api from "./api";

export const apiRequest = async ({ method = "get", url, data, params }) => {
  try {
    const res = await api({
      method,
      url,
      data,
      params,
    });

    return res.data;
  } catch (error) {
    // normalize error
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Something went wrong";

    console.log(message);
  }
};
