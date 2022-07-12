import React from "react";
function SignIn() {
  return (
    <>
      <div className="signIn__container">
        <form className="form signin__form">
          <div className="container signin__form-container">
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-lg btn-dark mt-5 ms-1">
              Book
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;
