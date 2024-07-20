import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SignupInput,
  SigninInput,
} from "@prempardeshix/medium-common/dist/userZod";
import axios from "axios";
import { BACKEND_URL } from "../config";

function Auth({ type }: { type: "signup" | "signin" }) {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    password: "",
    name: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/users/${type === "signin" ? "signin" : "signup"}`,
        postInputs
      );
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/bulk");
    } catch (e) {
      alert("Failed!");
    }
  }

  return (
    <div className="flex h-screen justify-center flex-col">
      {/* {JSON.stringify(postInputs)} */}
      <div className="flex justify-center">
        <div>
          <div className="px-5">
            <div className="text-4xl font-bold  ">Create an account</div>
            <div className="text-slate-600 mt-2 mb-5 text-center">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
              <Link
                to={type === "signin" ? "/signup" : "/signin"}
                className="pl-2 underline"
              >
                {type === "signin" ? "Sign Up" : "Sign In"}
              </Link>
            </div>
          </div>
          <div>
            <div className={type === "signin" ? "hidden" : "" }>
              <LabelledInput
                label="Name"
                placeholder="Enter your name"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              ></LabelledInput>
            </div>
            <LabelledInput
              label="Email*"
              placeholder="johndoe@gmail.com"
              onChange={(e) => {
                setPostInputs({     
                  ...postInputs,
                  email: e.target.value,
                });
              }}
            ></LabelledInput>

            <LabelledInput
              type={"password"}
              label="Password*"
              placeholder=""
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            ></LabelledInput>
          </div>

          <button
            onClick={sendRequest}
            className="bg-black w-full text-white text-sm font-semibold my-2 py-2.5 px-4 rounded-lg"
          >
            {type === "signup" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}

type labelledInputType = {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: labelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-bold text-black">{label}</label>
      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Auth;
