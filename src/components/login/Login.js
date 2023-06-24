import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/MainSlice';
import { useData } from '../../loginusers/userlist';

function Login() {
  let [userDetails, setUserDetails] = useState({ username: "", password: "" })
  const dispatch = useDispatch()
  const loginuser = (e) => { //login users 
    e.preventDefault();

    if (useData.filter((user) => user.username == userDetails.username && user.password === userDetails.password).length) {
      sessionStorage.setItem("loggedIn",true)
      dispatch(loginUser())
    }
    else {
      alert("checkc username or pasword")
    }

  }
  return (
    <>
      <div className="col-lg-6 col-md-6 right-section w-100 h-100">
        <div className="right-content mt-5 text-start ms-5 w-25">
          <h3>Login</h3>
          <p className="welcome-login" >
            Welcome  <span> To Do Systems</span>
          </p>
          <form onSubmit={loginuser}>
            <div className="mb-3 row">
              <label htmlFor="inputEmail" className="col-sm-12 col-form-label">
                Email
              </label>
              <div className="col-sm-12">
                <input
                  className="form-control"
                  required
                  value={userDetails.username}
                  placeholder='Enter username'
                  onChange={(e) => { setUserDetails({ ...userDetails, username: e.target.value }) }}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputPassword" className="col-sm-12 col-form-label">
                Password
              </label>
              <div className="col-sm-12">
                <input
                placeholder='Enter password'
                  type="password"
                  className="form-control"
                  value={userDetails.password}
                  onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
                />
              </div>
            </div>
            <button className='btn btn-primary'> Login</button>

          </form>
        </div>
      </div>



    </>
  );
}

export default Login;