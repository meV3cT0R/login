import { useContext } from "react"
import { GC } from "../utils/GlobalContext"

export const useGlobalContext = ()  => {
    return useContext(GC);
}

