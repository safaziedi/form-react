
import "./Login.css";
import profile from "./../image/gamer.png";
import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import axios  from "axios";
import { useState } from "react";



const Register = () => {

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

const handlesubmit =(e) => {
  e.preventDefault()
  axios.post(
    'http://localhost:8000/register',
    {
      firstName: firstName,
      lastName:lastName,
      email: email,
      password: password ,
      confirmPassword: confirmPassword
    }
  )
  .then((res) =>{
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
}

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
          <Form onSubmit={handlesubmit}>
          <div className="second-input">
            <TextField label="First Name" name="firstName" value={firstName} onChange={
              (e) => {
                setFirstName(e.target.value)
              }
            }
            className="name" type="text" /> &nbsp;
            <TextField label="Last Name" name="lastName" value={lastName} onChange={
              (e) => {
                setLastName(e.target.value)
              }
            } className="name" type="text" /> &nbsp;
            <TextField label="Email" name="email" type="email" value={email} onChange={
              (e) => {
                setEmail(e.target.value)
              }
            }className="name"/>&nbsp;
            <TextField label="password" name="password" type="password" value={password} onChange={
              (e) => {
                setPassword(e.target.value)
              }
            } className="name" />&nbsp;
            <TextField label="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={
              (e) => {
                setConfirmPassword(e.target.value)
              }
            } type="password" className="name"/>&nbsp;
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
