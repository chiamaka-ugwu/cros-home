import React from "react";
import img from "../assets/images/ps hall 1.png";
import img2 from "../assets/images/class.png";
import { faEye, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StudySpaces = () => {
  return (
    <>
      <section className="pt-12 mb-20">
        <div className="flex items-center justify-center gap-8">
          <div className="w-1/3 border-t border-[#000]"></div>
          <p className="text-xl font-bold text-center">Study Spaces.</p>
          <div className="w-1/3 border-t border-[#000]"></div>
        </div>
        <div className="flex flex-wrap w-[90%] m-auto mt-12">
          <div className="relative w-1/2">
            <div>
              <img
                src={img}
                alt="event-img"
                className="h-[350px] w-90% mx-auto"
              />
            </div>
            <div className="relative bg-white shadow-xl w-[80%] mx-auto py-12 px-8 z-[1000] rounded-2xl mt-[-5rem]">
              <h3 className="text-xl font-bold mb-4">PS Hall</h3>
              <p className="mb-8">
                PS Hall is a lecture hall and also available as a study space,
                located in the University of Port Harcourt. <br />
                <br />
                CAMPUS: Abuja Campus. <br />
                <br />
                Opening Hours: 24/7 <br />
              </p>
              <button className="rounded-12 border-[#0A0893] border rounded-lg text-[#0A0893] px-5 py-3">
                View map
              </button>
              <div className="mt-10 flex justify-end items-center">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="text-[#0A0893] mr-2"
                />
                <span className="text-[#0A0893] mr-8">60</span>
                <FontAwesomeIcon icon={faEye} className="text-[#0A0893] mr-2" />
                <span className="text-[#0A0893]">200</span>
              </div>
            </div>
          </div>

          <div className="relative w-1/2">
            <img src={img2} alt="" className="h-[350px] w-90% mx-auto" />
            <div className="relative bg-white shadow-xl w-[80%] mx-auto py-12 px-8 z-[1000] rounded-2xl mt-[-5rem]">
              <h3 className="text-xl font-bold mb-4">PS Classroom</h3>
              <p className="mb-8">
                PS Classrooms are lecture halls and also available as study
                spaces, located in the University of Port Harcourt. <br />
                <br /> CAMPUS: Abuja Campus. <br />
                <br /> Opening Hours: 24/7
              </p>
              <button className="rounded-12 border-[#0A0893] border rounded-lg text-[#0A0893] px-5 py-3">
                View map
              </button>
              <div className="mt-10 flex justify-end items-center">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="text-[#0A0893] mr-2"
                />
                <span className="text-[#0A0893] mr-8">60</span>
                <FontAwesomeIcon icon={faEye} className="text-[#0A0893] mr-2" />
                <span className="text-[#0A0893]">200</span>
              </div>
            </div>
          </div>

          <div className="mt-20 flex justify-end w-full">
            <button className="rounded-12 border-[#0A0893] border rounded-lg text-[#0A0893] px-5 py-3">
              More study spaces
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudySpaces;
