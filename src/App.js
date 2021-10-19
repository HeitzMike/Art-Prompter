// import logo from "./logo.svg";
import "./App.css";
import Randomizer from "./components/Randomizer";
import Fun from "./data/fun";
import { someActions } from "./data/actionsList";
// import ActionList from "./data/ActionList";

function App() {
  return (
    <div className="App">
      <Randomizer someActions />
    </div>
  );
}

export default App;
