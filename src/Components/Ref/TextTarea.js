import React from "react";

const TextTarea = () => {
  return (
    <div className="w-500 h-30">
      <textarea
        className="w-500 h-10"
        style={{ width: "500px", height: "50px", overflow: "hidden" }}
      ></textarea>
    </div>
  );
};

export default TextTarea;
