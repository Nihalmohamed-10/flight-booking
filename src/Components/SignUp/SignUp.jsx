import React,{useState,useEffect} from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import validation from "./Validation";
import Inputs from "../Inputs/Input";

function SignUp() {
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
  const toSignIn =()=>{
    navigate("/signin");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(validation(values));

    await createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate("/signin")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            if (errorCode === "auth/email-already-in-use") {
              setError({ email: "The email address is already in use." });
            } else {
              console.error(errorCode, errorMessage);
            }
        });
  };
  return (
    <div className="signup">
      <div className="signupFlex">
        <h3>Sign up for Tripma</h3>
        <div className="close">
          <Link to="/">
            <IoMdClose />
          </Link>{" "}
        </div>
      </div>
      <div className="signupPara">
        <p>
          Tripma is totally free to use. Sign up using your email address or
          phone number below to get started.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="signupInputs">
          {/* <input
            value={values.email}
            id="email"
            type="text"
            placeholder="Email or phone number"
            onChange={handleChange}
          /> */}
          <Inputs inputType={"text"} inputValue={values.email} inputId={"email"} inputPlaceHolder={"Email or phone number"} inputOnchange={handleChange}/>
           {errors.email && (
            <p
              style={{ color: "red", fontSize: "14px", paddingBottom: "20px" }}
            >
              {errors?.email}
            </p>
          )}
          <Inputs inputType={"password"} inputValue={values.password} inputId={"password"} inputPlaceHolder={"password"} inputOnchange={handleChange}/>

          {/* <input
            value={values.password}
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          /> */}
           {errors?.password && (
            <p className="signuperror" style={{ color: "red", fontSize: "14px" }}>{errors?.password}</p>
          )}
        </div>
        <div className="signupCheckBox">
          <input type="checkbox" id="agreeCheckbox" />
          <label for="agreeCheckbox">
            I agree to the{" "}
            <span>
              <a href="#">terms and conditions</a>
            </span>
          </label>{" "}
          <br />
          <input type="checkbox" id="dealAlertsCheckbox" />
          <label for="dealAlertsCheckbox">Send me the latest deal alerts</label>
        </div>
        <div className="createAcntBtn">
          <Button btnContent="Create account" onClick={toSignIn} />
        </div>
        <div className="continueWith">
          <Button btnContent="Continue with Google" />
          <Button btnContent="Continue with Apple" />
          <Button btnContent="Continue with Facebook" />
        </div>
      </form>
    </div>
  );
}

export default SignUp;
