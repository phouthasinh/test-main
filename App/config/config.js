import axios from "axios";
import join from "url-join";
export const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

var url = "https://6107cc2ed73c6400170d3605.mockapi.io/";
axios.interceptors.request.use(
  (config) => {
    config.headers.genericKey = "xxxTestByTonoxxx";
    config.url = join(url, config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export const httpClient = axios;
