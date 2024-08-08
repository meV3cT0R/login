import { useGlobalContext } from "../hooks/ContextHook";
import Cat from "../svg/emoji/Cat";
import Logout from "../svg/Logout";

const Welcome = () => {
    const { setAuth } = useGlobalContext();
    return (
        <div className="w-full min-h-[100vh] bg-slate-200 space-y-10">
            <div
                className="w-full py-4 lg:py-3 xl:py-8 px-4 md:px-10 shadow-xl flex justify-end bg-slate-100"
            >
                <button
                    className="hover:shadow-lg rounded-xl border border-2 border-black duration-400 p-[5px]"
                    onClick={() => {
                        localStorage.removeItem("auth");
                        if (setAuth)
                            setAuth(null)

                    }}
                >
                    <Logout bgColor="#f1f5f9" className="w-[20px] md:w-[30px] xl:w-[40px]" />
                </button>
            </div>
            <div>

            </div>
            <h1 className="text-7xl font-bold text-center"> Welcome </h1>
            <Cat className="w-[90%] md:w-[400px] md:h-[400px] xl:w-[500px] xl:w-[500px] mx-auto" />
        </div>
    )
}

export default Welcome;