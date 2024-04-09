import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <>
      <header className="bg-white shadow-lg">
        <nav className="w-[85%] h-20 m-auto inherit flex items-center justify-between md:w-[90%]">
          <a href="/">
            <img src={logo} alt="logo" className="md:w-[80%]" />
          </a>
          <ul className="flex gap-8 sm:hidden md:hidden">
            <li className="text-[#0D081B]">About us</li>
            <li className="text-[#0D081B]">Pricing plan</li>
            <li className="text-[#0D081B]">Blog </li>
            <li className="text-[#0D081B]">FAQs</li>
            <li className="text-[#0D081B]">Contact us</li>
          </ul>
          <ul className="flex gap-8 sm:hidden md:hidden">
            <li className="p-4 text-[#2E3192] bg-[#C4D5EE33] font-semibold rounded-lg">
              Sign in
            </li>
            <li className="p-4 text-[#fff] bg-[#2E3192] font-semibold rounded-lg">
              Get Started
            </li>
          </ul>

          {/* MOBILE/TABLET */}
          <div
            className={
              open
                ? "fixed left-0 top-0 w-[60%] h-full bg-white shadow-2xl ease-in-out duration-500"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <a href="/">
              <img src={logo} alt="logo" className="mt-4 ml-6" />
            </a>
            <ul className="pt-8 ml-6">
              <li className="text-[#0D081B] mb-4 text-[18px]">About us</li>
              <li className="text-[#0D081B] mb-4 text-[18px]">Pricing plan</li>
              <li className="text-[#0D081B] mb-4 text-[18px]">Blog </li>
              <li className="text-[#0D081B] mb-4 text-[18px]">FAQs</li>
              <li className="text-[#0D081B] mb-4 text-[18px]">Contact us</li>
            </ul>
            <ul className="ml-6">
              <li className="p-4 text-[#2E3192] bg-[#C4D5EE33] font-semibold rounded-lg w-fit mb-6 text-[18px]">
                Sign in
              </li>
              <li className="p-4 text-[#fff] bg-[#2E3192] font-semibold rounded-lg w-fit text-[18px]">
                Get Started
              </li>
            </ul>
          </div>
          <div className="lg:hidden text-[#2E3192]" onClick={toggle}>
            <FontAwesomeIcon icon={open ? faClose : faBars} size="lg" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
