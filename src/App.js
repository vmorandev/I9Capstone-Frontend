import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Auth from "./components/Auth";
import EmployerDashboard from "./pages/employerDashboard";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import RegistrationForm from "./components/registration";
import AuditorDashboard from "./pages/auditorDashboard";
import ActivityLog from "./pages/activityLog";
import AuditorEmployeeView from "./pages/auditorEmployee";
import AuditorReviewer from "./pages/auditorReviewer";
import AuditorManager from "./pages/auditorManager";
import SearchBar from "./components/SearchBar";
//import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/list" element={<ListEmployeeComponent />}></Route>
          <Route
            path="/add-employee"
            element={<AddEmployeeComponent />}
          ></Route>
          <Route
            path="/edit-employee/:id"
            element={<AddEmployeeComponent />}
          ></Route>
          <Route path="/searchbar" element={<SearchBar />} />
          <Route path="/auditor" element={<AuditorDashboard />} />
          <Route path="/auditorEmployee" element={<AuditorEmployeeView />} />
          <Route path="/auditorReviewer" element={<AuditorReviewer />} />
          <Route path="/auditorManager" element={<AuditorManager />} />
          <Route path="/activityLog" element={<ActivityLog />} />
          <Route path="/employerdashboard" element={<EmployerDashboard />} />
          <Route path="/reviewer" element={<reviewerDashboard />} />
          <Route path="/employee" element={<employeeDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
