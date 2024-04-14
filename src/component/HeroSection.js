"use client";
import React from "react";
import Magnetic from "./ui/Magnetic";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#bannerh1", {
      y: 300,
      opacity: 0,
    });

    tl.from("#herorightimg div img", {
      scale: 0,
      stagger: true,
    });
    tl.from(".interfont", {
      y: 400,
      opacity: 0,
    });
  });
  return (
    <>
      <div
        id="herosection"
        className="h-auto w-full flex justify-evenly items-center pt-1 lg:pt-5 flex-wrap pl-5 lg:pl-10 lg:px-32"
      >
        <div id="heroleft" className=" gap-6 lg:gap-11 flex flex-col ">
          <h4 className=" w-40 p-3 px-[-1rem] lg:w-56 lg:py-5 font-bold  text-sm bg-white text-[#f85e9f] rounded-full  flex gap-4  justify-center items-center">
            Explore the world!
            <span>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.7044 4.01898C10.034 4.01898 9.46373 4.4848 9.30365 5.11265H14.6863C14.5263 4.4848 13.956 4.01898 13.2856 4.01898H10.7044ZM16.2071 5.11264H18.1881C20.2891 5.11264 22 6.84428 22 8.97085C22 8.97085 21.94 9.8711 21.92 11.1248C21.918 11.224 21.8699 11.3212 21.7909 11.38C21.3097 11.7354 20.8694 12.0291 20.8294 12.0493C19.1686 13.1632 17.2386 13.947 15.1826 14.3369C15.0485 14.3632 14.9165 14.2934 14.8484 14.1739C14.2721 13.1754 13.1956 12.5253 11.995 12.5253C10.8024 12.5253 9.71586 13.1683 9.12256 14.1678C9.05353 14.2853 8.92346 14.3531 8.7904 14.3278C6.75138 13.9369 4.82141 13.1541 3.17059 12.0594L2.21011 11.3911C2.13007 11.3405 2.08004 11.2493 2.08004 11.1481C2.05003 10.6316 2 8.97085 2 8.97085C2 6.84428 3.71086 5.11264 5.81191 5.11264H7.78289C7.97299 3.6443 9.2036 2.5 10.7044 2.5H13.2856C14.7864 2.5 16.017 3.6443 16.2071 5.11264ZM21.6598 13.3152L21.6198 13.3355C19.5988 14.6924 17.1676 15.5937 14.6163 15.9684C14.2561 16.019 13.8959 15.7861 13.7959 15.4216C13.5758 14.5912 12.8654 14.0443 12.015 14.0443H12.005H11.985C11.1346 14.0443 10.4242 14.5912 10.2041 15.4216C10.1041 15.7861 9.74387 16.019 9.38369 15.9684C6.83242 15.5937 4.4012 14.6924 2.38019 13.3355C2.37019 13.3254 2.27014 13.2646 2.1901 13.3152C2.10005 13.3659 2.10005 13.4874 2.10005 13.4874L2.17009 18.6519C2.17009 20.7785 3.87094 22.5 5.97199 22.5H18.018C20.1191 22.5 21.8199 20.7785 21.8199 18.6519L21.9 13.4874C21.9 13.4874 21.9 13.3659 21.8099 13.3152C21.7599 13.2849 21.6999 13.295 21.6598 13.3152ZM12.7454 17.5583C12.7454 17.9836 12.4152 18.3177 11.995 18.3177C11.5848 18.3177 11.2446 17.9836 11.2446 17.5583V16.2519C11.2446 15.8367 11.5848 15.4924 11.995 15.4924C12.4152 15.4924 12.7454 15.8367 12.7454 16.2519V17.5583Z"
                  fill="#F85E9F"
                />
              </svg>
            </span>
          </h4>
          <h1
            className="text-[10vw] leading-[60px] lg:leading-[82px] lg:text-[3.5vw] font-bold"
            id="bannerh1"
          >
            Travel
            <span className="text-[#f85e9f] ml-2">
              top <br /> destination <br />
            </span>
            of the world
          </h1>
          <p className="text-left text-[18px] interfont">
            We always make our customer happy by providing <br /> as many
            choices as possible
          </p>
          <div id="hero_buttons" className="flex gap-4 mb-28 mt-8">
            <Magnetic>
              <button className="bg-[#5d50c6] text-white rounded-full p-5 flex gap-4 w-44 font-medium justify-center items-center hover:bg-black hover:text-white ">
                Get Started
              </button>
            </Magnetic>
            <Magnetic>
              <button
                className=" bg-white text-black rounded-full p-5 flex gap-4 w-44 font-medium justify-center items-center"
                id="watchdemo_button"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9688 0.5C5.44875 0.5 0.96875 4.98 0.96875 10.5C0.96875 16.02 5.44875 20.5 10.9688 20.5C16.4888 20.5 20.9688 16.02 20.9688 10.5C20.9688 4.98 16.4988 0.5 10.9688 0.5ZM13.9688 12.73L11.0687 14.4C10.7087 14.61 10.3088 14.71 9.9187 14.71C9.5188 14.71 9.1287 14.61 8.76875 14.4C8.04875 13.98 7.61875 13.24 7.61875 12.4V9.05C7.61875 8.22 8.04875 7.47 8.76875 7.05C9.4888 6.63 10.3487 6.63 11.0787 7.05L13.9787 8.72C14.6987 9.14 15.1287 9.88 15.1287 10.72C15.1287 11.56 14.6987 12.31 13.9688 12.73Z"
                    fill="#5D50C6"
                  />
                </svg>
                Watch Demo
              </button>
            </Magnetic>
          </div>
        </div>

        <div id="heroright" className="relative mt-6 lg:mt-0">
          <div
            id="svg_top"
            className="absolute w-30vw top-[-4.5rem] left-0 lg:left-[-7rem] lg:w-[40.20vw]"
          >
            <img src="./images/globleglobe.png" />
          </div>
          <div id="herorightimg" className="flex gap-8 top-10 flex-wrap ">
            <div className="gap-4 lg:gap-8 lg:flex-col flex">
              <img
                src="./images/castle_banner.jpg"
                className="z-10 w-[180px] h-300px lg:w-[272px] lg:h-[300px] rounded-[32px] heroimg"
              />
              <img
                src="./images/travel_banner.jpg"
                className="w-[180px] h-300px lg:w-[272px] lg:h-[300px] rounded-[32px] heroimg z-10"
              />
            </div>
            <div
              className=" lg:m-auto flex items-center justify-center"
              id="right_lastimg"
            >
              <img
                src="./images/gril_banner.jpg"
                className=" ml-16 lg:ml-0 rounded-[32px] w-[220px] h-[270px] lg:h-[400px] lg:w-[272px] z-10 heroimg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
