import axios from "axios";

import showNotification from "./services/NotificationService";
import { getToken } from "./session";

// create a instance of axios with a custom config



export const http = axios.create({
  baseURL:"https://cr-code.credencerewards.com/sunrise/proxy"
});

// Add a request interceptor

http.interceptors.request.use(
  function (config) {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor

http.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    
    showNotification("danger", error.response.data.message);
    if (error.response.status === 403) {
      showNotification("danger", error.response.data.message);

      localStorage.clear();
      sessionStorage.clear();
    }
    if (error.response.status == 400) {
        showNotification("danger", error.response.data.msg);
      }
    if (error.response) {
      if (401 === error.status) {
        showNotification("danger", error.response.data.message);
        localStorage.clear();
      } else {
        return Promise.reject(error);
      }
    }
  }
);
