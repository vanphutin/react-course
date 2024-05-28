import logo from "./logo.svg";
import "./App.css";
import PropsParent from "./Components/Prop/PropsParent";
import StateComponent from "./Components/State/StateComponent";
// import PropsParent from "./Components/Prop/PropsParent";

const App = () => {
  return (
    <div>
      <PropsParent />
      <StateComponent />
    </div>
  );
};

export default App;
