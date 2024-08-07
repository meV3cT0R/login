import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../hooks/ContextHook";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../svg/util/Loading";
import Eye from "../svg/Eye";

const NewLogin = () => {
    const { setAuth } = useGlobalContext();
    const userRef = useRef<HTMLInputElement>(null)
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [errMsg, setErrMsg] = useState<string>("")
    const [lding,setLding] = useState<boolean>(false);
    const navigate = useNavigate();

    // focus the username input field when component is loaded
    useEffect(() => {
        if (userRef.current)
            userRef.current.focus()
    }, []);

    // clears the error everytime user change the value of either username or password
    useEffect(() => {
        setError(false);
        setErrMsg("");
    }, [username, password]);


    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setLding(true)
        await axios.post("https://login.dataconstruct.com.np/login",
            JSON.stringify({ username, password }),
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res=>{
                if(setAuth){ // check if setAuth function exist cause it could be null
                    setAuth({
                        username,
                        token:res.data.token
                    })

                    // add response to the local storage to later retrieve it for maintaining users's session
                    // this is for demo
                    // It is unsecure to store auth tokens in the local storage
                    localStorage.setItem("auth", JSON.stringify({
                        username,
                        token:res.data.token
                    })) 
                      
                    navigate("/welcome",{
                        replace:true
                    })
                }else {
                    setError(true)
                    setErrMsg("Something Went Wrong!");
                }

                    
            }).catch(err=> {
                setError(true)

                if(err.response.status==401) {
                    setErrMsg(err.response.data.error)
                }else {
                    setErrMsg("Something Went Wrong!");
                }
            }).then(_=>setLding(false))
    }

    return <div className="bg-slate-200 w-full h-[100vh] relative ">

        <div className="absolute  w-[90%] md:w-[500px] mx-auto  left-[50%] translate-x-[-50%] top-[40%] translate-y-[-50%] ">
            <h1 className="text-center text-3xl font-bold text-purple-600">
                We're glad you're here!
            </h1>
            <h1 className="text-center text-purple-500 text-xl font-bold mb-5">Please login to continue</h1>

            <form autoComplete="off" className="space-y-5 px-10 py-5 border border-2 shadow-lg bg-white/35 rounded-xl">
                <input 
                name="username"
                    type="hidden"
                    autoComplete="false"
                />
                <div>
                    <p className="text-red-500 text-center text-xl"> {error && errMsg && errMsg}</p>
                </div>
                <div>
                    <div>

                        <div className={"relative pt-10 "}>
                            <input
                                autoComplete="new-password"
                                ref={userRef}
                                type={"text"}
                                className={"px-2 bg-transparent w-full focus:border-purple-700 duration-300 focus:outline-none outline-none border-b-2 peer pt-2 text-lg "}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setUsername(e.target.value)
                                }}
                                value={username}
                            />
                            <label className={`px-2 absolute text-gray-500 z-[-10] peer-focus:text-purple-700 peer-focus:-translate-y-[35px] left-0 duration-300 text-xl bottom-0 ${username.trim() != '' && "-translate-y-[35px] text-purple-700" || ""}`}>Username</label>

                        </div>
                    </div>

                    <div>

                        <div className={"relative pt-10 flex items-center"}>
                            <input
                                autoComplete="new-password"
                                type={showPassword && "text" || "password"}
                                className={"px-2 bg-transparent w-full focus:border-purple-700 duration-300 focus:outline-none outline-none border-b-2 peer pt-2 text-lg "}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setPassword(e.target.value)
                                }}
                                value={password}
                            />
                            <label className={`px-2 absolute text-gray-500 z-[-10] peer-focus:text-purple-700 peer-focus:-translate-y-[35px] left-0 duration-300 text-xl bottom-0 ${password.trim() != '' && "-translate-y-[35px] text-purple-700" || ""}`}>Password</label>
                            <div className="cursor-pointer"
                            onClick={()=>setShowPassword(!showPassword)}
                            >
                                <Eye show={showPassword}/>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button type="submit"
                            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                handleSubmit(e)
                            }}
                            className="w-full capitalize md:w-[150px] mt-10 text-xl border-2 border-purple-700 px-5 py-2  rounded text-purple-700 hover:bg-purple-700 hover:text-white duration-300">
                            {lding &&
                                <Loading height="28px"/>
                            ||
                            "Log in"
                            }
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>

}

export default NewLogin;