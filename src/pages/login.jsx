import React from "react";
import useForm  from '../services/helper'
import authLogin from '../api/auth'
import Swal from '../services/swal'

const Login = (history) => {

  const [{ username, password }, setState] = useForm({
    username: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
      authLogin.login(username, password)
          .then((res) => {            
                if (res.data.status === "success"){    
                  const production =
                      process.env.REACT_APP_FRONTPAGE_URL ===
                      ""
                        ? "Domain = localhost:3000"
                        : "";

                  localStorage.setItem(
                    "mini-pos:token",
                    JSON.stringify({
                     ...res.data.data})                     
                  );

                  const redirect = localStorage.getItem("mini-pos:redirect");
                  const userCookie = {
                    name: username,
                  };

                  const expires = new Date(
                    new Date().getTime() + 7 * 24 * 60 * 60 * 1000
                  );

                  document.cookie = `mini-pos:user=${JSON.stringify(
                    userCookie
                  )}; expires=${expires.toUTCString()}; path:/; ${production}`;

                  Swal.notification(res.data.message, res.data.status);
          
                  window.location = '/admin'
                }else{
                  Swal.notification(res.data.message, res.data.status);
                }
          })
          .catch((err) => {alert(err)})
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
                  required
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
                  required
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
