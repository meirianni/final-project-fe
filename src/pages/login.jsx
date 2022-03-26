import React from "react";
import useForm  from '../services/helper'
import authLogin from '../api/auth'

const Login = (history) => {

  const [{ username, password }, setState] = useForm({
    username: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
      authLogin.login(username, password)
          .then((res) => {
                
                console.log(res.data)
                if (res.status === 200){                    
                  localStorage.setItem(
                    "mini-pos:token",
                    JSON.stringify({
                      ...res.data,
                      email: res.email,
                      employeeID: res.id
                    })
                  );
                }else{
                  alert(res.data.data.message)
                }
          })
          .catch((err) => {})

    alert(e)
  }

  return (
    <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 px-5 py-5" id="login">
            <h1>Welcome back </h1>
            <h3>Please enter your details</h3>
            <form onSubmit={submit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Username / Email
                </label>
                <input
                  name="username"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                  onChange={setState}
                  value={username}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="password"
                  onChange={setState}
                  value={password}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
              <hr className="hr" />
              <h3>@ copyright 2022</h3>
            </form>
          </div>

          <div className="col-lg-6"> 
            <div className="hero-login"></div>
          </div>
    </div>
  );
}

export default Login;
