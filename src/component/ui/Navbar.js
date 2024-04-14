"use client";
import React, { useRef, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import Magnetic from "./Magnetic";

const navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navicon = useRef();
  const afternav = useRef();
  const handleicon = () => {
    if (!toggle) {
      afternav.current.style.left = "0%";
      setToggle(!toggle);
    } else {
      afternav.current.style.left = "-100%";
      setToggle(!toggle);
    }
  };

  return (
    <>
      <div
        className=" w-full h-[100vh] bg-white fixed left-[-100%] ease-in-out duration-500 z-40  "
        id="afternav"
        ref={afternav}
      >
        <div className="text-4xl mt-[50%] ml-[25%] mb-[5rem] ">
          <h1 className="p-5 text-black">Home</h1>
          <h1 className="p-5 text-[#19182562]">Discover</h1>
          <h1 className="p-5 text-[#19182562]">Special Deals</h1>
          <h1 className="p-5 text-[#19182562]"> Contact</h1>
        </div>
        <div className=" flex  justify-center items-center gap-5">
          <button className="rounded-3xl bg-white w-[10rem] h-[4rem] border">
            Login
          </button>
          <button className="rounded-3xl bg-[#5d50c6] h-[4rem] w-[10rem] text-white ">
            Sign Up
          </button>
        </div>
      </div>
      <div
        id="navbar"
        className="flex items-center justify-between h-[113px] text-lg mb-16 w-full px-10"
      >
        <div id="logo_navbar" className="flex">
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.55273 4.09787C7.12207 5.09823 5.82837 6.28098 4.70532 7.6124C9.29462 7.18633 15.1252 7.88204 21.8944 11.2667C29.123 14.8809 34.9438 15.0031 38.9948 14.2217C38.6272 13.1088 38.1644 12.0392 37.6163 11.0224C32.979 11.5115 27.034 10.8641 20.1056 7.39998C15.706 5.20018 11.8278 4.29401 8.55273 4.09787ZM34.9074 7.16665C31.2453 3.075 25.9234 0.5 20 0.5C18.2605 0.5 16.5727 0.722107 14.9637 1.13948C17.1429 1.73409 19.4579 2.60399 21.8944 3.82227C26.967 6.35853 31.3464 7.17516 34.9074 7.16665ZM39.8609 18.1281C34.9669 19.0945 28.2088 18.896 20.1056 14.8444C12.53 11.0566 6.50043 11.1043 2.4339 12.008C2.224 12.0546 2.01904 12.1036 1.81903 12.1546C1.28662 13.3125 0.861634 14.5301 0.556702 15.7945C0.882386 15.7075 1.21893 15.6248 1.56616 15.5476C6.49957 14.4513 13.4701 14.4989 21.8944 18.7111C29.4701 22.4989 35.4996 22.4512 39.5662 21.5475C39.7055 21.5166 39.8428 21.4846 39.9778 21.4516C39.9926 21.1363 40 20.819 40 20.5C40 19.6975 39.9528 18.906 39.8609 18.1281ZM39.3248 25.6723C34.4783 26.5196 27.917 26.1944 20.1056 22.2888C12.53 18.501 6.50043 18.5487 2.4339 19.4524C1.53125 19.6529 0.719239 19.8972 0.00293 20.1551C0.000977 20.2698 0 20.3848 0 20.5C0 31.5457 8.95429 40.5 20 40.5C29.2571 40.5 37.0453 34.2109 39.3248 25.6723Z"
              fill="url(#paint0_linear_832_822)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_832_822"
                x1="36"
                y1="43.7"
                x2="-3.73321"
                y2="36.0931"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5D50C6" />
                <stop offset="1" stop-color="#F85E9F" />
              </linearGradient>
            </defs>
          </svg>
          <p
            className=" flex item-center justify-center mt-2 font-black text-2xl"
            id="navlogotitle"
          >
            Travlog
          </p>
        </div>
        <div id="tags_navbar">
          <ul className="flex gap-16 font-bold">
            <li className="text-black">Home</li>
            <li className="text-[#19182562]">Discover</li>
            <li className="text-[#19182562]">Special Deals</li>
            <li className="text-[#19182562]">Contact</li>
          </ul>
        </div>
        <div id="auth_navbar" className="gap-6 flex">
          <Magnetic>
            <button className=" rounded-xl h-12 w-[80px] navbutton font-bold text-sm">
              Login
            </button>
          </Magnetic>
          <Magnetic>
            <button
              id="navbar_signup"
              className="bg-[#5d50c6] navbutton  text-white w-20 font-bold"
            >
              Sign Up
            </button>
          </Magnetic>
        </div>
        <span
          className="hidden z-40 fixed right-10"
          id="nav_icon"
          ref={navicon}
          onClick={handleicon}
        >
          <FaBarsStaggered />
        </span>
      </div>
    </>
  );
};

export default navbar;
