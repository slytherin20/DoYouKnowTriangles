import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "./components/MainPage";
import IsItATriangle from "./components/IsItATriangle";
import FindTheHypotenuse from "./components/FindTheHypotenuse";
import CalculateArea from "./components/CalculateArea";

function App() {
  return (
    <BrowserRouter>
    <div className="main-container">
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/IsItATriangle" component={IsItATriangle} />
      <Route path="/FindTheHypotenuse" component={FindTheHypotenuse} />
      <Route path="/CalculateArea" component={CalculateArea} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
