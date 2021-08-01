import { useRef, useState } from "react";
function AreaFive(){
    const resultBox = useRef(null);
    const [a,setA] = useState(0);
    const [b,setB] = useState(0);
    const [area,setArea] = useState("");
    const [text,setText] = useState("");

    function changeValues(e,side){
        side==="a"?setA(Number(e.target.value))
                    :setB(Number(e.target.value))
    }

    function calculateArea(e){
        e.preventDefault();
        if(a>0 && b>0){
          setArea((b*Math.sqrt(4*(a**2)-(b**2))/4).toFixed(2))
          setText("Area: ")
        }
        else{
            setArea("")
            setText("Please enter correct sides.")
        }
        resultBox.current.scrollIntoView()
    }


return(
   <div className = "area-box">
       <img src="https://i.imgur.com/2C327Pn.png" alt="Isosceles Triangle"/>
       <form className="area-5" onSubmit={calculateArea}>
           <label className="side-1">
               Equal Side:
            <input type="number" step="any" onChange={(e)=>changeValues(e,"a")} required />
           </label>
           <label className="side-2">
               Base:
            <input type="number" step="any" onChange={(e)=>changeValues(e,"b")} required />
           </label>
           <button className="btn">Calculate</button>
       </form>
       <div className="result-box" ref={resultBox}>
           <p><b>{text}</b> {area}</p>
       </div>
   </div>
)
}

export default AreaFive;