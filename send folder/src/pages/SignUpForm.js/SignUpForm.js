

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import './SignUpform.css';

export default function SignUpForm() {
  const initialInputValues = {
    FirstName: '',
    LastName: '',
    Email: '',
    Password: ''
  };

  const [inputValues, setInputValues] = useState(initialInputValues);
  const [errors, setErrors] = useState({});
  const [AllUsers, setAllusers] = useState([])
  const [Emailexist, setEmailexist] = useState(false)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };



  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!inputValues.FirstName.trim()) {
      errors.FirstName = 'First Name is required';
    }

    if (!inputValues.LastName.trim()) {
      errors.LastName = 'Last Name is required';
    }
    if (!inputValues.Email.trim()) {
      errors.Email = 'Email is required';
    }
    if (!inputValues.Password.trim()) {
      errors.Password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setErrors({});

      try {
        const response = await fetch('http://localhost:3500/users');
        if (response.ok) {
          const users = await response.json();
          setAllusers(users);

          const emailExists = users.some((user) => user.Email === inputValues.Email);
          if (emailExists) {
            setEmailexist(!Emailexist)
            errors.Email = 'Email already exists';
            setErrors(errors);
            return;
          }

          const form = e.target;
          const formData = new FormData(form);
          const Id = uuidv4()

          let UserInfoObject = {
            role: 'User',
            id: Id,
          };
          formData.forEach((value, key) => {
            UserInfoObject[key] = value;
          });

          try {
            const postResponse = await fetch('http://localhost:3500/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(UserInfoObject),
            });

            if (postResponse.ok) {
              console.log('User data posted successfully!');
              form.reset();
              setInputValues(initialInputValues);
              setEmailexist(false)
           
            } else {
              console.log('Failed to post user data.');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        } else {
          console.log('Failed to fetch users.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card_title">
          <h1>Create Account</h1>
          {Emailexist ? (
            <span>
              Email already exists. Please{' '}
              <Link to="/Login">
                <a href="login">Sign In</a>
              </Link>
            </span>
          ) : (
            <span>
              Already have an account?{' '}
              <Link to="/Login">
                <a href="login">Sign In</a>
              </Link>
            </span>
          )}
        </div>
        <div className="form">
          <form id="signup-form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="FirstName"
              placeholder="FirstName"
              value={inputValues.FirstName}
              onChange={handleChange}
            />
            {errors.FirstName && <p>{errors.FirstName}</p>}
            <input
              type="text"
              name="LastName"
              placeholder="LastName"
              value={inputValues.LastName}
              onChange={handleChange}
            />
            {errors.LastName && <p>{errors.LastName}</p>}
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={inputValues.Email}
              onChange={handleChange}
            />
            {errors.Email && <p>{errors.Email}</p>}
            <input
              type="password"
              name="Password"
              placeholder="Password"
              value={inputValues.Password}
              onChange={handleChange}
            />
            {errors.Password && <p>{errors.Password}</p>}
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="card_terms">
          <input type="checkbox" name="" id="terms" />{' '}
          <span>
            I have read and agree to the <a href="">Terms of Service</a>
          </span>
        </div>
      </div>
    </div>
  );
}




