// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import EmployeeService from "../services/EmployeeService";

// const instance = new EmployeeService();

// const AddEmployeeComponent = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [job_title, setTitle] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [zipcode, setZipcode] = useState("");
//   const [country, setCountry] = useState("");
//   const history = useNavigate();
//   const { id } = useParams();

//   const saveOrUpdateEmployee = (e) => {
//     e.preventDefault();

//     const employee = {
//       firstName,
//       lastName,
//       job_title,
//       email,
//       address,
//       city,
//       state,
//       zipcode,
//       country,
//     };

//     if (id) {
//       instance
//         .updateEmployee(id, employee)
//         .then((response) => {
//           history.push("/employees");
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     } else {
//       instance
//         .createEmployee(employee)
//         .then((response) => {
//           console.log(response.data);

//           history.push("/employees");
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   };

//   useEffect(() => {
//     instance
//       .getEmployeeById(id)
//       .then((response) => {
//         setFirstName(response.data.firstName);
//         setLastName(response.data.lastName);
//         setTitle(response.data.job_title);
//         setEmail(response.data.email);
//         setAddress(response.data.address);
//         setCity(response.data.city);
//         setState(response.data.state);
//         setZipcode(response.data.zipcode);
//         setCountry(response.data.country);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [id]);

//   const title = () => {
//     if (id) {
//       return <h2 className="text-center mt-4">Update Employee</h2>;
//     } else {
//       return <h2 className="text-center mt-4">Add Employee</h2>;
//     }
//   };

//   return (
//     <div>
//       <br />
//       <br />
//       <div className="container">
//         <div className="row">
//           <div className="card col-md-6 offset-md-3 offset-md-3">
//             {title()}
//             <div className="card-body">
//               <form>
//                 <div className="form-group mb-2">
//                   <label className="form-label"> First Name :</label>
//                   <input
//                     type="text"
//                     placeholder="Enter first name"
//                     name="firstName"
//                     className="form-control"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                   ></input>
//                 </div>

//                 <div className="form-group mb-2">
//                   <label className="form-label"> Last Name :</label>
//                   <input
//                     type="text"
//                     placeholder="Enter last name"
//                     name="lastName"
//                     className="form-control"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                   ></input>
//                 </div>

//                 <div className="form-group mb-2">
//                   <label className="form-label"> Title:</label>
//                   <input
//                     type="text"
//                     placeholder="Enter Title"
//                     name="job_title"
//                     className="form-control"
//                     value={job_title}
//                     onChange={(e) => setTitle(e.target.value)}
//                   ></input>
//                 </div>

//                 <div className="form-group mb-2">
//                   <label className="form-label"> Email Address:</label>
//                   <input
//                     type="email"
//                     placeholder="Enter email address"
//                     name="email"
//                     className="form-control"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   ></input>
//                 </div>

//                 <div className="form-group mb-2">
//                   <label className="form-label"> Street Address:</label>
//                   <input
//                     type="address"
//                     placeholder="Enter street address"
//                     name="address"
//                     className="form-control"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                   ></input>
//                 </div>

//                 <div className="form-group mb-2">
//                   <label className="form-label"> City:</label>
//                   <input
//                     type="city"
//                     placeholder="Enter city"
//                     name="city"
//                     className="form-control"
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                   ></input>
//                 </div>

//                 <div className="form-group mb-2">
//                   <label className="form-label"> State:</label>
//                   <input
//                     type="state"
//                     placeholder="Enter state"
//                     name="state"
//                     className="form-control"
//                     value={state}
//                     onChange={(e) => setState(e.target.value)}
//                   ></input>
//                 </div>

//                 <div className="form-group mb-2">
//                   <label className="form-label"> Zipcode:</label>
//                   <input
//                     type="zipcode"
//                     placeholder="Enter zipcode"
//                     name="zipcode"
//                     className="form-control"
//                     value={zipcode}
//                     onChange={(e) => setZipcode(e.target.value)}
//                   ></input>
//                 </div>

//                 <div className="form-group mb-2">
//                   <label className="form-label"> Country:</label>
//                   <input
//                     type="country"
//                     placeholder="Enter country"
//                     name="coutnry"
//                     className="form-control"
//                     value={country}
//                     onChange={(e) => setCountry(e.target.value)}
//                   ></input>
//                 </div>

//                 <button
//                   className="btn btn-success"
//                   onClick={(e) => saveOrUpdateEmployee(e)}
//                 >
//                   Submit{" "}
//                 </button>
//                 <Link to="/list" className="btn btn-danger">
//                   {" "}
//                   Cancel{" "}
//                 </Link>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddEmployeeComponent;
