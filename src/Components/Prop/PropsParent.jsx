import { useState } from "react";
import PropsChild from "./PropsChild";

const PropsParent = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const handleTang = () => {
    setCount((tang) => tang + 1);
  };
  const handleGiam = () => {
    if (count === 0) return;
    setCount((giam) => giam - 1);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("name", name);
  };

  const handleAlter = () => {
    alert(`name: ${name} - value: ${count}`);
  };
  return (
    <div>
      <button onClick={handleGiam}>Giam </button>
      <span>{count}</span>
      <button onClick={handleTang}>Tăng</button>

      <p>What's your name?</p>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>

      {/* Truyền props */}
      <PropsChild name={name} count={count} handleAlter={handleAlter} />
    </div>
  );
};
export default PropsParent;
