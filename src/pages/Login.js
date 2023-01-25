import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { ReactComponent as Image } from "../assets/Login.svg";
/*import Select from "react-dropdown-select"; */
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { Container, Row } from "react-bootstrap";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    setLoading(true);

    const res = await axios.post("/api/login", data);
    const role = res.data.role;

    if (role === "employee") {
      navigate("/employee");
    } else if (role === "reviewer") {
      navigate("/reviewer");
    } else if (role === "manager") {
      navigate("/manager");
    } else if (role === "auditor") {
      navigate("/auditor");
    }

    if (userData) {
      // getItem can return actual value or null
      if (userData.password === data.password) {
        console.log(userData.name + " You Are Successfully Logged In");
      } else {
        console.log("Email or Password is not matching with our record");
      }
    } else {
      console.log("Email or Password is not matching with our record");
    }
  };

  /*
  const options = [
    {
      value: 1,
      label: "Employee",
    },
    {
      value: 2,
      label: "Reviewer",
    },
    {
      value: 3,
      label: "Manager",
    },
    {
      value: 4,
      label: "Auditor",
    },
  ];
  */

  return (
    <div className="login">
      <Image />
      <div className="flex-container">
        <span className="adp-onboarding">ADP Onboarding</span>
        <Container className="container-1">
          <span className="login-1">
            <Row className="sign-in">
              <h3 className="">
                <b>Sign In</b>
              </h3>
            </Row>
          </span>
          <div className="flex-container-1">
            <form className="App" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex-container-2">
                {/*<label>Select your role:</label>
              <Select
                options={options}
                placeholder="Select role"
                className="dropdown"
  />*/}
                <label>Email Address:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control mt-1"
                  {...register("email", { required: true })}
                  placeholder="Enter email address"
                />

                {errors.email && (
                  <span style={{ color: "red" }}>*Email* is mandatory </span>
                )}
                {/*Begins Password */}
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control mt-1"
                  {...register("password", { required: true })}
                  placeholder="Enter password"
                />
                {errors.password && (
                  <span style={{ color: "red" }}>*Password* is mandatory </span>
                )}
                {/*Submit Button */}
                <input
                  type={"submit"}
                  style={{ backgroundColor: "#2B368A" }}
                  id="button"
                  disabled={loading}
                />
              </div>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Login;
