// ur axios related configurations and api calls detailing will be added here.
import axios from "axios";

const API = axios.create({
  timeout: 4000, // 4 seconds time limit to wait for the
  // response from the server.
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
}); // it will give u the new instance of axios with some common settings / configurations
// one time activity.
API.interceptors.request.use(
  // add the token to header called x-auth-token
  (config) => {
    const NO_AUTH_URLS = ["/auth", "/users"];
    // token should not be added for login and register.
    if (NO_AUTH_URLS.some((url) => config.url?.toLowerCase().startsWith(url))) {
      return config;
    }
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    return config;
  }
);
export default API;
// no need to provide the complete url in ur api calls`
// /api : not required
// /api : i have added as a baseURL.
// /api/users/ someting.
// /api/v2/ sfdsa fds

// service ==> axios instance--> get /post/put/delete===> it will use configurations (timeout (4000ms) , baseURL ("/api") )==> it will go for the network call there ur proxy will be applied ==> this would be done internally by axios
//
