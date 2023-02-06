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
