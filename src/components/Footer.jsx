import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="">
        <h1 className="text-center text-[#0A0893] font-bold text-3xl mb-5">
          CROS
        </h1>
        <p className="text-center mb-5">Campus Resource Optimization System</p>
        <ul className="w-[90%] mx-auto">
          <li className="w-[35%] mb-5">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-[#0A0893] mr-4"
            />
            <a href="">
              University of Port Harcourt, East/West Road, PMB 5323 Choba,
              Rivers State, Nigeria
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} className="text-[#0A0893] mr-4" />
            <a href="">(+234) 702-024-2024</a>
          </li>
        </ul>

        <div className="justify-center mt-10 flex gap-6">
          <Link>Home</Link>
          <span>|</span>
          <Link>Events</Link>
          <span>|</span>
          <Link>Create Events</Link>
          <span>|</span>
          <Link>Study space</Link>
          <span>|</span>
          <Link>Profile</Link>
          <span>|</span>
          <Link>Sign out</Link>
        </div>

        <ul className="w-[90%] mx-auto">
          <li className="mb-4">
            <a href="">Terms</a>
          </li>
          <li className="mb-4">
            <a href="">Privacy</a>
          </li>
          <li className="mb-4">
            <a href="">Website feedback</a>
          </li>
        </ul>

        <p className="mt-10 text-center">
          © 2024 Campus Resource Optimization System. All rights reserved.
        </p>
        <div></div>
      </footer>
    </>
  );
};

export default Footer;
