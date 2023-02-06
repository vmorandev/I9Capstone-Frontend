import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getFirstName = () => {
  return axios.get(API_URL + "all");
};

const getLastName = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getUserRole = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const UserService = {
  getFirstName,
  getLastName,
  getUserRole,
};

export default UserService;
