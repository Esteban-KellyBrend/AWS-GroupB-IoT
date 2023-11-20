import React from "react";

const Temperature = ({ meas}) => {
    return (
    <div className="">
        <p className="text-white flex text-xl text-opacity-70 indent-3 pb-1 -mt-1">Temperature</p>
      <div className="w-[39.8vw] h-[20vh] rounded-2xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10 flex flex-col items-center text-white justify-center">
        <img src="https://scontent.fmnl5-2.fna.fbcdn.net/v/t1.15752-9/370193699_3636931829924042_8355598254427536551_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFJOLJPgHTKxgS8o5TaoWcpxQadfz2_1YLFBp1_Pb_VgiWOyTG-6kxLZU_GKR36uBmhdf86dGjvNATGV_XpGDSX&_nc_ohc=yl0KALjGY-AAX9-XGIi&_nc_ht=scontent.fmnl5-2.fna&oh=03_AdS0Px4DYb1e5KzxbvUsY52oy7yP6TlEb4V0gUJHcXWTug&oe=6582B9F0" className="absolute w-[25%] -mt-8 -ml-5"/>
        <section className="absolute justify-start left-0 ml-[42vw]">
        <div className="w-48 h-3 bg-[#C3C3C5] absolute -mt-[1.4rem]" />
        </section>
        <div className="w-full px-2 justify-center flex-grow flex items-center">
          <p className="text-4xl absolute mt-12">{meas}°C</p>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
