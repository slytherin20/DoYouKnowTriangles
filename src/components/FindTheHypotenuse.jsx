import { useState,useRef } from "react";
import {Link} from "react-router-dom";

function FindTheSide(){
    const resultBox = useRef(null);
    const [a,setA] = useState(0);
    const [b,setB] = useState(0);
    const [result,setresult]= useState("");
    const [text,setText] = useState("");

    function changeValue(e,side){
        side==="a"?setA(+e.target.value):setB(+e.target.value);
    }
    async function calculate(e){
        e.preventDefault()
        let c = Math.sqrt((a**2)+(b**2));
        c = c.toFixed(2);
        setresult(c);
        await setText("Hypotenuse: ≈");
        resultBox.current.scrollIntoView({behavior:"smooth"})
    }

    return(
        <div className="game-2">
             <Link to="/"><button className="back-btn">Go Back</button></Link>
            <div className="description">
                <h2 className="heading">Find the Hypotenuse</h2>
                <p>Calculates the hypotenuse of the triangle for you.</p>
                <img src="https://i.imgur.com/nr3wPGr.png" className="right-triangle" alt ="triangle"/>
            </div>
            <form className="input-box-2" onSubmit={calculate} >
                <label className="side 1">
                    a=
                    <input type="number" required step="any" onChange = {(e)=>changeValue(e,"a")} />
                </label>
                <label className="side 2">
                    b=
                    <input type="number" required step="any" onChange = {(e)=>changeValue(e,"b")}/>
                </label>
                <button className="btn">Calculate</button>
            </form>
            <div className="result-box" ref={resultBox}>
                <h3>{text} {result}</h3>
            </div>
        </div>
    )
}

export default FindTheSide;