import { Navigate, useLocation } from "react-router";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";

import Loader from "../components/Loader/Loader";
import useInstructor from "../hooks/useInstructor";
import { AuthContext } from "../providers/AuthProvider";



const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <Loader />
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute