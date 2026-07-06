import { useEffect, useState } from "react";

const MouseGlow = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);

  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-40">

      <div
        className="absolute w-72 h-72 rounded-full bg-purple-500/20 blur-[120px]"
        style={{
          left: position.x - 140,
          top: position.y - 140,
          transition: ".08s linear",
        }}
      />

    </div>
  );
};

export default MouseGlow;