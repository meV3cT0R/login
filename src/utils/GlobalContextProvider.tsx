import { useState } from "react";
import { GC } from "./GlobalContext";
import { Auth } from "../models/Auth";

const AppProvider : React.FC<{children:React.ReactNode}> = ({children})=> {
    let user =null;
    let val = localStorage.getItem("auth");
    if(val!=null)
        user = JSON.parse(val)
    const [auth,setAuth] = useState<Auth |null>(user)

    return (
        <GC.Provider value={{auth,setAuth}}>
                {children}
        </GC.Provider>
    )
}


export default AppProvider;