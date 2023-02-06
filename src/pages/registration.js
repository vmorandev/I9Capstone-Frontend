<<<<<<< HEAD
import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
const vfirstName = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The first name must be between 3 and 20 characters.
      </div>
    );
  }
};
const vlastName = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The last name must be between 3 and 20 characters.
      </div>
    );
  }
};
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};
const Register = () => {
  const form = useRef();
  const checkBtn = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const onChangeFirstName = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };
  const onChangeLastName = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(firstName, lastName, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };
  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={firstName}
                  onChange={onChangeFirstName}
                  validations={[required, vfirstName]}
                />
              </div>
              <div className="form-group">
                <label htmlFor=" lastName">Last Name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={lastName}
                  onChange={onChangeLastName}
                  validations={[required, vlastName]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}
          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};
export default Register;
=======
import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as Image } from "../assets/Login.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./registration.css";

//const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';


// function RegisterForm() {
//   
const RegisterForm = () => {
    //getters & setters for field values
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false); //disables submit button while loading info. Sets load ing 
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const confirmPassword= useRef({});
  password.current = ("password", "");

  const onSubmit = async (data) => {
  
      const response = await axios.post(REGISTER_URL,
        JSON.stringify({ firstName, lastName, email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response))
    
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      
    } 
     
    
  
    
  return (
    <div className="register">
      <Image />
      <div className="flex-container">
        <span className="adp-onboarding">ADP Onboarding</span>
        <span className="login-1">Registration</span>
        <div className="flex-container-1">
          <form className="App" onSubmit={handleSubmit}>
            <div className="flex-container-2">
 {/* The applicant doesn't need to select a role when registering. -DB */}
              {/* <label>Select your role:</label>
              <Select
                options={options}
                placeholder="Select role"
                className="dropdown"
              /> */}
              <label>First Name:</label>
                 <input
                type="text"   name="firstName" value= {firstName} 
                //pass setFirstName method through onChange.  
                onChange= {(e) => setFirstName(e.target.value)}   //target.value = value from textfield
                className="form-control mt-1"
                {...register("text", { required: true })}
                placeholder="Enter First Name"
              />
              //if the field is empty
              {errors.firstName && (
                <span style={{ color: "red" }}>Field is mandatory </span>
              )}


              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="form-control mt-1"
                {...register("text", { required: true })}
                placeholder="Enter Last Name"
              />
              {errors.confirmPassword && (
                <span style={{ color: "red" }}>Field is mandatory </span>
              )}
{/* The applicant doesn't need to create a username. It will be auto-generated with their F/L names - DB */}
              {/* <label>Username:</label>
              <input
                type="text"
                name="username"
                value={username}
                className="form-control mt-1"
                {...register("text", { required: true })}
                placeholder="Enter Username"
              />
              {errors.text && (
                <span style={{ color: "red" }}>Field is mandatory </span>
              )} */}
              <label>Email Address:</label>
              <input
                type="email"
                name="email"
                value={email} 
                className="form-control mt-1"
                onChange={(e) => setEmail(e.target.value)}
                {...register("email", { required: true })}
                placeholder="Enter email address"
                
              />
              {errors.email && (
                <span style={{ color: "red" }}>*Email* is mandatory </span>
              )}
              <label >Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                className="form-control mt-1"
                onChange={(e) => setPassword(e.target.value)}
                {...register("password", { required: true,
                                           minLength: {
                                                  value: 8,
                                                  message: "Password must have at least 8 characters"}
                                                  })}
                placeholder="Enter password"
              />
              {errors.password && (
                              <span style={{ color: "red" }}>*Password* is mandatory </span>
                            )}
       {/* Added a Password confirmation field - DB */}
               <label>Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control mt-1"
                  value={confirmPassword}
                  {...register({ validate: value =>
                                 value === password.current || "The passwords do not match"})}
                  placeholder="Confirm password"
                  />
              {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}


                <button> <input
                      type={"submit"}
                      style={{ backgroundColor: "#2B368A" }}
                       id="button" onClick={(e) => saveOrUpdateEmployee(e)}
              /></button>
            </div>
          </form>
         
        </div>
        
      </div>
    </div>
  );
                  }                          
export default RegisterForm;
>>>>>>> a2d828929056973da7e6e1158031b83e9e119391
