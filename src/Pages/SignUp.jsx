import React from "react";
import Header from "../Components/Header";
import Input from "../Components/Input/Input";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  const inputStyle =
    "border-primary input px-[10px] py-[11px] text-xs border-2 rounded-[5px] focus:outline-none placeholder:text-black/25";
  return (
    <div className="font-roboto">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <p className="text-[40px] font-semibold max-[600px]:text-[30px]">
          Sign up
        </p>
        <p className="text-secondary mb-2 max-[600px]:text-[14px]">
          Please create an account to get started
        </p>
        <div className="flex flex-col w-5/12 gap-5 max-[700px]:gap-3">
          <div className="flex justify-between items-center max-[700px]:flex-col max-[700px]:gap-3 max-[700px]:w-max">
            <Input
              placeholder={"First name"}
              type={"text"}
              className={inputStyle}
            />
            <Input
              placeholder={"Last name"}
              type={"text"}
              className={inputStyle}
            />
          </div>
          <Input
            placeholder={"Email address"}
            type={"email"}
            className={inputStyle}
          />
          <Input
            placeholder={"Matriculation number"}
            type={"text"}
            className={inputStyle}
          />
          <Input
            placeholder={"Password"}
            type={"password"}
            className={inputStyle}
          />
          <Input
            placeholder={"Confirm password"}
            type={"password"}
            className={inputStyle}
          />
        </div>
        <Button>Sign up</Button>
        <div className="space-y-2 mt-2">
          <div className="flex">
            <p>Already have an acount?</p>
            <Link className="text-primary">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
