import React from "react";
import useHover from "../../hooks/useHover";

const CustomHook = () => {
  const { hover, nodeRef } = useHover();
  return (
    <div>
      <hr />
      <h1>Custom Hook</h1>
      <p
        style={{
          padding: "10px 20px",
          backgroundColor: hover ? "gray" : "yellow",
          width: "300px",
        }}
        className="text-blue-500 bg-gray-200 p-4"
        ref={nodeRef}
      >
        click me
      </p>
    </div>
  );
};

export default CustomHook;
