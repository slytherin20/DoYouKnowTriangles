import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

function IsItATriangle(){
    const resultBox = useRef(null);
    const [angle1,setAngle1] = useState(0);
    const [angle2,setAngle2] = useState(0);
    const [angle3,setAngle3] = useState(0);
    const [result,setResult] = useState("");
    const [image,setImage] = useState("");

    function setAngle(e,angle){
        angle===1?setAngle1(+e.target.value)
        :(angle===2?setAngle2(+e.target.value):setAngle3(+e.target.value))
    }

    function checkValues(e){
        e.preventDefault();
        let sum = angle1+angle2+angle3;
        (sum===180)?success():failure()
    }

    async function success(){
        setResult("Yes! It is definately a triangle.");
        await setImage("https://media.giphy.com/media/3o751QmaltUM6klxYs/giphy.gif");
        scrollToResult()
        }

    async function failure(){
        setResult("Sorry! It is not a triangle.");
        await setImage("https://media.giphy.com/media/gnE4FFhtFoLKM/giphy.gif");
        scrollToResult()
    }

    function scrollToResult(){
        resultBox.current.scrollIntoView({ behavior: "smooth"})

    }

return(
   <div className="game-1">
       <Link to="/"><button className="back-btn">Go Back</button></Link>
       <div className="description">
           <h2 className="heading">Is It A Triangle?</h2>
           <p>Enter the three angles and we will tell you if it forms a triangle or not.</p>
       </div>
       <form className="input-box-1" onSubmit={checkValues}>
           <label className="angle 1">
               Angle 1:
            <input type="number" required step="any" onChange={(e)=>setAngle(e,1)} />
           </label>
           <label className="angle 2">
               Angle 2:
            <input type="number" required step="any" onChange={(e)=>setAngle(e,2)}/>
           </label>
           <label className="angle 3">
               Angle 3:
            <input type="number"  required step="any" onChange={(e)=>setAngle(e,3)}/>
           </label>
           <button className="btn">Check</button>
       </form>
       <div className="result-box" ref={resultBox}>
            <h3>{result}</h3>
             {image && <img src={image} alt="result-pic" className="image-1"/> }
        </div>
   </div>
)
}
export default IsItATriangle;