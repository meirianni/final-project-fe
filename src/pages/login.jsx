import React from "react";

function Login() {
  return (
    <div id="login">
      <div className="form-login">
        <h1>Welcome back </h1>
        <h3>Welcome back ! Please enter your details</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username / Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email/username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="password"
            />
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
          <hr className="hr" />
          <h3>@ copyright 2022</h3>
        </form>
      </div>

      <div className="hero-login"></div>
    </div>
  );
}

export default Login;
