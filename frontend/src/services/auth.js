import { apiRequest } from "../utils/apiRequest";

export const loginUser = (data) =>
  apiRequest({
    method: "post",
    url: "/auth/login",
    data,
  });

export const registerUser = (data) =>
  apiRequest({
    method: "post",
    url: "/auth/register",
    data,
  });

export const logoutUser = () =>
  apiRequest({
    method: "post",
    url: "/auth/logout",
  });

export const getProfile = () =>
  apiRequest({
    method: "get",
    url: "/auth/profile",
  });
