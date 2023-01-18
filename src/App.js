import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Auth from "./components/Auth";
import employeeDashboard from "./pages/employeeDashboard";
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
          <Route
            path="/add-employee"
            element={<AddEmployeeComponent />}
          ></Route>
          <Route
            path="/edit-employee/:id"
            element={<AddEmployeeComponent />}
          ></Route>
          <Route path="/auditor" element={<auditorDashboard />} />
          <Route path="/manager" element={<managerDashboard />} />
          <Route path="/reviewer" element={<reviewerDashboard />} />
          <Route path="/employee" element={<employeeDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
