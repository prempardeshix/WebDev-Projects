import { computeHeadingLevel } from "@testing-library/react";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./SignupForm.css";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [accountType, setAccountType] = useState("Student");

  const navigate = useNavigate();

  function showToggler1() {
    setShowPassword1((showPassword1) => (showPassword1 = !showPassword1));
  }

  function showToggler2() {
    setShowPassword2((showPassword2) => (showPassword2 = !showPassword2));
  }

  function changeHandler(event) {
    let { name, value, type } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      setIsLoggedIn(true);
      const finalData = { ...formData, accountType };
      console.log("Account Details:");
      console.log(finalData);
      navigate("/dashboard");
    } else {
      toast.warn("Passwords do not match!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <div>
      <div>
        <button
          className={`${
            accountType === "Student" ? "select" : "unselect"
          } border-2 py-2 px-5 rounded-full trasnition-all duration-200`}
          onClick={() => {
            setAccountType("Student");
          }}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "Instructor" ? "select" : "unselect"
          } border-2  py-2 px-5 rounded-full trasnition-all duration-200`}
          onClick={() => {
            setAccountType("Instructor");
          }}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              placeholder="First Name"
              onChange={changeHandler}
            />
          </label>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              placeholder="Last Name"
              onChange={changeHandler}
            />
          </label>
        </div>
        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            onChange={changeHandler}
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Enter Email"
          />
        </label>
        <div>
          <label>
            <p>
              Create Password<sup>*</sup>
            </p>
            <input
              required
              onChange={changeHandler}
              type={showPassword1 ? "text" : "password"}
              name="password"
              id="password"
              value={formData.password}
              placeholder="Enter Password"
            />
            <span onClick={showToggler1}>
              {showPassword1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
          <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>
            <input
              required
              onChange={changeHandler}
              type={showPassword2 ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Confirm Password"
            />
            <span onClick={showToggler2}>
              {showPassword2 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
