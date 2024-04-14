import React from "react";

const Ourservices = () => {
  return (
    <>
      <div
        id="ourservices"
        className=" w-full h-auto lg:h-[443px] flex flex-wrap  items-center justify-between lg:pl-[10rem] relative lg:mt-16 mt-[25rem]"
      >
        <div id="ourservices_left" className=" lg:pl-8   ">
          <h4 className=" text-left text-lg lg:text-[23px] text-[#f85e9f] font-bold">
            SERVICES
          </h4>
          <h2 className=" text-[30px] lg:text-[44px] font-bold">
            Our top value <br /> categories for you
          </h2>
        </div>
        <div id="ourservices_right" className=" w-full">
          <div
            id="right_card1"
            className="flex flex-col items-center justify-center w-[150px] h-80 lg:w-[18.2vw] lg:h-[48vh] "
          >
            <img
              src="./images/card1imgdes.png"
              className="w-16 h-16 mb-5 lg:mb-12"
            />
            <h3 className="text-lg lg:text-2xl font-bold mb-6">
              Best Tour Guide
            </h3>
            <p className="text-normal lg:text-lg font-normal text-center">
              What looked like a small <br /> patch of purple grass, <br />
              above five feet.
            </p>
          </div>
          <div
            id="right_card2"
            className="flex flex-col items-center justify-center w-[150px]  h-80  lg:w-[18.2vw] lg:h-[48vh] "
          >
            <img
              src="./images/card2imgeasy.png"
              className="w-16 h-16 mb-5 lg:mb-12"
            />
            <h3 className="text-lg lg:text-2xl font-bold mb-6">Easy Booking</h3>
            <p className="text-normal lg:text-lg font-normal text-center">
              Square, was moving <br /> across the sand in their <br />
              direction.
            </p>
          </div>
          <div
            id="right_card3"
            className="flex flex-col items-center justify-center  w-[150px] h-80 lg:w-[18.2vw] lg:h-[48vh]"
          >
            <img
              src="./images/card3imgcloudy.png"
              className="w-16 h-16 mb-5 lg:mb-12"
            />
            <h3 className="text-lg lg:text-2xl font-bold mb-6">
              Weather Forecast
            </h3>
            <p className="text-normal lg:text-lgfont-normal text-center">
              What looked like a small <br /> patch of purple grass, <br />
              above five feet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ourservices;
