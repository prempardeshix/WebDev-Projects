import React from "react";
import Template from "../components/Template";
import image1 from "../images/google.png";
import image2 from "../images/main.jpg";

const Signup = (props) => {
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Build Skills for today,tomorrow and beyond."
        desc2="Education to future-proof your career."
        image1={image1}
        image2={image2}
        formType="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Signup;
