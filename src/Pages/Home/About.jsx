import React from "react";
import bgPic from '../../../src/assets/images/line-pattern-01.png'
import groupDance from "../../../src/assets/images/the-group-of-modern-ballet-dancers-2021-08-26-17-40-44-utc-1-800x505.jpg";
import {  Slide } from "react-awesome-reveal";
const About = () => {
  return (
    <div className=" sm:pl-5 grid grid-cols-1 sm:gap-10   md:grid-cols-2 lg:grid-cols-2 align-middle items-center mt-12">
      <div>
      <Slide >
      <h6 className="text-xl font-semibold pt-3 pb-3 uppercase text-red-400">Who we are</h6>
        <h2 className="text-4xl font-bold pt-3 pb-3 uppercase">
          BEST DANCE SCHOOL &  <br /> STUDIO SINCE 1992
        </h2>
        <p className="pt-3 pb-2 ">
          This also meant we needed to provide a learning environment run by
          experienced and successful coaches. However, our most important goal
          was to create a welcoming atmosphere and community in which everyone
          feels a sense of belonging.
        </p>
        <button className="btn bg-red-500 text-white font-mono mt-4 ">About us </button>
      </Slide>
      </div>
    <div>
        
    <div className="absolute right-28 md:right-28 lg:right-28">
        <img src={groupDance} alt="" height={'450px'} width={'500px'}/>
      </div>
      <div className="-mt-[16px] ml-5 " >
        <img src={bgPic} alt="" width={'280px'} />

      </div>
    </div>
     
    </div>
  );
};

export default About;
