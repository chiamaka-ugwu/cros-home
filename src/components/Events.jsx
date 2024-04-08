import React from "react";
import img from "../assets/images/Group 11.png";
import img2 from "../assets/images/Group 12.png";

const Events = () => {
  return (
    <section className="pt-12 mb-20">
      <p className="text-xl font-bold text-center">Events</p>
      <div className="flex flex-wrap w-[90%] m-auto mt-12">
        <div className="relative w-1/2">
          <div>
            <img
              src={img}
              alt="event image"
              className="h-[350px] w-90% mx-auto"
            />
          </div>
          <div className="relative bg-white shadow-xl w-[80%] mx-auto py-12 px-8 z-[1000] rounded-2xl mt-[-5rem]">
            <h3 className="text-xl font-bold mb-4">Convocation Ceremony</h3>
            <p>
              Special Invitation to the 34th Convocation Ceremony of the
              University of Port Harcourt. <br />
              <br /> DATE: 23rd - 24th February, 2024. <br />
              <br />
              TIME: 10:00A.M <br />
              <br /> VENUE: New Convocation Arena CAMPUS: Abuja Campus
            </p>
          </div>
        </div>

        <div className="relative w-1/2">
          <img
            src={img2}
            alt="event image"
            className="h-[350px] w-90% mx-auto"
          />
          <div className="relative  bg-white shadow-xl w-[80%] mx-auto py-12 px-8 z-[1000] rounded-2xl mt-[-5rem]">
            <h3 className="text-xl font-bold mb-4">Matriculation Ceremony</h3>
            <p>
              Special Invitation to the 45th Matriculation Ceremony of the
              University of Port Harcourt. <br />
              <br /> DATE: 3rd March, 2024. <br />
              <br />
              TIME: 10:00A.M <br />
              <br /> VENUE: New Convocation Arena CAMPUS: Abuja Campus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
