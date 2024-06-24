import { useEffect, useRef, useState, useCallback } from "react";

export default function useHover() {
  const nodeRef = useRef(null);
  const [hover, setHover] = useState(false);

  const handleMouseOver = useCallback(() => {
    setHover(true);
  }, []);

  const handleMouseOut = useCallback(() => {
    setHover(false);
  }, []);

  useEffect(() => {
    const dom = nodeRef.current;

    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      if (dom) {
        dom.removeEventListener("mouseover", handleMouseOver);
        dom.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, [handleMouseOver, handleMouseOut]);

  return {
    hover,
    nodeRef,
  };
}
