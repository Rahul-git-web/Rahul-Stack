import React from "react";
import useInView from "../hooks/useInView";

const Reveal = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;