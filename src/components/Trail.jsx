import React, { useEffect, useRef } from 'react';


const Trail = () => {
  const circlesRef = useRef([]);
  const coords = { x: 0, y: 0 };

  useEffect(() => {
    const circles = circlesRef.current;
    const colors = [
      "#431857","#431857", "#5d376d", "#5d376d", "#775584", "#775584", "#91759c", "#91759c", "#ac96b4", "#ac96b4", "#ac96b4", "#c7b8cd", "#c7b8cd", "#c7b8cd", "#e3dbe6", "#e3dbe6", "#e3dbe6", "#ffffff", "#ffffff", "#ffffff"
    ];

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => (circlesRef.current[index] = el)}
          className="circle absolute h-5 w-5 rounded-full pointer-events-none z-50"
        ></div>
      ))}
    </div>
  );
};

export default Trail;
