<<<<<<< HEAD
import http from "../https-common.js";

// axios.post(
//   "https://localhost:8083/capstoneApi/auth/applicant/formI9/saveSection1",
//   values
// );
class Sect1Services {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/capstoneApi/formI9/document/uploadFile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles(file) {
    return http.get("/capstoneApi/formI9/document/downloadFile/", file);
  }
}

export default Sect1Services;
=======
import axios from "axios";

const Section1 = "http://localhost:8081/capstoneApi/auth/applicant/formI9/saveSection1";
const Section2 = "http://localhost:8081/capstoneApi/auth/applicant/formI9/saveSection2";

class I9Form_Service {
  //Section1

  completeSection1(section1_Request) {
    return axios.get(Section1, section1_Request);
  }
    //Section2
    completeSection2(section2_Request) {
      return axios.get(Section2, section2_Request);
  }
}
export default I9Form_Service;
>>>>>>> a2d828929056973da7e6e1158031b83e9e119391
