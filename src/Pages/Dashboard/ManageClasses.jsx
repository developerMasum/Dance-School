import React, { useEffect, useState } from "react";
import ManageClassCard from "./ManageClassCard";
import Swal from "sweetalert2";
import Title from "../../components/Title/Title";

const ManageClasses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://server-eight-hazel.vercel.app/instructorClasses")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
   <div>
     <Title heading=' Manage class'
   subHeading='Added Classes By Instructor'
   />
     <div className="grid grid-cols-4 gap-6 ">
      {data.map((item) => (
        <ManageClassCard key={item._id} item={item} />
      ))}
    </div>
   </div>
  );
};

export default ManageClasses;
