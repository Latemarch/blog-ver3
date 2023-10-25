"use client";

import { useEffect, useState } from "react";

export default function HeaderBG() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(window.scrollY === 0 ? 0 : 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="flex fixed h-20 z-10 w-full items-center drop-shadow-lg justify-center mx-auto bg-gray-400"
      style={{
        opacity,
        transition: "opacity 0.3s",
      }}
    >
      11
    </div>
  );
}
