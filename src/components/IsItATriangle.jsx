import { useState } from "react";

function IsItATriangle(){
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
        (sum)===180?success():failure()
    }
    function success(){
        setResult("Yes! It is definately a triangle.");
        setImage("https://media.giphy.com/media/3o751QmaltUM6klxYs/giphy.gif");
    }
    function failure(){
        setResult("Sorry! It is not a triangle.");
        setImage("https://media.giphy.com/media/gnE4FFhtFoLKM/giphy.gif");
    }
return(
   <div className="game-1">
       <div className="description">
           <h2 className="heading">Is It A Triangle?</h2>
           <p>Enter the three angles and we will tell you if it forms a triangle or not.</p>
       </div>
       <form className="input-box-1" onSubmit={checkValues}>
           <label className="angle 1">
               Angle 1:
            <input type="number" onChange={(e)=>setAngle(e,1)} />
           </label>
           <label className="angle 2">
               Angle 2:
            <input type="number" onChange={(e)=>setAngle(e,2)}/>
           </label>
           <label className="angle 3">
               Angle 3:
            <input type="number" onChange={(e)=>setAngle(e,3)}/>
           </label>
           <button className="btn">Check</button>
       </form>
       <div className="result-box">
        <h3>{result}</h3>
       {image && <img src={image} alt="result-pic" /> }
       </div>
   </div>
)
}
export default IsItATriangle;