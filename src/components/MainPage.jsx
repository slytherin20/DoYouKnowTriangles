import { Link } from "react-router-dom";
import Triangle from "./Triangle";

function MainPage(){
return(
    <>
    <Triangle />
    <div className="description">
    <h1 className="heading">Do You Know Triangles?</h1>
    <p>A series of fun games to check your knowlege on triangles.</p>
    </div>
    <div className="games">
        <div className="box-1">
        <ul className="games-list">
        <Link to="/IsItATriangle">
            <li key="game-1" className="gamelist-1">
                Is It A Triangle?
            </li>
        </Link>
        <Link to="/FindTheHypotenuse">
            <li key="game-2" className="gamelist-2">
                Find The Hypotenuse
            </li>
            </Link>
        </ul>
        </div>
        <div className="box-2">
        <ul className="games-list">
        <Link to="/CalculateArea">
            <li key="game-3"  className="gamelist-3">
               Area Calculator
            </li>
            </Link>
            <Link to="/WhichTriangle">
            <li key="game-4"  className="gamelist-4">
               Which Triangle Is This?
            </li>
            </Link>
        </ul>
        </div>
    </div>
    </>
)
}

export default MainPage;