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
    alert(`name: ${name} - age: ${count}`);
  };
  return (
    <div>
      <h1>props</h1>
      <button onClick={handleGiam}>Giam </button>
      <span>{count}</span>
      <button onClick={handleTang}>Tăng</button>

      <p>What's your name?</p>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>

      {/* Truyền props - props children */}
      <PropsChild name={name} count={count} handleAlter={handleAlter}>
        {" "}
        <h2>
          | props children |Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Suscipit asperiores quidem blanditiis maxime sed, amet cum minus
          at fugit aperiam qui, laboriosam obcaecati animi architecto
          voluptatem. Quaerat impedit ratione magni.
        </h2>
      </PropsChild>
    </div>
  );
};
export default PropsParent;
