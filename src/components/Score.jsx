import { useState,useEffect } from "react";

function Score(props){
    let score = props.score;
    const [statement,setStatement]=useState("");
    const [color,setColor] = useState("");

    useEffect(() => {
        
        showResult()
        
    }, [])

    function showResult(){
        if(score>=5){
            setStatement("Congratulations!You have scored high.")
            setColor("green");
        }
        else if(score>=3){
            setStatement("Well done! But you can do better");
            setColor("orange");
        }
        else if(score>=1){
            setStatement("It's okay, you can try again");
            setColor("blue");
        }
    }
    return (
        <div className="score-card">
            <h2>Score:</h2>
            <h3 className="score">{score}/6</h3>
            <h2 style={{color:`${color}`}}>{statement}</h2>
        </div>
    )
}

export default Score;