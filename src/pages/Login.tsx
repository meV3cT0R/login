import { useRef, useState } from "react";
import "./css/Login.css"
import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import Loading from "../svg/util/Loading";
import Eye from "../svg/Eye";
import Pookie from "../svg/avatars/Pookie";
import Background from "../svg/Background";
import { useGlobalContext } from "../hooks/ContextHook";
const Login : React.FC<{}> = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [errMsg, setErrMsg] = useState<string>("");
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [errCount, setErrCount] = useState<number>(0);


    const {setAuth} = useGlobalContext();
    const navigate: NavigateFunction = useNavigate();

    // Clears Error Pop up after 3 second 
    const inputHandlerHelper = () => {
        setError(false)
        setErrCount(0);
    }


    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const shake = () => {
            {
                let right = true;
                let iid = setInterval(() => {
                    if (formRef.current) {
                        if (right) {
                            formRef.current.style.transform = "translate(5px,0)"
                            right = false
                        } else {
                            formRef.current.style.transform = "translate(-5px,0)"
                            right = true

                        }

                    }
                }, 150)
                const tid = setTimeout(() => {
                    clearInterval(iid)
                    if (formRef.current)
                        formRef.current.style.transform = "translate(0,0)"

                }, 500)
                return () => {
                    clearTimeout(tid)
                }
            }
        }
        if (error) {
            setErrCount(errCount + 1);
            shake()
            return
        }
        setErrCount(0);
        const func = async () => {
            setLoading(true);
            await axios.post("https://login.dataconstruct.com.np/login", JSON.stringify({
                username, password
            }), {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                if(setAuth){
                    setAuth({
                        username,
                        token:res.data.token
                    })
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
                
            }).catch(err => {
                setError(true)
                if(err.response.status==401) {
                    setErrMsg(err.response.data.error)
                }else {
                    setErrMsg("Something Went Wrong!");
                }
                shake();
            }).then(_ => setLoading(false))
        }
        func();
    }


    return (
        <div className="bg-[#87CEEB] relative h-full w-full">
            {/* error pop up */}
            {errCount > 0 && error && errMsg && errMsg.trim().length != 0 && <Popup deps={[error, errMsg, errCount]} msg={errMsg} className="max-md:hidden" />}
            {/*  svg for phone  */}
            <div className="md:hidden bg-black/25 w-full h-[100vh] absolute inset-0">
            </div>
            <Background />
            <Pookie errCount={errCount} error={error}/>
            <div className="max-sm:translate-y-[50%] bottom-[50%] md:bottom-[15%]  absolute left-[50%] translate-x-[-50%] w-[90%] shadow-xl md:w-[500px] mx-auto">
                <form ref={formRef} className={`md:bg-white w-full space-y-5  px-5 py-3 rounded-lg shadow-xl border-[5px] border max-md:border-black/25 ${error && "md:border-red-500" || "md:border-white"}`}>
                    <h1 className="text-3xl text-center font-bold text-green-200 md:text-pink-400">
                        Login
                    </h1>

                    {
                        error && errMsg.trim().length != 0 &&
                        <p
                            className="md:hidden text-center text-red-200"
                        >
                            {errMsg}
                        </p>
                    }
                    <input
                        type="text"
                        className="
                        max-md:bg-white/85
                        max-md:outline-none
                        px-2 py-2 border border-2 rounded-lg w-full"
                        placeholder="Username"
                        value={username}
                        onChange={e => {
                            inputHandlerHelper()
                            setUsername(e.target.value)
                        }
                        }
                        autoComplete="new-password"
                    />
                    <div className="flex border border-2 rounded-lg">

                        <input
                            type={showPassword && "text" || "password"}
                            className="
                                max-md:bg-white/85
                                max-md:outline-none
                                px-2 py-2 w-full"
                            placeholder="********"
                            value={password}
                            onChange={e => {
                                inputHandlerHelper()
                                setPassword(e.target.value)
                            }}
                            autoComplete="new-password"
                        />
                        <div 
                        className="md:w-[10%] cursor-pointer max-md:bg-white/85"
                        onClick={()=>setShowPassword(!showPassword)}
                        >
                            <Eye show={showPassword}/>

                        </div>
                    </div>
                    <button
                        disabled={loading}
                        onClick={(e) => handleSubmit(e)}
                        className="disabled:bg-green-200 disabled:md:bg-pink-400 py-2 w-full border border-2 border-green-200 md:border-pink-400 rounded-lg  text-green-200 md:text-pink-400 hover:bg-green-200 md:hover:bg-pink-400 hover:text-green-500 md:hover:text-white duration-300">
                        {loading &&
                            <Loading height="24"/>
                            ||
                            "Submit"
                        }

                    </button>
                </form>
            </div>
        </div>
    )
}
export default Login;