import { Icon } from "@iconify/react";
import React from "react";

function Hardware() {
  const WHardware = [
    {
      iconn: "tabler:battery-4",
    },
  ];

  return (
    <div className="">
        <section className="">
          {WHardware.map((Weath, index) => (
            <div key={index} className="">
              <Icon
                icon={Weath.iconn}
                className="border-none text-white text-[6vw] bg-transparent"
              />
            </div>
          ))}
        </section>
    </div>
  );
}

export default Hardware;
