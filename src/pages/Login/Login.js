// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import './Login.css';
// import { AuthContext } from '../../context/AuthContext';
// export default function Login() {
//   const [formData, setFormData] = useState({
//     Email: '',
//     Password: '',
//   });
//    const {setIsUserLoggedin , setUserId , setUserInfo} = useContext(AuthContext)
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:3500/users');
//     if (response.ok) {
//       const users = await response.json();
//       const user = users.find((user) => user.Email === formData.Email);
//       if (user && user.Password === formData.Password) {
//         setErrorMessage('');

   

//         localStorage.setItem('userId', user.id)
//         console.log("you have been logged and user data has been saved")
//         navigate('/');
//         setIsUserLoggedin(true)
//         setUserInfo(user)
//         setUserId(user.id)
         
//       } else {

//         setErrorMessage('Invalid email or password.');


//       }
//     } else {
//       console.log('Failed to fetch users.');
//     }
//   };

//   const navigate = useNavigate();

//   return (
//     <>
//       <div className="container">
//         <div className="card">
//           <div className="card_title">
//             <h1>Login</h1>
//           </div>
//           <div className="form">
//             <form id="signup-form" onSubmit={handleFormSubmit}>
//               <input
//                 type="email"
//                 name="Email"
//                 placeholder="Email"
//                 value={formData.Email}
//                 onChange={handleChange}
//               />
//               <input
//                 type="password"
//                 name="Password"
//                 placeholder="Password"
//                 value={formData.Password}
//                 onChange={handleChange}
//               />
//               <button type="submit">Login</button>
//             </form>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//           </div>
//           <div className="card_terms"></div>
//         </div>
//       </div>
//     </>
//   );
// }
