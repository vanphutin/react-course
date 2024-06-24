import React, { useEffect, useRef } from "react";
import TextTarea from "./TextTarea";

const Ref = () => {
  // const initRef = useRef(initialValue)
  const initRef = useRef(0);

  const handler = () => {
    // truy xuat gia tri ref
    console.log(initRef.current);
    //Update gia tri ref
    initRef.current = 10;
  };
  useEffect(() => {
    if (initRef.current) {
      initRef.current.style.fontSize = "30px";
    }
  }, []);
  console.log(initRef.current);
  return (
    <div>
      <hr />
      <h1>useRef</h1>
      <button onClick={handler} ref={initRef} className="btn btn-danger">
        click me !
      </button>

      <TextTarea />
    </div>
  );
};

export default Ref;
