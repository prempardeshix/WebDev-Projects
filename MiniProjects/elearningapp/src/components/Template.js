import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Template = ({
  title,
  desc1,
  desc2,
  image1,
  image2,
  formType,
  setIsLoggedIn,
}) => {
  return (
    <div>
      <div>
        <div>
          <h1>{title}</h1>
          <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
          </p>

          {formType === "signup" ? (
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}

          <div>
            <p>OR</p>
            <div></div>
          </div>

          <button class="flex">
            <img class="h-[15px] w-[15px]" src={image1} alt="" />
            <p>Sign in with Google</p>
          </button>
        </div>
      </div>
      <div>
        <img src={image2} alt="" />
      </div>
    </div>
  );
};

export default Template;
