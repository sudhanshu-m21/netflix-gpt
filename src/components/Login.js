import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_small.jpg"
          alt="Baground"
        />
      </div>
      <div className="flex justify-center ">
        <form className="w-3/12 absolute bg-black p-12 bg-opacity-80  text-white mt-20">
          <h1 className="text-white font-bold text-3xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          {!isSignIn && (
            <input
              type="text"
              placeholder="Confirm Password"
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already Registeres Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
