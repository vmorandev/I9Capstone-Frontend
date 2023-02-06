import axios from "axios";

const REPORT_BASE_REST_API_URL = process.env.REACT_APP_REST_API_URL || ""

class AuditorLogService {
    getAllUser() {
        return axios.get(REPORT_BASE_REST_API_URL);
    }

    createUser(User) {
        return axios.post(REPORT_BASE_REST_API_URL, User);
    }

    getSection1(Section1) {
        return axios.get(REPORT_BASE_REST_API_URL + "/" + Section1);
    }

    updateSection1(Section1) {
        return axios.put(REPORT_BASE_REST_API_URL + "/" + Section1);
    }

    deleteEmployee(Section1) {
        return axios.delete(REPORT_BASE_REST_API_URL + "/" + Section1);
    }
}

export default new AuditorLogService();
