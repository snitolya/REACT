import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import './index.css';


const SignupForm = () => {
  const formik = useFormik({

        initialValues: {
        name: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        message: ''
      },
      validationSchema: Yup.object({
          name: Yup.string()
          .min(3, 'Must be more than 3 letters')
          .max(10, 'Must be less than 10 letters')
              .required('Required'),
          userName: Yup.string()
              .min(3, 'Must be more than 3 letters')
              .max(10, 'Must be less than 10 letters')
              .required('Required'),
          email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
          password: Yup.string()
          .min(5, 'Must be more than 5 letters ')
          .required('Required'),
              
          confirmPassword: Yup.string()
          .oneOf([Yup.ref('password')], 'The passwords are different!')
           .required('Required'),
              
          message: Yup.string()
          .min(10, 'Must be more than 10 letters')
          .required('Required'),
      }),
      onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
      },
  });
  return (

          <form className="form" action="">
           <br/>
                      <label htmlFor="name" >Name</label><br/>
                          <input
                              type="text"
                              className={
                                  formik.touched.name && formik.errors.name ? 'form-control  is-invalid'
                                      :  formik.touched.name
                                          ? 'form-control is-valid' : 'form-control'}
                              id="name"
                              placeholder='Name'
                              name='name'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.name}/>
                          {formik.touched.name && formik.errors.name ? (
                              <div className="invalid-feedback">
                                  {formik.errors.name}
                              </div>
                          ) : null}
                          <br/>
                          

                
                      <label htmlFor="userName">Username</label><br/>
                      <input
                              type="text"
                              className={
                                formik.touched.userName && formik.errors.userName ? 'form-control  is-invalid'
                                    :  formik.touched.userName
                                        ? 'form-control is-valid' : 'form-control'}
                              id="userName"
                              placeholder="Username"
                              name='userName'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.userName}/>
                              {formik.touched.userName && formik.errors.userName ? (
                              <div className="invalid-feedback">
                                  {formik.errors.userName}
                              </div>
                          ) : null}
                                            <br/>
                  
                 
                      <label htmlFor="email">Email</label><br/>
                          <input
                              type="email"
                              className="input"
                              id="email"
                              placeholder="Email"
                              name='email'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.email}/>
                              {formik.touched.email && formik.errors.email ? (
                                <div className="invalid-feedback">
                                    {formik.errors.email}
                                </div>
                            ) : null}
                   <br/>
               

                      <label htmlFor="password" >Password</label><br/> 
                          <input
                              type="password"
                              className="input"
                              id="password"
                              placeholder='Password'
                              name='password'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.password}/>
                              {formik.touched.password && formik.errors.password ? (
                                <div className="invalid-feedback">
                                    {formik.errors.password}
                                </div>
                            ) : null}
                             <br/>
                    
                       
                      <label htmlFor="confirmPassword" >Confirm password</label><br/>             
                          <input
                              type="password"
                              className="input"
                              id="confirmPassword"
                              placeholder="Confirm password"
                              name='confirmPassword'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.confirmPassword}/>
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <div className="invalid-feedback">
                                    {formik.errors.confirmPassword}
                                </div>
                            ) : null}
                             <br/>

                  
                      <label htmlFor="message">Message</label><br/>
                          <input
                              type="text"
                              className="input"
                              id="message"
                              placeholder="Message"
                              name='message'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.message}/>
                   <br/>
             
         <div>
                      <input type="submit" className='btn form-control btn-primary' value="Submit"/><br/>
                      </div>
                       </form>
 
  );
};
export default SignupForm;
