import axios from "axios";
const API_URL = "http://localhost:8082/capstoneApi/Login";

const registration = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};
const login = async (username, password, role) => {
  const response = await axios.post(API_URL + "login", {
    username,
    password,
    role,
  });
  if (response.data.username) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const logout = async () => {
  localStorage.removeItem("user");
  const response = await axios.post(API_URL + "signout");
  return response.data;
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const LoginService = {
  registration,
  login,
  logout,
  getCurrentUser,
};

export default LoginService;
