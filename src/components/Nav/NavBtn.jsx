import React, { useState } from "react";
import { Icon } from "@iconify/react";

const NavBtn = ({ icon, text }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="relative inline-block">
      <Icon
        icon={icon}
        className="border border-none text-opacity-20 text-white text-[60px] group-hover:text-[60px] bg-transparent group-focus:text-[#BC00FF] group-focus:text-opacity-50"
      />

      {isTooltipVisible && (
        <div
          className="absolute top-[calc(100%+10px)] left-[-50%] bg-black text-white p-2 rounded shadow"
          style={{ top: tooltipPosition.y, left: tooltipPosition.x }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default NavBtn;
