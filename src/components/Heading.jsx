const Heading = ({ name }) => {
  return (
    <div className="flex-grow">
      <p className="text-[38px] text-[#C8A6DF] font-bold">
        AUTOMATIC WEATHER SYSTEM (NORTH)
      </p>
      <hr className="border-[#BFBFBF] w-1/3" />
      {name && (
        <p className="text-[#DCC0EA] text-lg text-opacity-70 -mt-1">{name}</p>
      )}
    </div>
  );
};

export default Heading;
