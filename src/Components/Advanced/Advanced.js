import React from "react";
import FetchingData from "./hoc/FetchingData";

const Advanced = () => {
  return (
    <div>
      <h1>Higher-Order Components</h1>
      <p>
        Higher-order components(HOC) là advanced concept trong React. HOCs tương
        đương với higher-order functions. Các bạn cứ hiểu là nó nhận đầu vào là
        một component như là argument và trả về "phiên bản mở rộng" của
        component đó.
      </p>
      <FetchingData />
    </div>
  );
};

export default Advanced;
