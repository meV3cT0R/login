import { Link } from "react-router-dom";
import Sad from "../svg/emoji/Sad";

import "./css/NotFound.css"
/*
    Not found page for routes that doesn't exist
*/
const NotFound = ()=> {
    return (
        <div className="bg-slate-200 w-full min-h-[100vh]">
            <div className="w-[600px]  mx-auto space-y-5 absolute translate-x-[-50%] left-[50%] translate-y-[-50%] top-[40%]">

                <Sad className="w-[400px] h-[400px] mx-auto shake-it"/>
                <h1 className="text-center text-red-500 text-5xl font-bold">
                    <span className="text-6xl">404 </span>- <span>Page Not Found </span>
                </h1>
                <p className="text-center text-gray-500 text-xl ">
                    The page you looked for does not exist
                </p>
                <div className="text-xl text-blue-500 text-center hover:underline hover:text-blue-700 duration-300">

                    <Link to={"/login"} > Go to Home Page </Link>
                </div>
            </div>

        </div>
    )
}

export default NotFound;