import { useGlobalContext } from "../hooks/ContextHook";
import Cat from "../svg/emoji/Cat";
import Logout from "../svg/Logout";

const Welcome = () => {
    const { setAuth } = useGlobalContext();
    return (
        <div className="w-full min-h-[100vh] bg-slate-200 space-y-10">
            <div
                className="w-full py-10 px-10 shadow-xl flex justify-end bg-slate-100"
            >
                <button
                    className="hover:shadow-lg  duration-400"
                    onClick={() => {
                        localStorage.removeItem("auth");
                        if (setAuth)
                            setAuth(null)

                    }}
                >
                    <Logout bgColor="#f1f5f9" className="w-[40px]" />
                </button>
            </div>
            <div>

            </div>
            <h1 className="text-7xl font-bold text-center"> Welcome </h1>
            <Cat className="w-[90%] md:w-[500px] md:h-[500px] mx-auto"/>
        </div>
    )
}

export default Welcome;