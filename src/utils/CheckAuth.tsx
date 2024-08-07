import React from "react";
import { useGlobalContext } from "../hooks/ContextHook";
import { Navigate } from "react-router-dom";

const CheckAuth : React.FC<{children:React.ReactNode}>= ({children})=> {
    const {auth}  = useGlobalContext();

    return (
        <>
            {auth!=null && children || <Navigate to="/" replace/>}
        </>
    )
}

export default CheckAuth;