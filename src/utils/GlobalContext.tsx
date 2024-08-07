import { createContext, Dispatch, SetStateAction } from "react";
import { Auth } from "../models/Auth";

export const GC = createContext<{
    auth :  Auth |null ,
    setAuth : Dispatch<SetStateAction<Auth|null>> | null,
}>({
    auth:null,
    setAuth : null,
});

