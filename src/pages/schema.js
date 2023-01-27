import { useForm} from "react-hook-form";
import {yupResolver } from "@hookform/resolvers/yup";
import * as  Yup from "yup";

const RegistrationSchema= yup.object().shap({
    firstName: yup.string().required("*Required*"),
    lastName: yup.string().required(),
    email: yup.email().required(),
    password: yup.string().min(8).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]) //passes the password ref  field to check the password
})

//funtion Form(){
    const{register, handleSubmit, erros} = useForm({
        resolver: yupResolver(schema), //connects react hook to yup library
    });
 //data is the data from the form 
const submitForm = (data) => {
    fetch("/register")
};
    //submit: pass function through handlesubmit
<form onSubmit={handleSubmit(submitForm)}> </form>

//input field add to every field to register field name
<input ref= {register}></input>

//below each field, display errors 
<p> {errors.firstName?.message}</p>

//checking passwords 
<p> {errors.confirmPassword && "Passwords Should Match"}</p>


handleSubmit(data){
    console.log(JSON.stringify(data, null, 2));

let formData= new FormData();
formData.append("firstName", data.firstName);
formData.append("lastName", data.lastName);
formData.append("email", data.email);
formData.append("password", data.password);




