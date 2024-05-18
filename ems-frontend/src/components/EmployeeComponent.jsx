/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { createEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const navigator= useNavigate()

  function saveEmployee(e)
  {
    e.preventDefault();
    const employee ={firstName, lastName, email}
    
    createEmployee(employee).then((response)=>{
      console.log(response.data)
      navigator('/employees')
    })
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="card col-6 offset-3">
          <h2 className="text-center">Add Employee</h2>
          <div className="card-body">
            <form action="">
              <div className="form-group mb-2">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Employee Firstname"
                  name="firstName"
                  value={firstName}
                  className="form-control"
                  onChange={(e)=> setFirstName(e.target.value) }
                />
              </div>

              <div className="form-group mb-2">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Employee LastName"
                  name="lastName"
                  value={lastName}
                  className="form-control"
                  onChange={(e)=> setLastName(e.target.value) }
                />
              </div>

              <div className="form-group mb-2">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter Employee Email Id"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={(e)=> setEmail(e.target.value) }
                />
              </div>
              <div className="form-group text-center m-4">
              <button className="btn btn-success" onClick={saveEmployee}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
