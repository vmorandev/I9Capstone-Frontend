import axios from "axios";

const Section1 = "http://localhost:8081/capstoneApi/auth/applicant/formI9/saveSection1";
const Section2 = "http://localhost:8081/capstoneApi/auth/applicant/formI9/saveSection2";

class I9Form_Service {
  //Section1
  getFirstName(firstName) {return axios.get(Section1); }
  getLastName(lastName) {return axios.get(Section1);}
  getMiddleName(middleName) {return axios.get(Section1);}
  getOtherNames(otherNames) { return axios.get(Section1); }
  getAddress(address) { return axios.get(Section1); }
  getAptNum(aptNum) { return axios.get(Section1); }
  getCity(city) { return axios.get(Section1); }
  getState(state) { return axios.get(Section1); }
  getZipCode(zipCode) { return axios.get(Section1); }
  getDOB(dob) { return axios.get(Section1); }
  getSSN(ssn) { return axios.get(Section1); }
  getEmail(email) { return axios.get(Section1); }
  getPhone(phone) { return axios.get(Section1); }
  getAttestationNum(attestationNum) { return axios.get(Section1); }
  getExpirationDate(expirationDate) { return axios.get(Section1); }
  getUscisNum(uscisNum) { return axios.get(Section1); }
  getFormI94_AdmissionNum(formI94_AdmissionNum) { return axios.get(Section1); }
  getEmployee_ESign(employee_ESign) { return axios.get(Section1); }
  getPreparer_lName(preparer_lName) { return axios.get(Section1); }
  getPreparer_fName(preparer_fName) { return axios.get(Section1); }
  getPreparer_Address(preparer_Address) { return axios.get(Section1); }
  getPreparer_City(preparer_City) { return axios.get(Section1); }
  getPreparer_State(preparer_State) { return axios.get(Section1); }
  getPreparer_Zip(preparer_Zip) { return axios.get(Section1); }

  //Section2
  


}

export default I9Form_Service;
