import React, { useState } from "react";
import Navbar from "../components/Navbars/CalendarNavbar";
import soup from "../Assets/Images/soups.jpg";

const Calendar = () => {
  return (
    <>
      <Navbar />
      <div className=" w-full h-[20vh]"></div>
      <div className="lg:h-full">
        <div className="w-full h-[150vh] bg-[#857B6A]">
          <div className="mx-auto flex flex-col justify-center  shadow-xl bg-white">
            <p className=" text-center text-xl font-bold pb-6">
              Upcoming Events
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-8 text-center py-8 pb-2">
            <div className="rounded-3xl bg-white">
              <p>JUNE</p>
              <p>17th</p>
              <p>2022</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
