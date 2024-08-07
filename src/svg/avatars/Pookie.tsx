const Pookie : React.FC<{error:boolean,errCount:number}> = ({error,errCount})=> {
    return (
        <svg viewBox="-250 -250 500 500" className="hidden md:block  mx-auto w-full h-[100vh]">
                {/* start definition of components  */}
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
                </defs>
                {/* {/* end definition of components  */}

                {/* start antenna component */}

                {/* antenna lines   */}
                <path d="
                M -55 -185
                C -55 -185 -45 -195 -85 -230
            " stroke="black" fill="none" strokeWidth="3" />
                <path d="
                M 55 -185
                C 55 -185 45 -195 85 -230
            " stroke="black" fill="none" strokeWidth="3" />


                {/* antenna lines */}

                {/* antenna balls  */}
                <circle cx="-85" cy="-230" r="10" fill="black" />
                <circle cx="85" cy="-230" r="10" fill="black" />
                {/* antenna balls */}

                {/* end antenna component */}

                {/* start avatar's body  */}
                {/* start inner body */}
                {/* <polygon points="-175,500 -50,0 50,0 175,500" fill="pink" />  */}
                {/* end inner body */}

                {/*start curve */}
                <path d="
                M -500 500
                Q -510 120 -50 -120
                L 50 -120
                Q 510 120 500 500

            " stroke="black" strokeWidth="1" fill="pink" />
                {/*  <path d="
                M 175 250
                C 175 250 155 135 50 0
            " stroke="black" strokeWidth="1" fill="pink" /> */}
                {/* end curve*/}

                {/* end avatar's body  */}

                {/* start head */}
                <circle cx="0" cy="-120" r="90" fill={errCount > 5 && "red" || "pink"} stroke="black" strokeWidth="1" />
                {/* end head  */}

                {/* start eyes  */}
                <circle cx="-40" cy="-145" r="10" fill="black" />
                <circle cx="40" cy="-145" r="10" fill="black" />
                {/* end eyes  */}


                {/*start eyebrows  */}
                {
                    errCount > 3 &&
                    <g
                        stroke="black"
                        strokeWidth="4"
                        stroke-linecap="round"
                    >

                        <line
                            x1="-50" y1="-175"
                            x2="-20" y2="-155"
                        />
                        <line
                            x1="50" y1="-175"
                            x2="20" y2="-155"
                        />
                    </g>
                }

                {/*end eyebrows  */}

                {/* start blush  */}
                {
                    error ||
                    <>
                        <circle cx="-55" cy="-90" r="10" fill="red" className="blush" />
                        <circle cx="55" cy="-90" r="10" fill="red" className="blush" />
                    </>
                }

                {/* end blush  */}

                {/* start Hand Component  */}
                <path d="
                    M 155 90
                    Q 200 50 230 -8
                " fill="none" stroke="black" strokeWidth="2" />
                <path d="
                    M 155 130
                    L 287 40
                " fill="none" stroke="black" strokeWidth="2" />

                <path d="
                M -155 90
                Q -200 50 -230 -8
            " fill="none" stroke="black" strokeWidth="2" />
                <path d="
                M -155 130
                L -287 40
            " fill="none" stroke="black" strokeWidth="2" />
                <circle cx="140" cy="105" r="35" fill="white" stroke="black" strokeWidth="2" />
                <circle cx="-140" cy="105" r="35" fill="white" stroke="black" strokeWidth="2" />
                {/* end Hand Component  */}

                {/* start lip */}
                {error && <path d="
                    M -20, -60
                    C -20,-60 0,-90 20,-60
                " fill="none" stroke="black" strokeWidth="2" id="lips" /> || <path d="
                    M -20, -70
                    C -20,-70 0,-20 20,-70
                " fill="none" stroke="black" strokeWidth="2" id="lips" />}

                {/* end lip */}


                <use href="#sun" x="-200" y="-200" />
                <use href="#cloud" x="200" y="-200"
                    transform="
                scale(1.5)
                translate(-70 70)
                "/>
                <use href="#cloud" x="200" y="-200"
                    transform="
                scale(1.2)
                translate(70 70)
                "/>

                <use href="#cloud" x="-200" y="-200"
                    transform="
                scale(1.2)
                translate(70 70)
                "/>
                <use href="#cloud" x="-200" y="-200"
                    transform="
                scale(1.2)
                translate(-70 70)
                "/>
                {/* moustache */}
                {/* <path
                    id="mp"
                    d="
                M -5 5
                C -5 5 0 -3 -10 -5
                C -10 -5 -25 0 -30 -2
                C -30 -2 -30 -2 -30 0
                C -30 0 -20 10 -5 5
            "
                    transform="
                translate(7)
                scale(1.5)
            "
                /> */}
                <use
                    href="#mp"
                    transform="
                scale(-1,1)
            "
                />


            </svg>
    )
}

export default Pookie;