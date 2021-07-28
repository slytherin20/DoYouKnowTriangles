import { useState } from "react";
import Score from "./Score";

function Cards(){
    const [score,setScore] = useState(0);
    const [index,moveIndex] = useState(0);
    const [finalOption,setFinalOption] = useState(0);
    const [nextVisible,setNextVisible] = useState("");
    const [submitVisible,setSubmitVisible] = useState("hidden");
    let QA = [{
        ques:"Angle1: 30°, Angle2: 45°, Angle3: 105°",
        ans: 2
        },
        {
        ques:"Angle1: 40°, Angle2: 60°, Angle3: 80°",
        ans: 1
         },
        {
        ques:"Angle1: 67°, Angle2: 34°, Angle3: 79°",
        ans: 2
        },{
        ques:"Angle1: 90°, Angle2: 80°, Angle3: 100°",
        ans: 3
        },
        {
        ques:"Angle1: 90°, Angle2: 28°, Angle3: 62°",
        ans: 0
        },
        {
            ques:"Angle1: 10°, Angle2: 110°, Angle3: 60°",
             ans: 2
        }]

        function optionClicked(option){
            console.log(option)
            setFinalOption(option)
        }
        function changeIndex(){
            if(finalOption===QA[index].ans){
                setScore(score+1)
            }
            if(index===4){
                moveIndex(5)
                setNextVisible("hidden")
                setSubmitVisible(" ")
            }
            else if(index<=3){
                moveIndex(index+1)
            }
        }
        function saveResponse(e){
           e.preventDefault()
            moveIndex(-1)
        }
    return(
        <>
        {
            index>=0 && 
            <form className="cards" onSubmit={saveResponse}>
                <h2 className="question">{QA[index].ques}</h2>
                <div className="options">
                    <div className="option 0" onClick={()=>optionClicked(0)}>Right-angled</div>
                    <div className="option 1" onClick={()=>optionClicked(1)}>Acute-angled</div>
                    <div className="option 2" onClick={()=>optionClicked(2)}>Obtuse-angled</div>
                    <div className="option 3" onClick={()=>optionClicked(3)}>Not a triangle</div>
                </div>
                <div className={`quiz-btn ${nextVisible}`} onClick={changeIndex}>Next</div>
                <button className={`end-game ${submitVisible}`} type="submit" >Submit</button>
            </form>
      
        }
        {
            index===-1 &&
            <Score score={score} />
        }
    </>

    )
}

export default Cards;