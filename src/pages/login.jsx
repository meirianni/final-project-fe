import React from "react";

function Login() {
  return (
    <div className="row">
      <div
        className="col-xs-12 col-sm-12 col-md-12 col-lg-6 px-5 py-5"
        id="login"
      >
        <h1>Welcome back </h1>
        <h3>Please enter your details</h3>
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
              placeholder="Enter your email"
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
