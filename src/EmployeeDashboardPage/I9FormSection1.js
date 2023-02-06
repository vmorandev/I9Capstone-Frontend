import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import SignatureCanvas from "react-signature-canvas";
import "./I9FormSection1.css";
import { ReactComponent as Image } from "../assets/forms.svg";
import I9Instructions from "./I9Instructions";

function I9FormSection1() {
  const LoginSchema = Yup.object().shape({
    lName: Yup.string().required("Last name is required"),
    fName: Yup.string()
      .min(3, "First name must be  characters at minimum")
      .required("First Name is required"),
    address: Yup.string().required("Street Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipcode: Yup.string().required("Zipcode is required"),
    dob: Yup.string().required("Date of Birth is required"),
    ssn: Yup.string().required("Social Security is required"),
    email: Yup.string().required("Email is required"),
    telephone: Yup.string().required("Telephone number is required"),
    date: Yup.string().required("Date is required"),
    signature: Yup.string().required("Signature is required"),
  });

  return (
    <div className="color">
      <div className="row color ">
        <div className="color">
          <h3 className="mt-5 ms-5">
            <Image />
            I-9 Form: Section 1
          </h3>
        </div>
        <div className="row mt-5">
          <div className="col-lg-3 color"></div>
          <div className="col-lg-6 color">
            <Formik
              initialValues={{
                lName: "",
                fName: "",
                midName: "",
                other_name: "",
                address: "",
                aptnum: "",
                city: "",
                state: "",
                zipcode: "",
                dob: "",
                ssn: "",
                email: "",
                telephone: "",
                citizen: false,
                national: false,
                permres: false,
                alien: false,
                expirationDate: "",
                uscisnum: "",
                formI9_admissionNum: "",
                signature: null,
                date: "",
                noprep: "",
                yesprep: "",
                preplName: "",
                prepfName: "",
                prepaddress: "",
                prepcity: "",
                prepstate: "",
                prepzip: "",
                prepsignature: null,
                prepdate: Yup.date,
              }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                localStorage.setItem("form", JSON.stringify({ form: values }));
                axios.post(
                  "https://localhost:8082/capstoneApi/auth/applicant/formI9/saveSection1",
                  values
                );

                console.log(values);
                alert("Form is validated! Submitting the form...");
              }}
            >
              {({ touched, errors, isSubmitting, values, setFieldValue }) =>
                !isSubmitting ? (
                  <div>
                    <div className="row mb-5">
                      <div className="col-lg-12 background"></div>
                    </div>

                    <div className="mt-3">
                      <I9Instructions />

                      <p>
                        <b>
                          START HERE: Read instructions carefully before
                          completing this form. The instructions must be
                          available, either in paper or electronically, during
                          completion of this form. Employers are liable for
                          errors in the completion of this form.{" "}
                        </b>
                      </p>
                    </div>
                    <div className="mt-2">
                      <b>ANTI-DISCRIMINATION NOTICE:</b> It is illegal to
                      discriminate against work-authorized individuals.
                      Employers CANNOT specify which document(s) an employee may
                      present to establish employment authorization and
                      identity. The refusal to hire or continue to employ an
                      individual because the documentation presented has a
                      future expiration date may also constitute illegal
                      discrimination.
                    </div>
                    <div className="mt-3">
                      <h5>Section 1. Employee Information and Attestation</h5>
                      <p>
                        Employees must complete and sign Section 1 of Form I-9
                        no later than the <b>first day of employment,</b> but
                        not before accepting a job offer.
                      </p>
                    </div>
                    <Form>
                      {/*Begins Last Name in form*/}
                      <div className="form-group mt-3">
                        <label htmlFor="lName">Last Name</label>
                        <Field
                          type="text"
                          name="lName"
                          placeholder="Enter Last Name"
                          autocomplete="off"
                          className={`mt-2 form-control
						${touched.lName && errors.lName ? "is-invalid" : ""}`}
                        />

                        <ErrorMessage
                          component="div"
                          name="lName"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins First Name in form*/}
                      <div className="form-group">
                        <label htmlFor="fName" className="mt-3">
                          First Name:
                        </label>
                        <Field
                          type="text"
                          name="fName"
                          placeholder="Enter First Name"
                          className={`mt-2 form-control
						${touched.fName && errors.fName ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="fName"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins midName Initial in form*/}
                      <div className="form-group">
                        <label htmlFor="midName" className="mt-3">
                          Middle Initial:
                        </label>
                        <Field
                          type="text"
                          name="midName"
                          placeholder="Enter midName Initial"
                          className={`mt-2 form-control
						${touched.midName && errors.midName ? "is-invalid" : ""}`}
                        />
                      </div>
                      {/*Begins Other Name in form*/}
                      <div className="form-group">
                        <label htmlFor="other_name" className="mt-3">
                          Other Last Name (if any):
                        </label>
                        <Field
                          type="text"
                          name="other_name"
                          placeholder="Enter other name's used if any"
                          className={`mt-2 form-control
						${touched.other_name && errors.other_name ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="other_name"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins address in form*/}
                      <div className="form-group">
                        <label htmlFor="address" className="mt-3">
                          Street Address:
                        </label>
                        <Field
                          type="text"
                          name="address"
                          placeholder="Enter Street Address"
                          className={`mt-2 form-control
						${touched.address && errors.address ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="address"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins Apt. Number in form*/}
                      <div className="form-group">
                        <label htmlFor="aptnum" className="mt-3">
                          Apt. Number:
                        </label>
                        <Field
                          type="text"
                          name="aptnum"
                          placeholder="Enter Apt. Number if any"
                          className={`mt-2 form-control
						${touched.aptnum && errors.aptnum ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="aptnum"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins city in form*/}
                      <div className="form-group">
                        <label htmlFor="city" className="mt-3">
                          City:
                        </label>
                        <Field
                          type="text"
                          name="city"
                          placeholder="Enter City"
                          className={`mt-2 form-control
						${touched.city && errors.city ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="city"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins state in form*/}
                      <div className="form-group">
                        <label htmlFor="state" className="mt-3">
                          State:
                        </label>
                        <Field
                          type="text"
                          name="state"
                          placeholder="Enter State"
                          className={`mt-2 form-control
						${touched.state && errors.state ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="state"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins Zip Code in form*/}
                      <div className="form-group">
                        <label htmlFor="zipcode" className="mt-3">
                          Zip Code:
                        </label>
                        <Field
                          type="text"
                          name="zipcode"
                          placeholder="Zip Code"
                          className={`mt-2 form-control
						${touched.zipcode && errors.zipcode ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="zipcode"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins Date of Birth in form*/}
                      <div className="form-group">
                        <label htmlFor="dob" className="mt-3">
                          Date of Birth:
                        </label>
                        <Field
                          type="text"
                          name="dob"
                          placeholder="Date of Birth"
                          className={`mt-2 form-control
						${touched.dob && errors.dob ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="dob"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins Social Security Number ssn in form*/}
                      <div className="form-group">
                        <label htmlFor="ssn" className="mt-3">
                          SSN:
                        </label>
                        <Field
                          type="text"
                          name="ssn"
                          placeholder="Social Security Number"
                          className={`mt-2 form-control
						${touched.ssn && errors.ssn ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="ssn"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins email in form*/}
                      <div className="form-group">
                        <label htmlFor="email" className="mt-3">
                          Email Address:
                        </label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          className={`mt-2 form-control
						${touched.email && errors.email ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="email"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins telephone Number in form*/}
                      <div className="form-group">
                        <label htmlFor="telephone" className="mt-3">
                          Telephone Number:
                        </label>
                        <Field
                          type="telephone"
                          name="telephone"
                          placeholder="Telephone Number"
                          className={`mt-2 form-control
						${touched.telephone && errors.telephone ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="telephone"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label className="mt-3">
                          <b>
                            I am aware that federal law provides for
                            imprisonment and/or fines for false statements or
                            use of false documents in connection with the
                            completion of this form.
                          </b>{" "}
                        </label>
                      </div>
                      <div>
                        <label>
                          I attest, under penalty of perjury, that I am (check
                          one of the following boxes):
                        </label>
                      </div>
                      <div></div>
                      {/*Begins Citizen in form*/}
                      <div>
                        <label htmlFor="citizen" className="mt-3">
                          <Field
                            type="checkbox"
                            name="citizen"
                            className={`
						${touched.citizen && errors.citizen ? "is-invalid" : ""}`}
                          />
                          1. A citizen of the United States.
                        </label>
                        <ErrorMessage
                          component="div"
                          name="citizen"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins National in form*/}
                      <div>
                        <label htmlFor="national" className="mt-3">
                          <Field
                            type="checkbox"
                            name="national"
                            className={`
						${touched.national && errors.national ? "is-invalid" : ""}`}
                          />
                          2. A noncitizen national of the United States (See
                          instructions).
                        </label>
                        <ErrorMessage
                          component="div"
                          name="national"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins Perminent Resident in form*/}
                      <div>
                        <label htmlFor="permres" className="mt-3">
                          <Field
                            type="checkbox"
                            name="permres"
                            className={`
						${touched.permres && errors.permres ? "is-invalid" : ""}`}
                          />
                          3. A lawful permanent resident (Alien Registration
                          Number/USCIS Number):
                          <Field
                            htmlFor="uscisnum"
                            type="text"
                            name="uscisnum"
                            placeholder="Alien Registration Number"
                            className="mt-2 form-control"
                          />
                        </label>
                        <ErrorMessage
                          component="div"
                          name="permres"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins Alien Authorized to Work in form*/}
                      <div>
                        <label htmlFor="alien" className="mt-3">
                          <Field
                            type="checkbox"
                            name="alien"
                            className={`
						${touched.alien && errors.alien ? "is-invalid" : ""}`}
                          />
                          4. An alien authorized to work until (expiration date,
                          if applicable, mm/dd/yyyy):
                          <Field
                            htmlFor="expirationDate"
                            type="text"
                            name="expirationDate"
                            placeholder="Expiration date"
                            className="mt-2 form-control"
                          />
                        </label>
                        <ErrorMessage
                          component="div"
                          name="alien"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins Todays Date in form*/}
                      <div className="form-group">
                        <label htmlFor="date" className="mt-3">
                          Today's Date:
                        </label>
                        <Field
                          type="date"
                          name="date"
                          placeholder="Today's Date"
                          className={`mt-2 form-control
						${touched.date && errors.date ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="date"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins Signature in form*/}
                      <div className="form-group">
                        <label htmlFor="signature" className="mt-3">
                          Signature:
                        </label>
                        <Field
                          name="signature"
                          placeholder="Signature"
                          className={`mt-2 form-control
						${touched.signature && errors.signature ? "is-invalid" : ""}`}
                        >
                          {({ field, form }) => (
                            <SignatureCanvas
                              {...field}
                              penColor="black"
                              backgroundColor="white"
                              canvasProps={{
                                width: 700,
                                height: 60,
                                className: "sigCanvas",
                              }}
                              onEnd={(data) => setFieldValue("signature", data)}
                            />
                          )}
                        </Field>
                      </div>
                      <div className="form-group mt-3">
                        <h5>
                          Preparer and/or Translator Certification (check one):
                        </h5>
                      </div>

                      {/*Begins Did Not Use a Preparer in form*/}
                      <div>
                        <label htmlFor="noprep" className="mt-3">
                          <Field
                            type="checkbox"
                            name="noprep"
                            className={`
						${touched.noprep && errors.noprep ? "is-invalid" : ""}`}
                          />
                          I did not use a preparer or translator.
                        </label>
                        <ErrorMessage
                          component="div"
                          name="noprep"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins Did Use a Preparer in form*/}
                      <div>
                        <label htmlFor="yesprep" className="mt-3">
                          <Field
                            type="checkbox"
                            name="yesprep"
                            className={`
						${touched.yesprep && errors.yesprep ? "is-invalid" : ""}`}
                          />
                          A preparer(s) and/or translator(s) assisted the
                          employee in completing Section 1.
                        </label>
                        <ErrorMessage
                          component="div"
                          name="yesprep"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="mt-3">
                        I attest, under penalty of perjury, that I have assisted
                        in the completion of Section 1 of this form and that to
                        the best of my knowledge the information is true and
                        correct.
                      </div>
                      {/*Begins Preparer Last Name in form*/}
                      <div className="form-group">
                        <label htmlFor="preplName" className="mt-3">
                          Preparer Last Name:
                        </label>
                        <Field
                          type="text"
                          name="preplName"
                          placeholder="Preparer Last Name"
                          className={`mt-2 form-control
						${touched.preplName && errors.preplName ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="preplName"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins Preparer First Name in form*/}
                      <div className="form-group">
                        <label htmlFor="prepfName" className="mt-3">
                          Preparer First Name:
                        </label>
                        <Field
                          type="text"
                          name="prepfName"
                          placeholder="Preparer Last Name"
                          className={`mt-2 form-control
						${touched.prepfName && errors.prepfName ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="prepfName"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins Preparer Street Address in form*/}
                      <div className="form-group">
                        <label htmlFor="prepaddress" className="mt-3">
                          Preparer Street Address:
                        </label>
                        <Field
                          type="text"
                          name="prepaddress"
                          placeholder="Preparer Last Name"
                          className={`mt-2 form-control
						${touched.prepaddress && errors.prepaddress ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="prepaddress"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins Preparer City in form*/}
                      <div className="form-group">
                        <label htmlFor="prepcity" className="mt-3">
                          Preparer City:
                        </label>
                        <Field
                          type="text"
                          name="prepcity"
                          placeholder="Preparer City"
                          className={`mt-2 form-control
						${touched.prepcity && errors.prepcity ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="prepcity"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins Preparer Zip in form*/}
                      <div className="form-group">
                        <label htmlFor="prepzip" className="mt-3">
                          Preparer's Zip:
                        </label>
                        <Field
                          type="text"
                          name="prepzip"
                          placeholder="Preparer's Zipcode"
                          className={`mt-2 form-control
						${touched.prepzip && errors.prepzip ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="prepzip"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Begins Preparers Signature in form*/}
                      <div className="form-group">
                        <label htmlFor="prepsignature" className="mt-3">
                          Preparer Signature:
                        </label>
                        <Field
                          name="prepsignature"
                          placeholder="Signature"
                          className={`mt-2 form-control
						${touched.prepsignature && errors.prepsignature ? "is-invalid" : ""}`}
                        >
                          {({ field, form }) => (
                            <SignatureCanvas
                              {...field}
                              penColor="black"
                              backgroundColor="#FFFFFF"
                              canvasProps={{
                                width: 700,
                                height: 60,
                                className: "sigCanvas",
                              }}
                              onEnd={(data) =>
                                setFieldValue("prepsignature", data)
                              }
                            />
                          )}
                        </Field>
                      </div>
                      {/*Begins Preparer's Date in form*/}
                      <div className="form-group">
                        <label htmlFor="prepdate" className="mt-3">
                          Today's Date:
                        </label>
                        <Field
                          type="date"
                          name="prepdate"
                          placeholder="Today's Date"
                          className={`mt-2 form-control
						${touched.prepdate && errors.prepdate ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="prepdate"
                          className="invalid-feedback"
                        />
                      </div>
                      {/*Submit Button for form.*/}
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mt-4 mb-5"
                      >
                        Submit
                      </button>
                    </Form>
                  </div>
                ) : (
                  <div>
                    <h1 className="p-3 mt-5">Form Submitted</h1>

                    <div className="alert alert-success mt-3">
                      Thank for your connecting with us. Here's what we got from
                      you !
                    </div>
                    <ul className="list-group">
                      <li className="list-group-item">
                        Last Name: {values.lName}
                      </li>
                      <li className="list-group-item">
                        last name: {values.lName}
                      </li>
                    </ul>
                  </div>
                )
              }
            </Formik>
          </div>
          <div className="lg-col-3 color"></div>
        </div>
      </div>
    </div>
  );
}

export default I9FormSection1;