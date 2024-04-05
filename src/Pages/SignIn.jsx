import React from "react";
import Header from "../Components/Header";
import Input from "../Components/Input/Input";
import Button from "../Components/Button";
import microsoft from "../assets/microsoft.svg";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const SignIn = () => {
  const style = { width: "30px", fontSize: "1.5em" };
  return (
    <div className="font-roboto">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <p className="text-[40px] font-semibold max-[600px]:text-[30px]">
          Sign in
        </p>
        <p className="text-secondary mb-2 max-[600px]:text-[14px]">
          Please enter your credentials to continue
        </p>
        <div className="flex flex-col w-6/12 gap-5 max-[600px]:gap-3">
          <Input
            placeholder={"Email address"}
            type={"email"}
            className=" border-primary input px-[10px] py-[11px] text-xs border-2 rounded-[5px] focus:outline-none placeholder:text-black/25;"
          />
          <Input
            placeholder={"Password"}
            type={"password"}
            className={
              "border-primary input px-[10px] py-[11px] text-xs border-2 rounded-[5px] focus:outline-none placeholder:text-black/25;"
            }
          />
          <p className="flex justify-end mb-2 text-primary max-[600px]:text-[14px]">
            Forgot your password?
          </p>
        </div>
        <Button className="px-[15px] py-2 rounded-md text-white bg-primary">
          Sign in
        </Button>
        <div className="space-y-2 mt-2">
          <div className="flex">
            <p>Don’t have an account?</p>
            <Link color="text-primary">Sign up</Link>
          </div>
          <p className="text-center">or sign in with</p>
          <div className="social_icons flex justify-center items-center space-x-3 mt-2">
            <button>
              <FcGoogle style={style} />
            </button>
            <button>
              <img src={microsoft} alt="" style={style} />
            </button>
            <button>
              <BsGithub style={style} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
