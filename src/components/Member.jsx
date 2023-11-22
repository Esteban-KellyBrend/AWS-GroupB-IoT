import React from "react";

function Member() {
  return (
    <div>
      <button className=" w-48 h-[30vh] border-2 bg-purple-900 bg-opacity-20 border-white border-opacity-10 flex justify-center items-center focus:right-0 focus:w-[87vw] focus:h-[34vh] foucs:rounded-xl focus:ml-[18vw]   focus:bottom-0 focus:bg-opacity-100 transition-all duration-75 focus:justify-start focus:p-8 group">
        <div className="rounded-full w-32 h-32  flex justify-center border-purple-600 border-opacity-30 bg-white bg-opacity-5 border mt-10 group-focus:bg-white">
        <img src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.15752-9/400220221_1053311792667772_4693067506481026175_n.png?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGticXg3tMcfVfCy-d1eWKU2ZPSjDKzYfDZk9KMMrNh8E9PcuomIBkcPdBX1ub3kewL_To4FEu3qzlBP8edYN4B&_nc_ohc=7M9OqCX0CgMAX_Um6-Z&_nc_ht=scontent.fmnl4-2.fna&oh=03_AdRd8Kww5Qvvczn8zU6nHF6Cb-5Y2vXBxWgM79KgCzS3ng&oe=65844906" className="absolute h-[30vh] rounded-full -mt-[3.8rem]"/>
        </div>
      </button>
    </div>
  );
}

export default Member;
