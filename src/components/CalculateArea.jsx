import { useState } from "react";
import { Route, Link, useRouteMatch, Switch } from "react-router-dom";
import PathFind from "./PathFind";
import Triangle from "./Triangle";

function CalculateArea(){
    const [option,setOption] = useState("1");
    const { path,url } = useRouteMatch();

    function changeValue(e){
        setOption(e.target.value)
    }

    function showArea(e){
        e.preventDefault()
    }

    return(
        <div className="game-3">
             <Link to="/"><button className="back-btn">Go Back</button></Link>
            <div className="description">
                <h2 className="heading">Area Calculator</h2>
                <p>Calculates the area of triangle depending upon parameters given.</p>
            </div>
            <form className="input-box-1" onSubmit={showArea}>
                <select value={option} onChange={changeValue}>
                    <option value="1">When the base and height of a triangle are given.</option>
                    <option value="2">When the sides of a triangle are given as a, b, and c.</option>
                    <option value="3">When two sides and the included angle is given.</option>
                    <option value="4">When all sides are equal.</option>
                    <option value="5">When  two of its sides are equal and the angles opposite the equal sides are also equal.</option>
                </select>
                <Link to={`${url}/${option}`}><button className="btn">Next</button></Link>
            </form>
            <Switch>
                <Route path={`${path}/:id`} component={PathFind} />
            </Switch>
            
        </div>
    )
}

export default CalculateArea;