import React from "react";

const ClassCard = ({ singleClass }) => {
  return (
    <div className="transition-all duration-300 transform hover:scale-110">
      <div className="w-full md:w-96 h-96 bg-base-100 shadow-xl rounded-md flex flex-col justify-between mb-12 mx-auto">
        <figure className="h-3/5">
          <img className="h-full w-full object-cover rounded-t-md" src={singleClass.image} alt="Shoes" />
        </figure>
        <div className="p-4">
          <h2 className="text-2xl md:text-3xl text-center mb-4">{singleClass.danceName}</h2>
          <p className="text-center text-gray-500">Instructor: <span className="text-lg md:text-2xl font-thin text-gray-800">{singleClass.instructorName}</span></p>
          <p className="text-center text-gray-500">Current Students: <span className="text-lg md:text-2xl font-thin text-gray-800">{singleClass.currentStudent}</span></p>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
