import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Logo/Madison-logo.svg";
import books from "../Assets/Icons/ic_books4.svg";
import calendar from "../Assets/Icons/ic_calendar.svg";
import contact from "../Assets/Icons/ic_contact.svg";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="absolute top-0 z-50 w-full h-[50px] flex flex-row justify-start items-center m-10 p-10">
      <a href="/">
        <img
          src={logo}
          alt="logo"
          style={{ width: "120px", imageResolution: "100%" }}
        />
      </a>

      {/*Desktop Menu */}
      <ul className="hidden md:flex m-10 text-[#857B6A]">
        <li className="pl-10 text-sm ">
          <Link to="/">About</Link>
        </li>
        <li className="pl-10 text-sm cursor-pointer">
          <Link to="/books">Books</Link>
        </li>
        <li className="pl-10 text-sm">
          <Link to="/calendar">Calendar</Link>
        </li>
        <li className="pl-10 text-sm">
          <Link to="/Contact">Contact</Link>
        </li>
        <li className="pl-10 text-sm">
          <a href="https://www.instagram.com/deborahmadison/" target="_blank">
            <BsInstagram size={20} />
          </a>
        </li>
        <li className="pl-10 text-sm">
          <a
            href="https://www.facebook.com/cookwithdeborahmadison"
            target="_blank"
          >
            <BsFacebook size={20} />
          </a>
        </li>
      </ul>
      {/* Adding the Hamburger Menu */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer flex flex-row justify-start items-end m-20"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile Menu Time*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "fixed top-0 left-0 z-100 w-full h-screen bg-[#E0DDCF] flex flex-col justify-center items-center"
        }
      >
        <div>
          <a href="/">
            <img
              src={logo}
              alt="logo"
              style={{ width: "120px" }}
              className="top-16 left-5 fixed"
            />
          </a>
          <p className="flex  text-xl font-medium">MENU</p>

          <li onClick={() => setNav(false)} className="py-6 text-xl flex">
            <img src={books} alt="book logo" className="h-[25px] px-3" />
            <Link to="/books" className="font-bold">
              Books
            </Link>
          </li>
          <li onClick={() => setNav(false)} className="py-6 text-xl flex">
            <img src={calendar} alt="book logo" className="h-[25px] px-2" />
            <Link to="/calendar" className="font-bold">
              Calendar
            </Link>
          </li>
          <li onClick={() => setNav(false)} className="py-6 text-xl flex">
            <img src={contact} alt="book logo" className="h-[30px] px-2" />
            <Link to="/Contact" className="font-bold">
              Contact
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
