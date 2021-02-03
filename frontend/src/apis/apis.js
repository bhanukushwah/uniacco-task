import axios from "./axios";

// Register
export const registerUser = async (userDetails) => {
  try {
    const data = await axios.post("/register/", userDetails);
    return data;
  } catch (err) {
    throw err.response.data;
  }
};

// Login
export const loginUser = async (userDetails) => {
  try {
    const data = await axios.post("/login/", userDetails);
    console.log(data);
    return data;
  } catch (err) {
    throw err.response.data;
  }
};
