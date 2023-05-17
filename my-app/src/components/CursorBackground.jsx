import React, { useState, useEffect } from "react";

const CursorBackground = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorBackgroundStyle = {
    position: "fixed",
    top: "position.y",
    left: "position.x",
    pointerEvents: "none",
    zIndex: 9999,
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#ff0000",
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: "transform 0.3s ease",
  };

  return <div style={cursorBackgroundStyle} />;
};

export default CursorBackground;
