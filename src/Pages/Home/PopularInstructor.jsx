import axios from "axios";
import React, { useEffect, useState } from "react";
import PopularInstructorCard from "./PopularInstructorCard";
import { Fade } from "react-awesome-reveal";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const url = "https://server-eight-hazel.vercel.app/instructors";

    axios
      .get(url)
      .then((res) => {
        setInstructors(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="mt-12">
      <div className="text-center ">
        <h2 className="text-lg uppercase text-red-400 font-bold">
      
          <Fade left >
      
            ------ Our Instructors -----
          </Fade>
        </h2>
        <p className="mt-2 mb-3  uppercase text-slate-80 font-bold text-3xl">
          Here all of our best Instructors
        </p>
      </div>
      <div  className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-6 pt-4">
        {instructors.map((instructor) => (
          <PopularInstructorCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
