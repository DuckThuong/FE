export const API_BASE_URL = "http://localhost:8080/api";

export const API_KEY = {
  USER: "users",
  IMAGE: "images",
};
export const QUERY_KEY = {
  GET_USER: `${API_BASE_URL}/${API_KEY.USER}`,
  GET_IMAGE: `${API_BASE_URL}/${API_KEY.IMAGE}`,
};
