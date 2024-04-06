import React from "react";

const Nav = () => {
  return (
    <>
      <header className="bg-white shadow-lg">
        <nav className="w-[85%] h-20 m-auto inherit flex items-center justify-between md:w-[90%]">
          <a href="/">
            <h1 className="text-[#0A0893] font-extrabold text-[30px] ">CROS</h1>
          </a>
          <ul className="flex gap-8 sm:hidden md:hidden">
            <li className="text-[#0A0893] font-medium">Home</li>
            <li className="text-[#0D081B]">Events</li>
            <li className="text-[#0D081B]">Create Events</li>
            <li className="text-[#0D081B]">Profile</li>
            <li className="text-[#0D081B]">Sign out</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
