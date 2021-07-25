import { useState } from "react";

function FindTheSide(){
    const [a,setA] = useState(0);
    const [b,setB] = useState(0);
    const [result,setresult]= useState("");

    function changeValue(e,side){
        side==="a"?setA(+e.target.value):setB(+e.target.value);
    }
    function calculate(e){
        e.preventDefault()
        let c = Math.sqrt((a**2)+(b**2));
        c = c.toFixed(2);
        setresult(c);
    }

    return(
        <div className="game-2">
            <div className="description">
                <h2 className="heading">Find the Hypotenuse</h2>
                <p>Calculates the hypotenuse of the triangle for you.</p>
                <img src="https://i.imgur.com/nr3wPGr.png" alt ="triangle"/>
            </div>
            <form className="input-box-2" onSubmit={calculate} >
                <label className="side 1">
                    a=
                    <input type="number" onChange = {(e)=>changeValue(e,"a")} />
                </label>
                <label className="side 2">
                    b=
                    <input type="number" onChange = {(e)=>changeValue(e,"b")}/>
                </label>
                <button className="btn">Calculate</button>
            </form>
            <div className="result-box">
                <h3>Hypotenuse: ≈{result}</h3>
            </div>
        </div>
    )
}

export default FindTheSide;