import React from "react";
import withLoading from "./withLoading";
import withError from "./withError";

const FetchingData = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <span>{item.name}</span>
          <span>{item.age}</span>
        </div>
      ))}
    </div>
  );
};

export default withError(withLoading(FetchingData));
