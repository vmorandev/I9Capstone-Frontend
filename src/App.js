import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Auth from "./components/Auth";
import EmployerDashboard from "./pages/employerDashboard";
import EmployerForms from "./pages/EmployerForms";
import EmpActivityLog from "./pages/EmployerActivity";
import EmployerSearchbar from "./components/empSearchbar";
import EmployeeDashboard from "./pages/employeeDashboard";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import RegistrationForm from "./pages/registration";
import DashboardTemplate from "./pages/dashBoard";
import AuditorEmployeeView from "./pages/auditorEmployee";
import AuditorReviewer from "./pages/auditorReviewer";
import AuditorManager from "./pages/auditorManager";
import SearchBar from "./components/SearchBar";
import CalendarComp from "./components/calendar";
import I9Form from "./pages/I9Form";
import AuditorDashboard from "./pages/auditorDashboard";
import Link from "./components/Link";
import ProgressGraph from "./components/ProgressGraph";
import DeadLine from "./components/DateSelect";

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
          <Route path="/template" element={<DashboardTemplate />} />
          <Route path="/auditorEmployee" element={<AuditorEmployeeView />} />
          <Route path="/auditorReviewer" element={<AuditorReviewer />} />
          <Route path="/auditorManager" element={<AuditorManager />} />
          <Route path="/auditor" element={<AuditorDashboard />} />
          <Route path="/employerdashboard" element={<EmployerDashboard />} />
          <Route path="/empactivitylog" element={<EmpActivityLog />} />
          <Route path="/employersearchbar" element={<EmployerSearchbar />} />
          <Route path="/employerforms" element={<EmployerForms />} />
          <Route path="/reviewer" element={<reviewerDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/calendar" element={<CalendarComp />} />
          <Route path="/i9form" element={<I9Form />} />
          <Route path="/link" element={<Link />} />
          <Route path="/progress" element={<ProgressGraph />} />
          <Route path="/deadline" element={<DeadLine />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
