import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import EmployeeDashboard from "./EmployeeDashboardPage/employeeDashboard";
import ReviewerDashboard from "./reviewerDashboardPage/reviewerDashboard";
import ReviewerDashboard2 from "./reviewerDashboardPage/reviewerDashboard2";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import AuditorDashboard from "./AuditorDashboardPage/auditorDashboard";
import ManagerDashboard from "./ManagerDashboardPage/managerDashboard";
import Login from "./pages/Login.js";
import I9FormSection1 from "./EmployeeDashboardPage/I9FormSection1";
import UploadComponent from "./components/uploadComponent";
import RegisterForm from "./pages/registration";
import UploadFiles from "./components/FileUploader";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/list" element={<ListEmployeeComponent />}></Route>
          <Route path="/add-employee" element={<AddEmployeeComponent />} />
          <Route path="/edit-employee/:id" element={<AddEmployeeComponent />} />
          <Route path="/auditor" element={<AuditorDashboard />} />
          <Route path="/manager" element={<ManagerDashboard />} />
          <Route path="/reviewer" element={<ReviewerDashboard />} />
          <Route path="/reviewer2" element={<ReviewerDashboard2 />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/i9form" element={<I9FormSection1 />} />
          <Route path="/upload" element={<UploadComponent />} />
          <Route path="/uploads" element={<UploadFiles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
