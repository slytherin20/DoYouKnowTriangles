import { useRef, useState } from "react";

function AreaThree(){
    const resultBox = useRef(null);
    const [a,setA] = useState(0);
    const [b,setB] = useState(0);
    const [angle,setAngle] = useState(0);
    const [area,setArea] = useState("");
    const [text,setText] = useState("");

    function changeValues(e,side){
        side==="a"?setA(Number(e.target.value))
                  :(side==="b"?setB(Number(e.target.value)):setAngle(Number(e.target.value)))
    }

    async function calculateArea(e){
        e.preventDefault();
        if(a>0 && b>0 && angle>0){
            setArea((a*b*0.5*Math.sin(angle*Math.PI/180)).toFixed(2))
            await setText("Area: ")
        }
        else{
            setArea("")
            await setText("Please enter correct sides and angle.")
        }
        resultBox.current.scrollIntoView({behavior:"smooth"})
    }


return(
   <div className = "area-box">
       <img src="https://i.imgur.com/46iitSC.png" alt="Triangle"/>
       <form className="area-3" onSubmit={calculateArea}>
           <label className="side-1">
               a:
            <input type="number" step="any" onChange={(e)=>changeValues(e,"a")} required />
           </label>
           <label className="side-2">
               b:
            <input type="number" step="any" onChange={(e)=>changeValues(e,"b")} required />
           </label>
           <label className="angle-1">
               Angle (in degrees):
            <input type="number" step="any" onChange={(e)=>changeValues(e,"d")} required />
           </label>
           <button className="btn">Calculate</button>
       </form>
       <div className="result-box" ref={resultBox}>
           <p><b>{text}</b> {area}</p>
       </div>
   </div>
)
}

export default AreaThree;