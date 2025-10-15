import API from "../../utils/api";

// load user details
export const loadUser = async () => {
  try {
    // URL: http://localhost:9500/api/auth/user
    // method: GET
    // headers: {x-auth-token: token}
    // response(success): {user details}
    // response(failure): {error validational details}
    const response = await API.get("/auth");
    // below return is ur success response
    console.log(response);
    localStorage.setItem("token", response.data.token);
    return { data: response.data, status: response.status };
  } catch (error) {}
};

export const loginUser = async (userData) => {
  try {
    // URL: http://localhost:9500/api/auth
    // method: POST
    // body: userData
    // response(success): {token}
    // response(failure): {error validational details}
    const response = await API.post("/auth", userData);
    // below return is ur success response
    console.log(response);
    return { data: response.data, status: response.status };
  } catch (error) {}
};
// registerUser - Registers a new user with the provided user data
export const registerUser = async (userData) => {
  try {
    // URL: http://localhost:9500/api/users
    // method: POST
    // body: userData
    // response(success): {token}
    // response(failure): {error validational details}
    const response = await API.post("/users", userData);
    // below return is ur success response
    console.log(response);
    return { data: response.data, status: response.status };
  } catch (error) {}
};
