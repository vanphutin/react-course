import React, { useState } from "react";
import "./Toggle.scss";
const Toggle = () => {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    // setOn((on) => !on) khi nhấn vào là on, nhấn lại 1 lần nữa là phủ định của on (!on) => off
    setOn((prevState_ON) => !prevState_ON);
  };
  return (
    <div className="toggle-container">
      <div className="toggle" onClick={() => handleToggle()}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      <span>{on ? "ON" : "OFF"}</span>
      <div className="controller-toggle">
        <button onClick={() => setOn(true)}>ON</button>
        <button onClick={() => setOn(false)}>OFF</button>
      </div>
    </div>
  );
};

export default Toggle;
