const Sad : React.FC<{className?:string}>= ({
    className="",
})=> {
    return (
        <svg
        className={className}
        viewBox="-100 -100 200 200"
        fill="rgba(0,0,0,0.1)"
    >
        <circle 
            r="99"
        />
        <ellipse 
            cx="-50"
            cy="-20"
            rx="10"
            ry="20"
            fill="rgba(0,0,0,0.5)"
        />
        <ellipse 
            cx="50"
            cy="-20"
            rx="10"
            ry="20"
            fill="rgba(0,0,0,0.5)"

        />
        <path
            d="
                M -40 60 
                Q 0 0 40 60
            "
            fill="none"
            stroke="rgba(0,0,0,0.5)"
            strokeWidth={2}
            strokeLinecap="round"
        />
        
    </svg>
    )
}

export default Sad;