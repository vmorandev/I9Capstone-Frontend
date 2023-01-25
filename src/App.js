import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Auth from "./components/Auth";
import EmployeeDashboard from "./EmployeeDashboardPage/employeeDashboard";
import ReviewerDashboard from "./reviewerDashboardPage/reviewerDashboard";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import AuditorDashboard from "./AuditorDashboardPage/auditorDashboard";
import ManagerDashboard from "./ManagerDashboardPage/managerDashboard";
import Login from "./pages/Login";
import I9Form from "./EmployeeDashboardPage/I9Form";
import UploadComponent from "./components/uploadComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/list" element={<ListEmployeeComponent />}></Route>
          <Route path="/add-employee" element={<AddEmployeeComponent />} />
          <Route path="/edit-employee/:id" element={<AddEmployeeComponent />} />
          <Route path="/auditor" element={<AuditorDashboard />} />
          <Route path="/manager" element={<ManagerDashboard />} />
          <Route path="/reviewer" element={<ReviewerDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/i9form" element={<I9Form />} />
          <Route path="/upload" element={<UploadComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
