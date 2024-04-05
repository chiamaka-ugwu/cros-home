import React from "react";
import Header from "../Components/Header";
import Input from "../Components/Input/Input";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  const inputStyle =
    "border-primary input px-[10px] py-[11px] text-xs border-2 rounded-[5px] focus:outline-none placeholder:text-black/25";
  return (
    // <div className="font-roboto">
    //   <Header />
    //   <div className="flex flex-col justify-center items-center ">
    //     <p className="text-[40px] font-semibold max-[600px]:text-[30px]">
    //       Sign up
    //     </p>
    //     <p className="text-secondary mb-2 max-[600px]:text-[14px]">
    //       Please create an account to get started
    //     </p>
    //     <div className="flex flex-col justify-center items-center">
    //       <div className="flex justify-between space-x-2 items-center">
    //         <Input
    //           className={inputStyle}
    //           type={"text"}
    //           placeholder={"First Name"}
    //         />
    //         <Input
    //           className={inputStyle}
    //           type={"text"}
    //           placeholder={"Last Name"}
    //         />
    //       </div>
    //       <Input
    //         className={inputStyle}
    //         type={"email"}
    //         placeholder={"Email Address"}
    //       />
    //       <Input
    //         className={inputStyle}
    //         type={"text"}
    //         placeholder={"Matriculation number"}
    //       />{" "}
    //       <Input
    //         className={inputStyle}
    //         type={"password"}
    //         placeholder={"Password"}
    //       />{" "}
    //       <Input
    //         className={inputStyle}
    //         type={"password"}
    //         placeholder={"Confirm password"}
    //       />
    //     </div>
    //   </div>
    // </div>
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
              className=" border-primary input px-[10px] py-[11px] text-xs border-2 rounded-[5px] focus:outline-none placeholder:text-black/25;"
            />
            <Input
              placeholder={"Last name"}
              type={"text"}
              className={
                "border-primary input px-[10px] py-[11px] text-xs border-2 rounded-[5px] focus:outline-none placeholder:text-black/25;"
              }
            />
          </div>
          <Input
            placeholder={"Email address"}
            type={"email"}
            className={
              "border-primary input px-[10px] py-[11px] text-xs border-2 rounded-[5px] focus:outline-none placeholder:text-black/25;"
            }
          />
          <Input
            placeholder={"Matriculation number"}
            type={"text"}
            className={
              "border-primary input px-[10px] py-[11px] text-xs border-2 rounded-[5px] focus:outline-none placeholder:text-black/25;"
            }
          />
          <Input
            placeholder={"Password"}
            type={"password"}
            className={
              "border-primary input px-[10px] py-[11px] text-xs border-2 rounded-[5px] focus:outline-none placeholder:text-black/25;"
            }
          />
          <Input
            placeholder={"Confirm password"}
            type={"password"}
            className={
              "border-primary input px-[10px] py-[11px] text-xs border-2 rounded-[5px] focus:outline-none placeholder:text-black/25;"
            }
          />
        </div>
        <Button className="px-[60px] py-2 rounded-md text-white bg-primary mt-3">
          Sign up
        </Button>
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
