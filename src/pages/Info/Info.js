import React, { useContext, useEffect, useState } from "react";
import {AuthContext} from '../../context/authContext'
import Swal from "sweetalert2";

export default function Info() {
  const { userInfo, setUserInfo , userId } = useContext(AuthContext);

  const [FirstName, setFirstName] = useState("");
  const [Email, setEmail] = useState("");

  useEffect(() => {
    setFirstName(userInfo?.FirstName);
    setEmail(userInfo?.Email);
  }, [userInfo]);

  
  const changeUserInfoHandler = () => {

    const newUser = {
      FirstName ,
      Email
    }

    fetch(`http://localhost:3500/users/${userId}` , {
      method : 'PATCH' , 
      headers : {
        'Content-Type' : 'Application/JSON'
      } , 
      body : JSON.stringify(newUser)
    }).then(res => res.json())
    .then(newUserInfo => {
      console.log(newUserInfo)
      setUserInfo(newUserInfo)
    })
    
  };


  const changePasswordHandler = () => {
    Swal.fire({
      title : 'Previous password' ,
      input: 'text',
      icon : 'warning'
    }).then(res => {
      if(res.value !== userInfo.password){
        Swal.fire({
          title : "Previous password is not correct!" , 
          icon : 'error'
        })
        return
      }
      Swal.fire({
        title : 'New Password' , 
        icon : 'info' , 
        input : 'text'
      }).then(res => {
        if(res.value){
          const newUserInfo = {
            password : res.value 
          }

          fetch(`http://localhost:3500/users/${userId}` , {
            method : 'PATCH' , 
            headers : {
              'Content-Type' : 'Application/JSON'
            } , 
            body : JSON.stringify(newUserInfo)
          }).then(res => res.json())
          .then(newUserInfo => {
            setUserInfo(newUserInfo)
            Swal.fire({
              icon : 'success' , 
              title : 'Password Changes Successfully!!'
            })
          })



        }

      })
    })
  }
  return (
    <div className="p-3">
      <h2>User Information</h2>
      <div className="continer">
        <div className="row mt-3">
          <div className="col-md-6 mt-2">
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="username"
                value={FirstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6 mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-6 mt-2">
            <input
              disabled
              type="text"
              className="form-control"
              placeholder="phone"
            />
          </div>
          <div className="col-md-6 mt-2">
            <input
              disabled
              type="text"
              className="form-control"
              placeholder="age"
            />
          </div>
        </div>
        <div className="row">
          <div>
            <button className="btn btn-danger" onClick={changePasswordHandler}>change password</button> <br />
            <button
              className="btn btn-primary "
              onClick={changeUserInfoHandler}
            >
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
