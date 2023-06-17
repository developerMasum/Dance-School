import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const [, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = "https://server-eight-hazel.vercel.app/classes";
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setClasses(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleSelect = (cls) => {
    if (user && user.email) {
      const orderItem = {
        itemId: cls._id,
        email: user.email,
        name: cls.danceName,
        instructor: cls.instructorName,
        price: cls.price,
        image: cls.image,
        availableSeats: cls.availableSeats,
      };

      axios
        .post("https://server-eight-hazel.vercel.app/carts", orderItem)
        .then((res) => {
          if (res.status === 200) {
            // console.log("error handle", res.data);
            if (res.data.error) {
              Swal.fire({
                position: "center",
                icon: "warning",
                title: "Item already exists in the cart",
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              refetch();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your class has been added to cart successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          }
          
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      {" "}
      <Helmet>
        <title> Flaire | All Courses</title>
      </Helmet>


      <div className="featured-item bg-fixed text-white pt-0 mt-2  ">
           
           <div className="md:flex flex-col justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
             <p className=" font-bold">- Classes -</p>
             <p className="mb-0 pb-0"><small>Most Demandable and Traditional dance Classes</small></p>
           <hr className="bg-red-900 w-72 mb-2" />
               <div className="md:ml-10">
                  <h2 className="text-3xl font-semibold"> Flaire | Classes</h2>
               </div>
           </div>
       </div>

      <div className="grid sm:grid-cols-2 sm:gap-2   md:grid-cols-3 lg:grid-cols-3 pt-16 gap-6">
        {classes.map((cls) => {
          if (cls.status === "approved") {
            return (
              <ClassCard handleSelect={handleSelect} key={cls._id} cls={cls} />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Classes;
