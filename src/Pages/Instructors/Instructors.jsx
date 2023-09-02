import axios from "axios";
import React, { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";
import Loader from "../../components/Loader/Loader";
import { Helmet } from "react-helmet-async";
import './instructor.css'

const Instructors = () => {
  const [loading, setLoading] = useState(false);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const url = "https://server-eight-hazel.vercel.app/instructors";
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        const uniqueInstructors = removeDuplicateInstructors(res.data);
        setInstructors(uniqueInstructors);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const removeDuplicateInstructors = (instructors) => {
    const uniqueInstructors = [];
    const instructorIds = new Set();

    for (const instructor of instructors) {
      if (!instructorIds.has(instructor._id)) {
        uniqueInstructors.push(instructor);
        instructorIds.add(instructor._id);
      }
    }

    return uniqueInstructors;
  };

  if (loading) {
    return <Loader />;
  }

  return (
 <div>

<div className="featured-item bg-fixed text-white pt-20">
           
            <div className="md:flex flex-col justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
              <p className=" font-bold">- Instructors -</p>
              <p className="mb-0 pb-0"><small>Most Favorite and best Dance Producers</small></p>
            <hr className="bg-red-900 w-64 mb-2" />
                <div className="md:ml-10">
                   <h2 className="text-3xl font-semibold"> Flaire | Instructor</h2>
                </div>
            </div>
        </div>


  
     <div className="grid grid-cols-1 sm:mx-12 lg:grid-cols-3 md:grid-cols-3 gap-6 pt-16">
      <Helmet>
        <title>Flaire | Instructors</title>
      </Helmet>
      {instructors.map((instructor) => (
        <InstructorCard key={instructor._id} instructor={instructor} />
      ))}
    </div>
 </div>
  );
};

export default Instructors;
