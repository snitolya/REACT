import React, { useState } from 'react';
import { useFormik } from 'formik';
 
export default function SignupForm () {
    const[value , setValue]=useState('');

    return(
    <form className="row g-3">
        
     <div className="col-md-4">
    <label htmlFor="validationServer01" className="form-label">First name</label>
    <input type="text" className="form-control is-valid" id="validationServer01"  required />
    </div>

<br></br>


<div className="col-md-4">
    <label htmlFor="validationServer02" className="form-label">Last name</label>
    <input type="text" className="form-control is-valid" id="validationServer02"  required />
  </div>


<br></br>

<div className="col-md-4">
    <label htmlFor="validationServerUsername" className="form-label">Email address</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend3">@</span>
      <input type="text" className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
      </div>
  </div>

  <br></br>


  <div className="col-md-4">
    <label htmlFor="validationServerUsername" className="form-label">Password</label>
    <div className="input-group has-validation">
      <input type="password" className="form-control is-invalid" id="validationServerUsername" placeholder="Password" required />
      </div>
  </div>


  <br></br>


  <div className="col-md-4">
    <label htmlFor="validationServerUsername" className="form-label">Confirm Password</label>
    <div className="input-group has-validation">
      <input type="password" className="form-control is-invalid" id="validationServerUsername" placeholder="Confirm Password" required />
      </div>
  </div> 

  <br></br>

  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>


    </form>
  )
 };
