import React, { useState } from "react";
import "../signup/Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/index.js";

export const Signin = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1000/api/v1/signin", Inputs)
      .then((response) => {
        if (response.data.message === "Please Sign up first") {
          alert(response.data.message);
        } else {
          sessionStorage.setItem("id", response.data.others._id);
          dispatch(authActions.login());
          history("/todo");
        }
      });
  };
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-5">
              <input
                className="p-2 my-3 input-signup"
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={change}
                value={Inputs.email}
              />
              <input
                className="p-2 my-3 input-signup"
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={change}
                value={Inputs.password}
              />
              <button className="btn-signup p-2" onClick={submit}>
                Sign In
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-left column d-flex justify-content-center align-items-center">
            <h1 className="text-center sign-in-heading ">
              Sign <br /> In
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
