import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import EmployeeDashboard from "./EmployeeDashboardPage/employeeDashboard";
import ReviewerDashboard from "./reviewerDashboardPage/reviewerDashboard";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import AuditorDashboard from "./AuditorDashboardPage/auditorDashboard";
import ManagerDashboard from "./ManagerDashboardPage/managerDashboard";
import Login from "./pages/Login";
import I9Form from "./EmployeeDashboardPage/I9Form_Section1";
import I9Form_Section2 from "./EmployeeDashboardPage/I9Form_Section2";
import UploadComponent from "./components/uploadComponent";
import RegisterForm from "./pages/registration";
// import RegistrationTrouble from "./pages/registrationTrouble";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />

          <Route path="/registerOriginal" element={<RegisterForm />}/>

          <Route path="/list" element={<ListEmployeeComponent />} />
          <Route path="/add-employee" element={<AddEmployeeComponent />} />
          <Route path="/edit-employee/:id" element={<AddEmployeeComponent />} />
          <Route path="/auditor" element={<AuditorDashboard />} />
          <Route path="/manager" element={<ManagerDashboard />} />
          <Route path="/reviewer" element={<ReviewerDashboard />}/>
          <Route path="/employee" element={<EmployeeDashboard />}/>
          <Route path="/i9form" element={<I9Form />}/>
          <Route path="/saveSection2" element={<I9Form_Section2/>}/>
          <Route path="/upload" element={<UploadComponent />} />
          {/* <Route path= "/register" element= {<RegistrationTrouble/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
