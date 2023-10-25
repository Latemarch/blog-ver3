"use client";

import { useEffect, useState } from "react";

export default function HeaderBG() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(window.scrollY === 0 ? 1 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex fixed w-full h-20">
      <div
        className="flex w-full  mx-auto bg-gray-400 opacity-40"
        style={{
          opacity,
          transition: "opacity 0.5s",
        }}
      />
    </div>
  );
}
