const { default: axios } = require("axios");

const BASE_URL = "https://fakestoreapi.com";

const api = axios.create({ baseUrl: "https://fakestoreapi.com/" });

api.interceptors.request.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);
