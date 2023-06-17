import React, { useState } from "react";
import CountUp from "react-countup";
import { TbTruckDelivery } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { FaCarCrash } from "react-icons/fa";
import ScrollTrigger from "react-scroll-trigger";
import { Slide } from "react-awesome-reveal";

const CountSection = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCountOn(true)}
      onExit={() => setCountOn(false)}
    >
      <div className="mb-8 mt-12">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-easing="ease-in-sine"
            className="bg-white px-10 py-3 rounded-md text-center mb-4 md:mb-0"
          >
            {/* <div className=" text-center"  >
              <FaCarCrash className="text-5xl " />
            </div> */}

            {countOn && (
              <CountUp
                className="text-5xl font-extrabold font-sans "
                end={200}
                duration={5}
              />
            )}
            <span className="text-5xl text-red-500 top-40 font-bold">+</span>
            <div className="font-semibold text-3xl">Dance Class</div>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-white px-6 py-3 rounded-md text-center mb-4 md:mb-0"
          >
            {countOn && (
              <CountUp
                className="text-5xl font-extrabold "
                end={70}
                duration={5}
              />
            )}
            <span className="text-5xl text-red-500 top-40 font-bold">+</span>
            <div className="font-semibold text-3xl">Instructors</div>
          </div>
          <div
            data-aos="zoom-out-down"
            className="bg-white px-8 py-3 rounded-md text-center mb-4 md:mb-0"
          >
            {countOn && (
              <CountUp
                className="text-5xl font-extrabold"
                end={24}
                duration={5}
              />
            )}
            <span className="text-5xl text-red-500 top-40 font-bold">+</span>
            <div className="font-semibold text-3xl">Total Branch</div>
          </div>
          <div
            data-aos="fade-left"
            className="bg-white px-8 py-3 rounded-md text-center"
          >
            {countOn && (
              <CountUp
                className="text-5xl font-extrabold"
                end={130}
                duration={5}
              />
            )}
            <span className="text-5xl text-red-500 top-40 font-bold">+</span>
            <div className="font-semibold text-3xl">Happy Clients</div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CountSection;
