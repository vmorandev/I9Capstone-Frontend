import axios from "axios";

const LOGIN_API_REST_URL = "http://localhost:8080/books";

class APIService {
  getUsername(username) {
    return axios.get(LOGIN_API_REST_URL);
  }

  getPassword(password) {
    return axios.get(LOGIN_API_REST_URL);
  }
}

export default new APIService();
