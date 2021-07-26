import { useState } from "react";

function AreaTwo(){
    const [a,setA] = useState(0);
    const [b,setB] = useState(0);
    const [c,setC] = useState(0);
    const [area,setArea] = useState("");
    const [perimeter,setPerimeter] = useState("");
    const [text,setText] = useState("");
    const [ptext,setPText] = useState("");

    function changeValues(e,side){
        side==="a"?setA(Number(e.target.value))
                  :(side==="b"?setB(Number(e.target.value)):setC(Number(e.target.value)))
    }

    function calculateArea(e){
        e.preventDefault()
        if(a>0 && b>0 && c>0){
            setPText("Semi-perimeter:");
        let s = ((a+b+c)*0.5).toFixed(2);
        setPerimeter(s);
        if(s>a && s>b && s>c){
            setText("Area:");
            let x = (s-a);
            let y = (s-b);
            let z = (s-c);
            setArea((Math.sqrt(s*x*y*z)).toFixed(2))
        }
        else {
            setArea("")
            setText("Please enter correct sides, the sides of a triangle cannot be greater than or equal to its semi-perimeter")
        }
        }
        else{
            setArea("")
            setText("Please enter sides greater than zero")
        }
    }


return(
   <div className = "area-box">
       <img src="https://i.imgur.com/46iitSC.png" alt="Triangle"/>
       <form className="area-2" onSubmit={calculateArea}>
           <label className="side-1">
               a:
            <input type="number" onChange={(e)=>changeValues(e,"a")} />
           </label>
           <label className="side-2">
               b:
            <input type="number" onChange={(e)=>changeValues(e,"b")} />
           </label>
           <label className="side-3">
               c:
            <input type="number" onChange={(e)=>changeValues(e,"c")} />
           </label>
           <button className="btn">Calculate</button>
       </form>
       <div className="result-box">
           <p><b>{ptext}</b>{perimeter}</p>
           <p><b>{text}</b> {area}</p>
       </div>
   </div>
)
}

export default AreaTwo;