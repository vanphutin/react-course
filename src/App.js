import logo from "./logo.svg";
import "./App.css";
import PropsParent from "./Components/Prop/PropsParent";
import StateComponent from "./Components/State/StateComponent";
import Reducer from "./Components/Reducer/Reducer";
import Card from "./Components/Card/Card";
import Ref from "./Components/Ref/Ref";
import CustomHook from "./Components/CustomHook/CustomHook";
import Form from "./Components/Form/Form";
import Context from "./Context/Context";
import { GalleryProvider } from "./Context/Count/gallery-context/Galley-context";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import FetchingData from "./Components/Advanced/hoc/FetchingData";
import Header from "./Components/Home/Header";

// import PropsParent from "./Components/Prop/PropsParent";

const App = () => {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/props" element={<PropsParent />} />
      </Routes>

      <Routes>
        <Route path="/state" element={<StateComponent />} />
      </Routes>

      <Routes>
        <Route path="/reducter" element={<Reducer />} />
      </Routes>

      <Routes>
        <Route path="/cart" element={<Card />} />
      </Routes>
      <Routes>
        <Route path="/ref" element={<Ref />} />
      </Routes>
      <Routes>
        <Route path="/customhook" element={<CustomHook />} />
      </Routes>
      <Routes>
        <Route path="/form" element={<Form />} />
      </Routes>
      <Routes>
        <Route path="/ref" element={<Ref />} />
      </Routes>
      <Routes>
        <Route path="/context" element={<Context />} />
      </Routes>
      <Routes>
        <Route path="/advanced" element={<FetchingData />} />
      </Routes>
    </div>
  );
};

export default App;
