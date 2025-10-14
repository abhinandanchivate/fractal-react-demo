// ur axios related configurations and api calls detailing will be added here.
import axios from "axios";

const API = axios.create({
  timeout: 4000, // 4 seconds time limit to wait for the
  // response from the server.
  baseURL: "/api",
}); // it will give u the new instance of axios with some common settings / configurations
// one time activity.
export default API;
// no need to provide the complete url in ur api calls`
// /api : not required
// /api : i have added as a baseURL.
// /api/users/ someting.
// /api/v2/ sfdsa fds

// service ==> axios instance--> get /post/put/delete===> it will use configurations (timeout (4000ms) , baseURL ("/api") )==> it will go for the network call there ur proxy will be applied ==> this would be done internally by axios
//
