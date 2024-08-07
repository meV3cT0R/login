import React from "react";
import { useGlobalContext } from "../hooks/ContextHook";
import { Navigate } from "react-router-dom";

const CheckUser : React.FC<{children:React.ReactNode}>= ({children})=> {
    const {auth}  = useGlobalContext();

    return (
        <>
            {auth!=null && <Navigate to="/welcome" replace/> || children }
        </>
    )
}

export default CheckUser;