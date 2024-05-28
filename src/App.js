import logo from "./logo.svg";
import "./App.css";
import PropsParent from "./Components/Prop/PropsParent";
import StateComponent from "./Components/State/StateComponent";
import Reducer from "./Components/Reducer/Reducer";
// import PropsParent from "./Components/Prop/PropsParent";

const App = () => {
  return (
    <div>
      <PropsParent />
      <StateComponent />
      <Reducer />
    </div>
  );
};

export default App;
