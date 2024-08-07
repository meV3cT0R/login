const Background = ()=> {
    return (
        <svg
                viewBox="-100 -200 200 400" className=" border border-5 w-full h-[100vh] md:hidden">
                {/* start body of the avatar  */}
                {/* <path
                    d="
                    M -100 300
                    Q -160 50 -20 -100
                    L 20 -100
                    Q 160 50 100 300
                "
                    fill="pink"

                /> */}
                {/* end body of the avatar  */}

                {/* <circle
                    cy="-100"
                    r="50"
                    fill="pink"
                />

                <circle
                    cy="-120"
                    cx="-20"
                    r="5"
                />
                <circle
                    cy="-120"
                    cx="20"
                    r="5"
                />
                {
                    error ||
                    <>
                        <circle cx="-30" cy="-90" r="7" fill="red" className="blush" stroke="none" />
                        <circle cx="30" cy="-90" r="7" fill="red" className="blush" stroke="none" />
                    </>
                }
                {
                    error &&
                    <path d="
                    M -10, -70
                    Q 0,-90 10,-70
                    " fill="none" stroke="black" strokeWidth="2" id="lips" />
                    ||
                    <path d="
                    M -10, -70
                    Q 0,-55 10,-70
                    " fill="none" stroke="black" strokeWidth="2" id="lips" />
                }

                <path
                    d="
                    M 30 -140
                    Q 28 -155 40 -160

                "
                    fill="NONE"
                    strokeWidth="2"
                />

                <circle
                    cx="40"
                    cy="-160"
                    r="5"
                />
                <path
                    d="
                    M -30 -140
                    Q -28 -155 -40 -160

                "
                    fill="NONE"
                    strokeWidth="2"
                />

                <circle
                    cx="-40"
                    cy="-160"
                    r="5"
                /> */}
                {/* {/*  start hand component  */}
                {/* start right hand */}
                {/* <circle
                    cx="50"
                    cy="100"
                    r="25"
                    fill="white"
                />
                <path
                    d="M 65 80
                    Q 85 50 82 -10
                "
                    stroke="black"
                    fill="none"
                />
                <path
                    d="M 65 120
                    Q 105 145 107 60
                "
                    stroke="black"
                    fill="none"
                /> */}
                {/* {/* end right hand  */}
                {/* start left hand*/}
                {/* <circle
                    cx="-50"
                    cy="100"
                    r="25"
                    fill="white"
                />
                <path
                    d="M -65 80
                    Q -85 50 -82 -10
                "
                    stroke="black"
                    fill="none"
                />
                <path
                    d="M -65 120
                    Q -105 145 -107 60
                "
                    stroke="black"
                    fill="none"
                /> */}
                {/* {/* end left hand */}

                {/* end hand component  */}


                <defs>
                    <g id="sun">
                        <line id="ray" y1="25" y2="35" stroke="yellow" strokeWidth="5" strokeLinecap="round" />

                        <use href="#ray" transform="rotate(45)" />
                        <use href="#ray" transform="rotate(90)" />
                        <use href="#ray" transform="rotate(135)" />
                        <use href="#ray" transform="rotate(180)" />
                        <use href="#ray" transform="rotate(225)" />
                        <use href="#ray" transform="rotate(270)" />
                        <use href="#ray" transform="rotate(315)" />
                        <circle r="20" fill="yellow" />
                    </g>

                    <g id="cloud">
                        <circle id="cloud-part" cx="-20" r="20" fill="white" />

                        <use href="#cloud-part" transform="translate(30 -5)" />
                        <use href="#cloud-part" transform="translate(10 -10)" />
                        <use href="#cloud-part" transform="translate(20 10)" />
                        <use href="#cloud-part" transform="translate(40 0)" />
                    </g>
                    <g id="tree">
                        <polygon points="-10,0 0,-40 10,0" fill="darkgreen" />
                        <line y2="10" stroke="brown" strokeWidth="5" />
                    </g>
                </defs>

                <use
                    href="#sun"
                    x="-60"
                    y="-150"
                />

                <use
                    href="#cloud"
                    x="-40"
                    y="-130"
                />
                <use
                    href="#cloud"
                    x="50"
                    y="-100"
                />
                <g fill="green">

                    <path
                        d="
                        M -100 180
                        Q 0 140 100 180
                    "
                    />
                    <polygon
                        points="-100 179 100 179 500 500 -500 500"

                    />
                </g>

                <use
                    href="#tree"
                    x="-80"
                    y="170"
                />
                <use
                    href="#tree"
                    x="5"
                    y="140"
                    transform="scale(1.1)"
                />

                <use
                    href="#tree"
                    x="70"
                    y="220"
                    transform="scale(0.8)"
                />

            </svg>
    )
}

export default Background;