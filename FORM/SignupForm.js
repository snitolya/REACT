import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.scss';
 
const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, `Must be 15 characters or less`)
                .min(5, 'Must be 5 ch')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='container'>
            <form action="">
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First name</label>
 
                        <div className="input-group">
                            <div className="input-group-text">
                                <i className="bi bi-person-fill"/>
                            </div>
                            <input
                                type="text"
                                className={
                                    formik.touched.firstName && formik.errors.firstName ? 'form-control  is-invalid'
                                        :  formik.touched.firstName
                                            ? 'form-control is-valid' : 'form-control'}
                                id="firstName"
                                placeholder='first name'
                                name='firstName'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}/>
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <div className="invalid-feedback">
                                    {formik.errors.firstName}
                                </div>
                            ) : null}
                        </div>
 
 
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last name</label>
                        <div className="input-group">
                            <div className="input-group-text">
                                <i className="bi bi-person-fill"/>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="lastName"
                                name='lastName'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <div className="input-group">
                            <div className="input-group-text">@</div>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                name='email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}/>
                        </div>
                    </div>
                </div>
 
                <div className="row">
                    <div className="col-md-12">
                        <label htmlFor="password" className="form-label">Password</label>
 
                        <div className="input-group">
                            <div className="input-group-text">
                                <i className="bi bi-unlock-fill"/>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                id="password"
                                placeholder='password'
                                name='password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}/>
                        </div>
                    </div>
 
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
                        <div className="input-group">
                            <div className="input-group-text">
                                <i className="bi bi-unlock-fill"/>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Confirm password"
                                name='confirmPassword'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <input type="submit" className='btn btn-primary' value="Submit"/>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default SignupForm;
