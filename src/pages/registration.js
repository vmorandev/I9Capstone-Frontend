import React from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as Image } from "../assets/Login.svg";
import Select from "react-dropdown-select";
import "./registration.css";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData) {
      // getItem can return actual value or null
      if (userData.password === data.password) {
        console.log(userData.name + " You Are Successfully Registered");
      } else {
        console.log("Email or Password is not matching with our record");
      }
    } else {
      console.log("Email or Password is not matching with our record");
    }
  };
  const options = [
    {
      value: 1,
      label: "Applicant",
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
  return (
    <div className="login">
      <Image />
      <div className="flex-container">
        <span className="adp-onboarding">ADP Onboarding</span>
        <span className="login-1">Registration</span>
        <div className="flex-container-1">
          <form className="App" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-container-2">
              <label>Select your role:</label>
              <Select
                options={options}
                placeholder="Select role"
                className="dropdown"
              />
              <label>First Name:</label>
              <input
                type="text"
                className="form-control mt-1"
                {...register("text", { required: true })}
                placeholder="Enter First Name"
              />
              {errors.text && (
                <span style={{ color: "red" }}>Field is mandatory </span>
              )}
              <label>Last Name:</label>
              <input
                type="text"
                className="form-control mt-1"
                {...register("text", { required: true })}
                placeholder="Enter Last Name"
              />
              {errors.text && (
                <span style={{ color: "red" }}>Field is mandatory </span>
              )}
              <label>Username:</label>
              <input
                type="text"
                className="form-control mt-1"
                {...register("text", { required: true })}
                placeholder="Enter Username"
              />
              {errors.text && (
                <span style={{ color: "red" }}>Field is mandatory </span>
              )}
              <label>Email Address:</label>
              <input
                type="email"
                className="form-control mt-1"
                {...register("email", { required: true })}
                placeholder="Enter email address"
              />
              {errors.email && (
                <span style={{ color: "red" }}>*Email* is mandatory </span>
              )}
              <label>Password:</label>
              <input
                type="password"
                className="form-control mt-1"
                {...register("password")}
                placeholder="Enter password"
              />
              <input
                type={"submit"}
                style={{ backgroundColor: "#2B368A" }}
                id="button"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default RegisterForm;
