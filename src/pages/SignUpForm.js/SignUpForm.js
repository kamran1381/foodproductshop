

import React, { useState , useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import './SignUpform.css';
import Swal from 'sweetalert2'
import userUrl from '../../apiconfiguration/userurl/userUrl';
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
  const termCheckBox = useRef(null)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validationRules = [
    { field: 'FirstName', message: 'First Name is required', check: (value) => !value.trim() },
    { field: 'LastName', message: 'Last Name is required', check: (value) => !value.trim() },
    { field: 'Email', message: 'Email is required', check: (value) => !value.trim() },
    { field: 'Password', message: 'Password is required', check: (value) => !value.trim() },
    { field: 'Terms', message: 'You must agree to the terms', check: () => !termCheckBox.current.checked },
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
   
    const errors = {};
    validationRules.forEach((rule) => {
      const { field, message, check } = rule;
      if (check(inputValues[field])) {
        errors[field] = message;
      }
    });

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setErrors({});

      try {
        const response = await fetch(userUrl);
        if (response.ok) {
          const users = await response.json();
          setAllusers(users);

          const emailExists = users.some((user) => user.Email === inputValues.Email);
          if (emailExists) {
            setEmailexist(!Emailexist)
            errors.Email = 'Email already exists';
            setErrors(errors);


            Swal.fire({
              title: 'Email Already Exists',
              text: 'If you already have an account, please go to the login page.',
              icon: 'warning',
              confirmButtonText: 'OK',
            });
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
            const postResponse = await fetch(userUrl, {
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
    <div className="flex justify-center py-10 px-10 bg-slate-950 overflow-hidden ">
      <div className="card ">
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
            {errors.FirstName && <p className='text-red-950'> {errors.FirstName}</p>}
            <input
              type="text"
              name="LastName"
              placeholder="LastName"
              value={inputValues.LastName}
              onChange={handleChange}
            />
            {errors.LastName && <p className='text-red-950'>{errors.LastName}</p>}
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={inputValues.Email}
              onChange={handleChange}
            />
            {errors.Email && <p className='text-red-950'>{errors.Email}</p>}
            <input
              type="password"
              name="Password"
              placeholder="Password"
              value={inputValues.Password}
              onChange={handleChange}
            />
            {errors.Password && <p className='text-red-950'>{errors.Password}</p>}
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="card_terms">
          <input type="checkbox" name="" id="terms"  ref={termCheckBox}/>{' '}
          <span>
            I have read and agree to the <a href="">Terms of Service</a>
          </span>
          {errors.Terms && <p className='text-red-950 text-sm'>{errors.Terms}</p>}

        </div>
      </div>
    </div>
  );
}




