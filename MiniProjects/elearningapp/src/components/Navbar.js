import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.jpg";
import { toast } from "react-toastify";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-evenly">
      <NavLink to="">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </NavLink>
      <nav>
        <ul className="flex gap-3 ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex  gap-2 ml-5 mr-3">
        {!isLoggedIn && (
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
        )}
        {!isLoggedIn && (
          <NavLink to="/signup">
            <button>Signup</button>
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/">
            <button
              onClick={() => {
                toast.success("Logged Out!", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                setIsLoggedIn(false);
              }}
            >
              Logout
            </button>
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/dashboard">
            <button>Dashboard</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
