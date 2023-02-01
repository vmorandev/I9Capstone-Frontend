import axios from "axios";

const Register = "http://localhost:8081/capstoneApi/registration";

class RegistrationService {
  getRole(role) {
    return axios.get(Register);
  }
  getFirstName(firstname) {
    return axios.get(Register);
  }

  getLastName(lastname) {
    return axios.get(Register);
  }
  getUserName(username) {
    return axios.get(Register);
  }
  getEmail(email) {
    return axios.get(Register);
  }
  getPassword(password) {
    return axios.get(Register); 
  }
}

export default RegistrationService;
