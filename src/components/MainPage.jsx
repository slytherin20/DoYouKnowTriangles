import { Link } from "react-router-dom";

function MainPage(){
return(
    <>
    <div className="description">
    <h1 className="heading">Do You Know Triangles?</h1>
    <p>A series of fun games to check your knowlege on triangles.</p>
    </div>
    <div className="games">
        <ul className="games-list">
            <li key="game-1">
                <Link to="/IsItATriangle">Is It A Triangle?</Link>
            </li>
            <li key="game-2">
                <Link to="/FindTheHypotenuse">Find The Hypotenuse</Link>
            </li>
            <li key="game-3">
                <Link to="/CalculateArea">Area Calculator</Link>
            </li>
            <li key="game-4">
                <Link to="/WhichTriangle">Which Triangle Is This?</Link>
            </li>
        </ul>
    </div>
    </>
)
}

export default MainPage;