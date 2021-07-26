import { useParams } from "react-router-dom";
import AreaOne from "./AreaOne";
import AreaTwo from "./AreaTwo";
import AreaThree from "./AreaThree";
import AreaFour from "./AreaFour";
import AreaFive from "./AreaFive";

function PathFind(){
    let { id } = useParams();
    if(id==="1") return <AreaOne />
    else if(id==="2") return <AreaTwo />
    else if(id==="3") return <AreaThree />
    else if(id==="4") return <AreaFour />
    else if(id==="5") return <AreaFive />
    else return <h2>404 Not Found</h2>
}

export default PathFind;