import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function changeHandler(event) {
    let { value, name, type } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  }

  const [showPassword, setShowPassword] = useState(false);

  function showToggler() {
    setShowPassword((showPassword) => (showPassword = !showPassword));
  }

  function submitHandler(event) {
    toast.success("Logged In.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    event.preventDefault();
    setIsLoggedIn(true);
    navigate("/dashboard");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">
          <p>
            Email Address
            <sup>*</sup>
          </p>
        </label>
        <input
          placeholder="Enter Email"
          onChange={changeHandler}
          required
          value={formData.email}
          type="email"
          name="email"
          id="email"
        />
        <label>
          <p>
            Password
            <sup>*</sup>
          </p>
          <input
            placeholder="Enter Password"
            onChange={changeHandler}
            required
            value={formData.password}
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
          />
          <span onClick={showToggler}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
          <NavLink path="#">
            <p>Forgot Password</p>
          </NavLink>
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default LoginForm;
