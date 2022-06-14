
import "./Login.css";
import profile from "./../image/gamer.png";
import email from "./../image/email.jpg";
import passWORD from "./../image/pass.png";
import pass from "./../image/pass.png";
import { useNavigate } from "react-router-dom";
import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

const Register = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <div className="main">
      <div className="sub-mainn">
        <div>

          <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
                </div> </div> <div>
            <h1>Registration </h1>
          <Form>
          <div className="second-input">
            <TextField label="First Name" name="firstName" className="name" type="text" /> &nbsp;
            <TextField label="Last Name" name="lastName" className="name" type="text" /> &nbsp;
            <TextField label="Email" name="email" type="email" className="name"/>&nbsp;
            <TextField label="password" name="password" type="password" className="name" />&nbsp;
            <TextField label="Confirm Password" name="confirmPassword" type="password" className="name"/>&nbsp;
            <div ><button className="login-button" type="submit">Register</button></div>&nbsp;
            <div ><button className="login-button" type="reset">Reset</button></div>
            </div>
          </Form>
        </div> </div> </div> </div> </div>
      )}
    </Formik>
  )
}

export default Register
