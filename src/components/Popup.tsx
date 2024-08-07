import { useEffect, useRef } from "react";

const Popup : React.FC<{
    deps: any[],
    msg: string,
    className?: string
}>= ({ deps, msg,className="" }
) => {
    const popRef = useRef<HTMLDivElement>(null);
    const hidePopup = ()=> {
        if (popRef.current) {
            popRef.current.style.opacity = "0";
        }
    }

    useEffect(() => {
        const tid: number = setTimeout(() => {
            hidePopup();
        }, 3000);

        return () => clearTimeout(tid);
    }, [...deps])


    return (
        <div ref={popRef}
            className={"flex items-center top-[15px] w-[90%] absolute md:w-[500px] md:top-[30px] left-[50%] translate-x-[-50%]  py-3 px-2 text-center mx-auto border-2 border-red-500 bg-red-300 rounded-lg text-red-900 error-popup "+ className}>
            <div>
            {msg}
                </div>
                <div className="flex-1"></div>
            <div
                onClick={()=>{
                    hidePopup()
                }}
                className="cursor-pointer"
            >
                <svg
                    width="15"
                    height="15"
                    viewBox="-25 -25 50 50"
                >
                    <path 
                        d="
                            M 25 -25
                            L -25 25
                            M -25 -25
                            L 25 25
                        "
                        stroke="#7f1d1d"
                        stroke-width="10"
                        sroke-linecap="round"
                    />
                </svg>
            </div>
        </div>
    )
}

export default Popup