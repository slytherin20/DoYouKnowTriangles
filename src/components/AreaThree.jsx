import { useState } from "react";

function AreaThree(){
    const [a,setA] = useState(0);
    const [b,setB] = useState(0);
    const [angle,setAngle] = useState(0);
    const [area,setArea] = useState("");
    const [text,setText] = useState("");

    function changeValues(e,side){
        side==="a"?setA(Number(e.target.value))
                  :(side==="b"?setB(Number(e.target.value)):setAngle(Number(e.target.value)))
    }

    function calculateArea(e){
        e.preventDefault();
        if(a>0 && b>0 && angle>0){
            setArea((a*b*0.5*Math.sin(angle*Math.PI/180)).toFixed(2))
            setText("Area: ")
        }
        else{
            setArea("")
            setText("Please enter correct sides and angle.")
        }
    }


return(
   <div className = "area-box">
       <img src="https://i.imgur.com/46iitSC.png" alt="Triangle"/>
       <form className="area-3" onSubmit={calculateArea}>
           <label className="side-1">
               a:
            <input type="number" onChange={(e)=>changeValues(e,"a")} />
           </label>
           <label className="side-2">
               b:
            <input type="number" onChange={(e)=>changeValues(e,"b")} />
           </label>
           <label className="angle-1">
               Angle (in degrees):
            <input type="number" onChange={(e)=>changeValues(e,"d")} />
           </label>
           <button className="btn">Calculate</button>
       </form>
       <div className="result-box">
           <p><b>{text}</b> {area}</p>
       </div>
   </div>
)
}

export default AreaThree;