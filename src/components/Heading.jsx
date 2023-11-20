const Heading = ({ type, name }) => {
    return (
        (type === 1) ? (
            <div className="flex-grow">
                <p className="text-[38px] text-[#C8A6DF] font-bold">
                    AUTOMATIC WEATHER SYSTEM (NORTH)
                </p>
                <hr className=" border-[#BFBFBF] w-1/3" />
                <p className="text-[#DCC0EA] text-lg text-opacity-70 -mt-1">{name}</p>
            </div>
        ) : null  // Add this line to handle the case when type is not equal to 1
    );
};

export default Heading;
