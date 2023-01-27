import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactComponent as Image } from "../assets/Login.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./registration.css";
import { Button } from "react-bootstrap";
import RegistrationServices from "../services/RegistrationServices";

//Registration page
//const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = 'http://capstoneApi/register';

// function RegisterForm() {
//  
const RegisterFormTrouble = () => {

    // set default value async.The defaultValues prop is used to populate entire form values

    const RegistrationSchema = yup.object().shape({
        firstName: yup.string().required("*Required*"),
        lastName: yup.string().required("*Required*"),
        email: yup.string().email("Invalid Email.").required("*Required*"),
        password: yup.string(PWD_REGEX.test).min(8).max(15).required("*Required*"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required("Passwords must match.") //passes the password ref  field to check the password
    });

    //funtion Form(){
    const { register, handleSubmit, formState: { errors } }
        = useForm({
            mode: onchange,
            resolver: yupResolver(RegistrationSchema), //connects react hook to yup library
        });

   
    const navigate = useNavigate();

    const onSubmitFunction = (data) => {
        // e.preventDefault();
        const registrationReq = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password
        };
        axios.post(REGISTER_URL, registrationReq).then((response) => {
            if (response.status === 200) {
                console.log('Registration Successful');
                navigate.push("/login");
            }
        })
            .catch((err) => {
                console.log(err);
            
            });
    };

    // try {
    //     const response = await RegistrationServices.registerUser(firstName, lastName, email, password,
    //         JSON.stringify({ firstName, lastName, email, password }));
    //     if (!response.ok) {
    //         //clear state and controlled inputs
    //         //need value attrib on inputs for this
    //         setFirstName('');
    //         setLastName('');
    //         setEmail('');
    //         setPassword('');
    //         throw Error(response.statusText);
    //     }
    // } catch (error) {
    //     console.log(error);
    



    return (
        <div className="login">
            <Image />
            <div className="flex-container">
                <span className="adp-onboarding">ADP Onboarding</span>
                <span className="login-1">Registration</span>
                <div className="flex-container-1">
                    <form className="App" onSubmit={handleSubmit(onSubmitFunction)}>
                        <div className="flex-container-2">

                            <label>First Name:</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                name= "firstName"
                                placeholder="Enter First Name"
                                ref= {register}
                            />
                            <span style={{ color: "red" }}>{errors.firstName?.message}</span>
                        

                            <label>Last Name:</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                name= "lastName"
                                placeholder="Enter Last Name"
                                ref={register}
                            />
                            <span style={{ color: "red" }}>{errors.lastName?.message}</span>

                            <label>Email Address:</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                name="email"
                                placeholder="Enter email address"
                                ref={register}
                            />
                            <span style={{ color: "red" }}>{errors.lastName?.message}</span>


                            <label>Password:</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                ref={register}
                            />
                            <span style={{ color: "red" }}>{errors.password?.message}</span>
                            
                            <label>Confirm Password:</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                className="form-control mt-1"
                                placeholder="Confirm password"
                                ref={register}
                            />
                            <span style={{ color: "red" }}>{errors.password?.message}</span>

                            <Button
                                type={"submit"}
                                style={{ backgroundColor: "#2B368A" }}
                                id="button"
                            > Submit </Button>
                        </div>
                    </form>
                </div>
            </div>    </div>);
}

export default RegisterFormTrouble;