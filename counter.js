import React, { useState } from "react";
import "./boot.css";
import Index from "../index";
//import UserInf from "./user";
import userEvent from "@testing-library/user-event";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <React.Fragment>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <div id="details" alt="User Icon">
              <h4 className="loginStyle">Project LogIn</h4>
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="Name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            ></input>
            <input
              type="password"
              id="password"
              className="fadeIn third"
              placeholder="password"
              autoComplete="on"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            ></input>
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
            ></input>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginForm;
