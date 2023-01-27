import React from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import parse from "date-fns/parse";i
import SignatureCanvas from "react-signature-canvas";
import "./I9Form.css";

const SECTION1_URL = 'http://capstoneApi/auth/applicant/formI9';
// const I9Form_Section2 = () => {

const Section2Schema = Yup.object().shape({
    employee_Fname: Yup.string().required(),
    employee_Lname: Yup.string().required(),
    employee_MI: Yup.string().required(),
    employee_Citizenship: Yup.string().required(),

    listCategory: Yup.string().required(),
    documentTitle: Yup.string().required(),
    issuingAuthority: Yup.string().required(),
    documentNum: Yup.number().required(),
    additional_Info: number().required(),
    employee_Doh: date().transform(parseDateString).typeError("please enter a valid date").required(),
    
    employerSignature: Yup.signature().required(" * Required *"),
    dateCompleted: Yup.date().transform(parseDateString).typeError("please enter a valid date").required().max(today),
    employerTitle: Yup.string().required("*Required*"),
    employer_Lname: Yup.string().required(" * Required *"),
    employer_Fname: Yup.string().required(" * Required *"),
    employer_BusinessName: Yup.string().required(" * Required *"),
    employer_BusinessAddress: Yup.string().required(" * Required *"),
    employerCity: Yup.string().required(" * Required *"),
    employerState: Yup.string().required(" * Required *"),
    employerZip: Yup.string().required(" * Required *")
   
    

})
const options = [
    { value: 1, label: "List A (Identity and Employment Authorization) ", },
    { value: 2, label: "List B  (Identity)" },
    { value: 3, label: "List C (Employment Authorization)" }
];
const initialValues = {
    employee_Fname: "",
    employee_Lname: "",
    employee_MI: "",
    employee_Citizenship:"",
    employeeStartDate: "",
    employerSignature: null,
    dateCompleted: "",
    employerTitle: "",
    employer_Lname: "",
    employer_Fname: "",
    employer_BusinessName: "",
    employer_BusinessAddress: "",
    employerState: "",
    employerZip: "",
    //array of document info entry boxes
    document: [
        {
            listCategory: { options },
            documentTitle: "",
            issuingAuthority: "",
            documentNum: "",
            expirationDate: ""
        },
    ]
}
 // date converted for sql storage
function parseDateString (value, originalValue) {
    const parseDate = isDate(originalValue)
    ? originalValue : parse(originalValue, "YYYY-MM-DD", new Date());
    return parseDate;
}
class I9Form_Section2 extends React.Component {
    render() {
        return (
            <Formik initialValues={initialValues}
                validationSchema={Section2Schema}
                onSubmit={(values) => {
                    axios.post(SECTION1_URL, values);
                    console.log(values);
                    alert("Form is validated! Submitting the form...");
                }}
            >
                {({ touched, errors, isSubmitting, values, setFieldValue, handleBlur, handleChange }) =>
                    !isSubmitting ? (
                        <div className="container-1">
                            <div className="row mb-5">
                                <div className="col-lg-12 text-center background">
                                    <h1 className="mt-5">I-9 Form: Section 2</h1>
                                </div>
                                <div className="mt-3">
                                    <b>
                                        START HERE: Read instructions carefully before completing
                                        this form. The instructions must be available, either in
                                        paper or electronically, during completion of this form.
                                        Employers are liable for errors in the completion of this
                                        form.{" "}
                                    </b>
                                </div>
                                <div className="mt-2">
                                    <b>ANTI-DISCRIMINATION NOTICE:</b> It is illegal to
                                    discriminate against work-authorized individuals. Employers
                                    CANNOT specify which document(s) an employee may present to
                                    establish employment authorization and identity. The refusal
                                    to hire or continue to employ an individual because the
                                    documentation presented has a future expiration date may
                                    also constitute illegal discrimination.
                                </div>
                                <div className="mt-3 section-1">
                                    <h5>Section 2.Employer or Authorized Representative Review and Verification</h5>
                                    <p>
                                        Employers or their authorized representative must complete and <b>sign Section 2 within 3 business days of the employee's first day of employment.</b> You
                                        must physically examine one document from <em>List</em> A OR a combination of one document from <em>List B</em> and one document from <em>List C</em> as listed on the "Lists
                                        of Acceptable Documents."
                                    </p>
                                </div>
                                <Form>


                                    <h4> Employee Info from Section 1</h4>
                                    {/*Form section 2 begins*/}
                                    <div className="form-group mt-3">
                                        <label htmlFor="lastName">Employee Last Name (Family Name)</label>

                                        <Field
                                            type="text"
                                            name="lastName"
                                            placeholder="Enter Last Name "
                                            className={`mt-2 form-control
						${touched.lastName && errors.lastName ? "is-invalid" : ""}`}
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="lname"
                                            className="invalid-feedback"
                                        />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="firstName">Employee First Name (Given Name)</label>
                                        <Field
                                            type="text"
                                            name="firstName"
                                            placeholder="Enter First Name"
                                            className={`mt-2 form-control
						${touched.firstName && errors.firstName ? "is-invalid" : ""}`}
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="firstName"
                                            className="invalid-feedback"
                                        />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="middleName">Employee Middle Initial</label>
                                        <Field
                                            type="text"
                                            name="middleName"
                                            placeholder="Enter Middle Initial"
                                            className={`mt-2 form-control
						${touched.middleName && errors.middleName ? "is-invalid" : ""}`}
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="middleName"
                                            className="invalid-feedback"
                                        />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="employee_Citizenship">Employee Citizenship/Immigration Status</label>


                                        <Field
                                            type="text"
                                            name="employee_Citizenship"
                                            placeholder="Enter Citizenship/Immigration Status"
                                            className={`mt-2 form-control
						${touched.employee_Citizenship && errors.employee_Citizenship ? "is-invalid" : ""}`}
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="employee_Citizenship"
                                            className="invalid-feedback"
                                        />
                                    </div>
                                    {/* List type dropdown list */}
                                    <label htmlFor="email" style={{ display: "block" }}>
                                        Select List Category
                                    </label>

                                    {/* Array of Docuemnt info entry boxes */}
                                    <FieldArray name="document">
                                        {({ insert, remove, push }) => (
                                            <div>
                                                {values.document.length > 0 &&
                                                    values.document
                                                        .map((document, index) => (
                                                            <>

                                                            {/* 1. Select listCategory */}
                                                            <select
                                                                name="list"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                style={{ display: "block" }}
                                                                className="dropdown"
                                                            >
                                                                {/* maps options from const options above */}
                                                                {options.map((options, index) => (
                                                                    <option>{options.label}</option>))}
                                                            </select>

                                                            {/* 2. Docuemnt title */}
                                                                <div className="row" key={index}>
                                                                    <div className="col">
                                                                        <label htmlFor={`document.${index}.documentTitle`}>Document Title</label>
                                                                        <Field
                                                                            name={`document.${index}.documentTitle`}
                                                                            placeholder="Enter Document Title"
                                                                            type="text" />
                                                                        <ErrorMessage
                                                                            name={`document.${index}.documentTitle`}
                                                                            component="div"
                                                                            className="field-error" />
                                                                    </div>

                                                                    {/* 3. Issuing Authority */}
                                                                    <div className="row" key={index}>
                                                                        <div className="col">
                                                                            <label htmlFor={`document.${index}.issuingAuthority`}>Issuing Authority </label>
                                                                            <Field
                                                                                name={`document.${index}.issuingAuthority`}
                                                                                placeholder="Enter Issuing Authority"
                                                                                type="text" />
                                                                            <ErrorMessage
                                                                                name={`document.${index}.issuingAuthority`}
                                                                                component="div"
                                                                                className="field-error" />
                                                                            </div>
                                                                    </div>

                                                                    {/* 4. Document Number */}
                                                                    <div className="row" key={index}>
                                                                        <div className="col">
                                                                            <label htmlFor={`document.${index}.documentNumber`}>Document Number </label>
                                                                            <Field
                                                                                name={`document.${index}.documentNumber`}
                                                                                placeholder="Enter Document Number"
                                                                                type="text" />
                                                                            <ErrorMessage
                                                                                name={`document.${index}.documentNumber`}
                                                                                component="div"
                                                                                className="field-error" />
                                                                        </div>
                                                                    </div>

                                                                    {/* 5. Document Number */}
                                                                    <div className="row" key={index}>
                                                                        <div className="col">
                                                                            <label htmlFor={`document.${index}.documentNumber`}> Expiration Date (if any) (mm/dd/yyyy) </label>
                                                                            <Field
                                                                                name={`document.${index}.documentNumber`}
                                                                                placeholder="Enter Expiration Date"
                                                                                type="date" />
                                                                            <ErrorMessage
                                                                                name={`document.${index}.documentNumber`}
                                                                                component="div"
                                                                                className="field-error" />
                                                                        </div>
                                                                    </div>
                                                                
                                                                    <div className="col">
                                                                        <button
                                                                            type="button"
                                                                            className="secondary"
                                                                            onClick={() => remove(index)}
                                                                        > Remove
                                                                        </button>
                                                                    </div>
                                                                </div></>
                                                        ))}
                                                <button
                                                    type="button"
                                                    className="secondary"
                                                    onClick={() => push({
                                                        documentTitle: "", issuingAuthority: "",
                                                        documentNum: "", expirationDate: ""
                                                    })}
                                                >Add Document
                                                </button>
                                            </div>
                                        )}
                                    </FieldArray>


                                </Form>
                            </div>
                        </div>

                    ) : (< div >
                        <h1 className="p-3 mt-5">Form Submitted</h1>

                        <div className="alert alert-success mt-3">
                            Thank for your connecting with us. Here's what we got from
                            you !
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item">email: {values.email}</li>
                            <li className="list-group-item">
                                Password: {values.password}
                            </li>
                        </ul>
                    </div>
                    )
                }

            </Formik>
        );
    }
}
export default I9Form_Section2;