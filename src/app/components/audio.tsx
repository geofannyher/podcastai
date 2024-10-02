"use client";
import React, { useState, useEffect } from "react";

interface CircleProps {
  isActive: boolean;
}

const Circle: React.FC<CircleProps> = ({ isActive }) => {
  // console.log(isActive);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        // Mengubah skala lingkaran secara acak antara 1 (normal) hingga 3 (3 kali lebih panjang)
        setScale(Math.random() * (10 - 1) + 1);
      }, 300); // Ubah skala setiap 500ms

      return () => clearInterval(interval);
    } else {
      setScale(1); // Reset skala ketika isActive false
    }
  }, [isActive]);

  return (
    <div
      style={{
        width: 10,
        height: 10,
        borderRadius: "10%",
        backgroundColor: "white",
        transform: `scaleY(${scale})`,
        transformOrigin: "center",
        transition: "transform 0.5s ease-in-out",
        margin: "10px",
      }}
    ></div>
  );
};

export default Circle;
