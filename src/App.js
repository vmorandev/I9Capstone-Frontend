import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Auth from "./components/Auth";
import EmployeeDashboard from "./pages/employeeDashboard";
import ReviewerDashboard from "./pages/reviewerDashboard";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import Login from "./pages/Login";

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
          <Route path="/auditor" element={<auditorDashboard />} />
          <Route path="/manager" element={<managerDashboard />} />
          <Route path="/reviewer" element={<ReviewerDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
