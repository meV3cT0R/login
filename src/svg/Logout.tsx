const Logout : React.FC<{bgColor?:string,className?:string}> = ({bgColor="#e2e8f0",className=""}) => {
    return (
        <svg
            viewBox="-100 -100 200 200"
            className={"mx-auto " +className}
            style={{
                backgroundColor:bgColor
            }}
            fill={bgColor}
        >
            <circle
                cy="10"
                r="70"
                fill="none"
                stroke="black"
                strokeWidth={25}
            />
            <polygon
                points="-30 -100 -30 0 30 0 30 -100"
                fill={bgColor}
            />
            <path
                d="
                        M 0 0 
                        L 0 -80
                    "
                stroke="black"
                strokeWidth="25"
                strokeLinecap="round"
            />
        </svg>
    )
}

export default Logout;