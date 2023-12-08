import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import validation from "../SignUp/Validation";
import { useNavigate } from "react-router-dom";
import "./Signin.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import Inputs from "../Inputs/Input";

function SignIn() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setError] = useState({});

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      values?.email !== "" &&
      values?.password !== ""
    )
      console.log(errors);
  }, [errors]);

  function handleChange(e) {
    setValues({ ...values, [e.target.id]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(validation(values));

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorCode === "auth/user-not-found") {
          console.log("Invalid email id");
        } else if (errorCode === "auth/wrong-password") {
          console.log("Password is incorrect");
        } else {
          console.error(errorCode, errorMessage);
        }
      });
  };

  return (
    <div className="signin">
      <div className="signinFlex">
        <h3>Sign in for Tripma</h3>
        <div className="close">
          <Link to="/">
            <IoMdClose />
          </Link>{" "}
        </div>
      </div>
      <div className="signinPara">
        <p>
          Tripma is totally free to use. Sign up using your email address or
          phone number below to get started.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="signinInputs">
        <Inputs inputType={"text"} inputValue={values.email} inputId={"email"} inputPlaceHolder={"Email or phone number"} inputOnchange={handleChange}/>

          {/* <input
            type="text"
            id="email"
            value={values?.email}
            placeholder="Email or phone number"
            onChange={handleChange}
          /> */}
          {errors.email && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
                paddingBottom: "20px",
              }}
            >
              {errors?.email}
            </p>
          )}
        <Inputs inputType={"password"} inputValue={values.password} inputId={"password"} inputPlaceHolder={"password"} inputOnchange={handleChange}/>

          {/* <input
            type="password"
            id="password"
            value={values.password}
            placeholder="Password"
            onChange={handleChange}
          /> */}
          {errors?.password && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {errors?.password}
            </p>
          )}
        </div>
        <div className="loginAcntBtn">
          <Button btnContent="Login account" />
        </div>
      </form>
    </div>
  );
}

export default SignIn;
