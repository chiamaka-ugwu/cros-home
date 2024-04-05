import React from "react";
import Header from "../Components/Header";
import Input from "../Components/Input/Input";
import Button from "../Components/Button";

const ForgotPassword = () => {
  return (
    <div className="font-roboto">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-[40px]">Forgot password?</h1>
        <p className="text-secondary text-[13px]">
          Don’t worry, happens to the best of us. <br /> Type your email to
          reset your password.
        </p>
        <div className="my-3">
          <Input
            className={
              "border-primary w-[500px] px-[10px] py-[11px] text-xs border-2 rounded-[5px] focus:outline-none placeholder:text-black/25"
            }
            type={"email"}
            placeholder={"Email"}
          />
          <div className="text-[15px] mt-1 flex space-x-1 justify-end">
            <p>Remembered password? </p>
            <p className="text-primary">Sign in</p>
          </div>
        </div>
        <Button>Send code</Button>
        <div className="text-[13px] flex my-2">
          <p>Don’t have an account?</p>
          <p className="text-primary"> Sign up</p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
