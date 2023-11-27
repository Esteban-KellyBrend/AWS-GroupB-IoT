import Switch from "./Switch";
import Hardware from "./Hardware";
import LineGraph from "./LineGraph";

const Display = ({ type, name, meas, unit, active, loc, time, date, direction }) => {
  return type === 1 ? (
    <div>
      <p className="text-white flex text-xl text-opacity-70 indent-3">{name}</p>
      <div className=" w-[17vw] h-[7vh] rounded-xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10 flex pt-1">
        <div className="h-full pl-6">
          <p className="text-white flex text-2xl justify-end">
            {meas}
          </p>
        </div>
        <div className="pl-1 h-full">
          <p className="text-white flex text-2xl">
            {unit}
          </p>
        </div>
      </div>
    </div>
  ) : type === 2 ? (
    <div>
      {/* <div className="w-[15vw] h-[30vh] rounded-2xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10 flex flex-col items-center">
        <div className="w-full px-2 text-center mt-2">
          <p className="text-white text-xs">{loc}</p>
        </div>
        <div className="w-full px-2 text-center">
          <p className="text-white text-xs">{date}</p>
        </div>
        <div className="w-full px-2 text-center flex-grow flex items-center justify-center">
          <p className="text-white text-7xl font-bold">{time}</p>
        </div>
      </div> */}
    </div>
  ) : type === 3 ? (
    <div>
      <p className="text-white flex text-xl text-opacity-70 indent-3 pb-1">
        {name}
      </p>
      <div className="w-[17vw] h-[46vh] rounded-xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10 flex flex-col items-center justify-center pt-1">
        <img
          src="https://scontent.fmnl5-2.fna.fbcdn.net/v/t1.15752-9/371527176_1491047998142200_8745244766900826020_n.png?_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHmw-laRW82USnloo--wRLSaWKW8GcRJ91pYpbwZxEn3QdNvP0VkoSGiuG1i75gD1MDayEbNvGH5dYJqQNp3RVi&_nc_ohc=0rqBccLBB4oAX-sonUt&_nc_ht=scontent.fmnl5-2.fna&oh=03_AdS55fwAFyGl_m27Vrvrica_JMTs7dhjsmwJjOvrk0s_ww&oe=6582A0ED"
          className="w-[15%] absolute -mt-10"
        />
        <img
          src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.15752-9/375754561_1356953538275639_4269922165700191771_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEhxlsagpYNomRC_NWyOkZ3cr91fCS1lGdyv3V8JLWUZ0VBw_GU7SyghKinU03LbCMmUOPgrMCDGkLkmc8g3MOz&_nc_ohc=RnrL0C0tn1gAX8q_xu0&_nc_ht=scontent.fmnl4-1.fna&oh=03_AdRPIawjggMcWc2jvYH6swLo0Lb4JL-471qWnbYSveaJHQ&oe=6582DFB5"
          className="w-[15%] absolute -mt-10 -rotate-[48deg]"
        />
        <div className=" flex flex-row text-white text-2xl w-full justify-center mt-[80%]">
          <p >{meas}</p>
          <p >{unit}</p>
          <p className=" pl-2">{direction}</p>
        </div>
      </div>
    </div>
  ) : type === 4 ? (
    <div>
      <p className="text-white flex text-2xl text-opacity-70 pb-1 indent-3">
        {name}
      </p>
      <div className="w-[527px] h-[180px] rounded-2xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10 flex flex-col items-center relative">
        {/* Placeholder Only*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 700 180"
          className="w-[700px] h-[100px] mt-3"
        >
          <rect width="100%" height="100%" fill="#ccc" />
        </svg>
        <div className="mt-3 w-full px-2 text-center">
          <p className="text-white text-2xl">{direction}</p>
        </div>
      </div>
    </div>
  ) : type === 5 ? (
    <div>
      <p className="text-white flex text-xl text-opacity-70 indent-3 mb-3">{name}</p>
      <div className="w-[20vw] h-[10vh] rounded-xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10 flex items-center justify-end">
        <div>
          <p className="flex text-white text-xs text-opacity-70 mb-12">{active}</p>
        </div>
        <div>
          <p className="flex text-white text-xs text-opacity-70">{time}</p>
        </div>
        <div className="flex items-center">
          <Switch />
        </div>
      </div>
    </div>
  ) : type === 6 ? (
    <div>
      <p className="indent-3 mb-3"></p>
      <section className="flex flex-row" >
        <div className="w-[125vh] h-[20vh] rounded-2xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10">
          <section className="flex flex-row">
            <p className="text-white flex text-[3vw] text-2xl text-opacity-70 mr-1 m-7">{name}</p>
            <p className="text-white flex text-[3vw] text-2xl text-opacity-70 ml-1 m-7">{unit}</p>
            <Hardware />
          </section >
          <div className="flex flex-col ml-6">
            <p className="flex text-white text-s text-opacity-70">{active}</p>
            <p className="flex text-white text-xl text-opacity-70">{time}</p>
          </div>
        </div>
      </section>
    </div>
  ) : type === 7 ? (
    <div>
      <p className="indent-3 mb-3"></p>
      <div className="w-[20vw] h-[9vh] rounded-xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10">
        <section>
          <div className="flex items-center">
            <p className="text-white flex text-2xl text-opacity-70 indent-10 m-4">{name}</p>
            <p className="text-white flex text-2xl text-opacity-70 indent-10">{meas}</p>
            <p className="text-white flex text-2xl text-opacity-70 indent-1">{unit}</p>
          </div>
        </section>
      </div>
    </div>
  ) : type === 8 ? (
    <div>
      <p className="text-white flex text-xl text-opacity-70 indent-3 pb-1">
        {name}
      </p>
      <div className="w-[40vw] h-[70vh] rounded-xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10 flex flex-col items-center justify-center pt-1">
        <img
          src="https://scontent.fmnl5-2.fna.fbcdn.net/v/t1.15752-9/371527176_1491047998142200_8745244766900826020_n.png?_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHmw-laRW82USnloo--wRLSaWKW8GcRJ91pYpbwZxEn3QdNvP0VkoSGiuG1i75gD1MDayEbNvGH5dYJqQNp3RVi&_nc_ohc=0rqBccLBB4oAX-sonUt&_nc_ht=scontent.fmnl5-2.fna&oh=03_AdS55fwAFyGl_m27Vrvrica_JMTs7dhjsmwJjOvrk0s_ww&oe=6582A0ED"
          className="w-[25%] absolute -mt-9"
        />
        <img
          src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.15752-9/375754561_1356953538275639_4269922165700191771_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEhxlsagpYNomRC_NWyOkZ3cr91fCS1lGdyv3V8JLWUZ0VBw_GU7SyghKinU03LbCMmUOPgrMCDGkLkmc8g3MOz&_nc_ohc=RnrL0C0tn1gAX8q_xu0&_nc_ht=scontent.fmnl4-1.fna&oh=03_AdRPIawjggMcWc2jvYH6swLo0Lb4JL-471qWnbYSveaJHQ&oe=6582DFB5"
          className="w-[25%] absolute -mt-9 -rotate-[48deg]"
        />
        <div className=" flex flex-row text-white text-2xl w-full justify-center mt-[70%]">
          <p >{meas}</p>
          <p >{unit}</p>
          <p className=" pl-2">{direction}</p>
        </div>
      </div>
    </div>

  ) : null; // Add this line to handle the case when type is not equal to 1 null
};

export default Display;
