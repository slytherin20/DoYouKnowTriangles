import { useState } from "react";

function CalculateArea(){
    const [option,setOption] = useState("1");

    function changeValue(e){
        setOption(e.target.value)
    }

    function calculateArea(e){
        e.preventDefault()
    }

    return(
        <div className="game-3">
            <div className="description">
                <h2 className="heading">Area Calculator</h2>
                <p>Calculates the area of triangle depending upon parameters given.</p>
            </div>
            <form className="input-box-3.1" onSubmit={calculateArea}>
                <select value={option} onChange={changeValue}>
                    <option value="1">When the base and height of a triangle are given.</option>
                    <option value="2">When the sides of a triangle are given as a, b, and c.</option>
                    <option value="3">When two sides and the included angle is given.</option>
                    <option value="4">When all sides are equal.</option>
                    <option value="5">When  two of its sides are equal and the angles opposite the equal sides are also equal.</option>
                </select>
                <button className="btn">Next</button>
            </form>
        </div>
    )
}

export default CalculateArea;