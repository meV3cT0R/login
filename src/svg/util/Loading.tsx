const Loading : React.FC<{height?:string,width?:string,fill?:string}> = ({
    height="20px",
    width="20px",
    fill="black",
})=> {
    return (<svg width={width} height={height} viewBox="-25 -25 50 50" className="mx-auto" fill={fill}>
    <g className="loading">

        <path
            id="wing"
            d="
            M -10 -10
            Q 0 0 10 -10 
            L 3 -25
            L -3 -25
            L -10 -10
        "
        />
        <use href="#wing" transform="rotate(120)" />
        <use href="#wing" transform="rotate(240)" />
    </g>

</svg>)
}

export default Loading;