import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
//import CheckButton from "react-validation/build/button";
//import LoginService from "../services/LoginServices.js";
import { Container, Row } from "react-bootstrap";

import { ReactComponent as Image } from "../assets/Login.svg";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = () => {
  //method to handle the validation of the Form
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  //const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

<<<<<<< HEAD
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeRole = (e) => {
    const role = e.target.value;
    setRole(role);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    //setMessage("");
=======
  const onSubmit = async (data) => {
    const userData = JSON.parse(localStorage.getItem(data.username));
    // Till the data is fetch using API
    // the Loading page will show.
>>>>>>> a2d828929056973da7e6e1158031b83e9e119391
    setLoading(true);

    //form.current.validateAll();

    //if (checkBtn.current.context._errors.lenth === 0) {
    // LoginService.login(username, password, role).then(
    //   () => {
    localStorage.setItem("user", JSON.stringify({ user: username, role }));

    if (role === "applicant") {
      navigate("/employee");
    } else if (role === "reviewer") {
      navigate("/reviewer");
    } else if (role === "manager") {
      navigate("/manager");
    } else if (role === "auditor") {
      navigate("/auditor");
    }

    // (error) => {
    //   const resMessage =
    //     (error.response &&
    //       error.response.data &&
    //       error.response.data.message) ||
    //     error.message ||
    //     error.toString();

    //   setLoading(false);
    //   setMessage(resMessage);
    // }
    else {
      setLoading(false);
    }
  };

  //method to handle response from the server after the login request is made.
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   //setError("");
  //   try {
  //     const res = await axios.post(
  //       "https://localhost:8082/capstoneApi/login",
  //       data
  //     );
  //     //const { role } = res.data.role;
  //     localStorage.setItem(
  //       "user",
  //       JSON.stringify({ username: username, role })
  //     );

  //     if (role === "applicant") {
  //       navigate("/employee");
  //     } else if (role === "reviewer") {
  //       navigate("/reviewer");
  //     } else if (role === "manager") {
  //       navigate("/manager");
  //     } else if (role === "auditor") {
  //       navigate("/auditor");
  //     }
  //   } catch (error) {
  //     if (username && password && role !== data) {
  //       const [error] = "Username and/or Password are invalid!";
  //       console.error(error);
  //     }

  //     //setError(error.res.data);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  /* useEffect(() => {
      const username = localStorage.getItem("username");
      const role = localStorage.getItem("role");
      if (username && role) {
        if (role === "employee") {
          navigate("/employee");
        } else if (role === "reviewer") {
          navigate("/reviewer");
        } else if (role === "manager") {
          navigate("/manager");
        } else if (role === "auditor") {
          navigate("/auditor");
        }
      }
    }, []);*/
  //checks to see if user has already logged in. if yes, then user will be redirected to appropriate page.
  return (
    <div className="login">
      <Image />
      <div className="flex-container">
        <span className="adp-onboarding">ADP Onboarding</span>
        <Container className="">
          <Row className="sign-in">
            <h3>
              <strong>Sign In</strong>
            </h3>
          </Row>
          <div className="flex-container-1">
            <form className="App" onSubmit={handleLogin} ref={form}>
              <div className="flex-container-2 form-group">
                <label>Username:</label>
                <input
                  type="text"
                  name="username"
                  className="form-control mt-1"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required]}
                />

                {/*Begins Password */}
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control mt-1"
                    value={password}
                    placeholder="Enter password"
                    onChange={onChangePassword}
                    validations={[required]}
                  />
                </div>

                {/*Submit Button */}
                <div className="form-group">
                  <button
                    className="btn btn-primary btn-block"
                    disabled={loading}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Login</span>
                  </button>
                </div>

                {/* {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )} */}
                <button style={{ display: "none" }} ref={checkBtn}></button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Login;
