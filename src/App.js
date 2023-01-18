import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "./components/Auth";
import employeeDashboard from "./pages/employeeDashboard";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <h1>I-9 Capstone</h1>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route exact path="/" component={ListEmployeeComponent}></Route>
          <Route path="/employees" component={ListEmployeeComponent}></Route>
          <Route path="/add-employee" component={AddEmployeeComponent}></Route>
          <Route
            path="/edit-employee/:id"
            component={AddEmployeeComponent}
          ></Route>
          <Route path="/auditor" element={<auditorDashboard />} />
          <Route path="/manager" element={<managerDashboard />} />
          <Route path="/reviewer" element={<reviewerDashboard />} />
          <Route path="/employee" element={employeeDashboard} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
