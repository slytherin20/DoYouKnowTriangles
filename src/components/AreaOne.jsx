import { useRef, useState } from "react";

function AreaOne(){
    const resultBox = useRef(null);
    const [base,setBase] = useState(0);
    const [height,setHeight] = useState(0);
    const [area,setArea] = useState("");
    const [text,setText] = useState("");

    function changeValues(e,side){
        side==="b"?setBase(Number(e.target.value))
                  :setHeight(Number(e.target.value))
    }

    async function calculateArea(e){
        e.preventDefault()
        if(base>0 && height>0){
            setText("Area:")
            await setArea((base*height*0.5).toFixed(2))
        }
        else{
            setArea("")
            await setText("Please enter correct base and height.")
        }
        resultBox.current.scrollIntoView({behavior:"smooth"})
    }

return(
   <div className = "area-box">
       <img src="https://i.imgur.com/1VeC9H5.png" alt="Right triangle"/>
       <form className="area-1" onSubmit={calculateArea}>
           <label className="base">
               Base:
            <input type="number" step="any" onChange={(e)=>changeValues(e,"b")} required />
           </label>
           <label className="height">
               Height:
            <input type="number" step="any" onChange={(e)=>changeValues(e,"h")} required />
           </label>
           <button className="btn">Calculate</button>
       </form>
       <div className="result-box" ref={resultBox}>
           <p><b>{text}</b> {area}</p>
       </div>
   </div>
)
}

export default AreaOne;