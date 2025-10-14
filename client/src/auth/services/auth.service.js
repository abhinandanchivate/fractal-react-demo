import API from "../../utils/api";

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
