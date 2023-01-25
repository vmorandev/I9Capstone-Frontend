import axios from "axios";

const Login = "http://localhost:8080/capstone/api/auth";

class LoginService {
  getUsername(username) {
    return axios.get(Login);
  }

  getPassword(password) {
    return axios.get(Login);
  }

  getRole(role) {
    return axios.get(Login);
  }
}

export default LoginService;
