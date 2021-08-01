import { Link, Route, useRouteMatch } from "react-router-dom";
import Cards from "./Cards.jsx";

function WhichTriangle(){

    const {path,url} = useRouteMatch()
    return(
        <div className="game-4">
             <Link to="/"><button className="back-btn">Go Back</button></Link>
            <div className="description">
                <h2 className="heading">Which Triangle Is This?</h2>
                <p>Three angles will be displayed and you have to answer whether it is a right-angled triangle, acute-angled triangle or an obtuse-angled triangle</p>
            </div>
            <Route exact path={path}>
                <ShowButton url={url}/>
                </Route>
            <Route path={`${path}/begin`}>
                <Cards />
                </Route>
        </div>
    )
}

function ShowButton({url}){
    return(
        <button className="btn"><Link to={`${url}/begin`}>Begin</Link></button>
    )
}

export default WhichTriangle;