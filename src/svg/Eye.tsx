 const Eye : React.FC<{show:boolean}> = (
    {show}
)=> {
    return (
        <>
        <svg
        height="44"
        width="44"
        viewBox="-22 -22 44 44"
        className="mx-auto max-md:scale-[0.7]"
    >
        <circle
            r="6"
        />
        <path
            d="
                M -15 0
                Q 0 -20 15 0
            "
            fill="none"
            stroke="black"
            strokeWidth="3"
        />

        {
        show &&
            <path
                d="
                    M -17 -12
                    L 15 10 
                "
                stroke="black"
                strokeWidth="3"
            />
        }
    </svg>
    </>

    )
}

export default Eye
