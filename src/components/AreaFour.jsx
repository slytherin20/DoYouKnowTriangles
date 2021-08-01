import { useState,useRef } from "react";
function AreaFour(){
    const resultBox = useRef(null);
    const [a,setA] = useState(0);
    const [area,setArea] = useState("");
    const [text,setText] = useState("");

    function changeValues(e){
        setA(Number(e.target.value))
    }

    function calculateArea(e){
        e.preventDefault();
        if(a>0){
            setText("Area: ")
            setArea(((a**2)*Math.sqrt(3)/4).toFixed(2))
        }
        else{
            setArea("")
            setText("Please enter valid sides")
        }
        resultBox.current.scrollIntoView()
    }


return(
   <div className = "area-box">
       <img src="https://i.imgur.com/hioUNt0.png" alt="Triangle"/>
       <form className="area-4" onSubmit={calculateArea}>
           <label className="sides">
               Sides:
            <input type="number" step="any" onChange={changeValues} />
           </label>
           <button className="btn">Calculate</button>
       </form>
       <div className="result-box" ref={resultBox}>
           <p><b>{text}</b> {area}</p>
       </div>
   </div>
)
}

export default AreaFour;