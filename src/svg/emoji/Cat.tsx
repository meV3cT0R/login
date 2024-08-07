const Cat :React.FC<{className:string}> = ({className})=> {
    return (
        <svg
        viewBox="-100 -100 200 200"
        className={className}
    >
        <g
            id="ears"

        >

            <polygon
                points="-60 -20 -70 -100 -25 -46"
            />
            <polygon
                points="60 -20 70 -100 25 -46"
            />
        </g>
        <circle
            r="70"
            cy="19"
            fill="none"
            stroke="black"
            strokeWidth={2}
        />

        <ellipse
            cx="-30"
            rx="10"
            ry="15"
        />
        <ellipse
            cx="30"
            rx="10"
            ry="15"
        />

        <path
            d="
                M -20 50
                Q 0 90 20 50
            "
            stroke="black"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
        />

        <g id="whiskers">

            <path
                d="
                M 30 25 
                L 90 0
            "
                
                stroke="grey"
                strokeWidth={3}
                strokeLinecap="round"
            />
            <path
                d="
                M 30 40 
                L 90 40
            "
                stroke="grey"
                strokeWidth={3}
                strokeLinecap="round"
            />
            <path
                d="
                M 30 55 
                L 90 80
            "
                stroke="grey"
                strokeWidth={3}
                strokeLinecap="round"
            />
        </g>

        <use href="#whiskers" transform="scale(-1,1)"/>
    </svg>

    )
}

export default Cat;