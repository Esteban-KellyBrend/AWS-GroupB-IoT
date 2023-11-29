import React from "react";

function Trial() {
  return (
    <div>
      {/* Trial Codes for Experiments */}
      <div className="w-[8vh] h-[34.6vw] text-white text-sm text-opacity-40 flex flex-col border border-red-700">
        <button
          className="w-auto h-1/3 flex justify-center items-center bg-purple-600 bg-opacity-20 border-2 border-white border-opacity-20 rounded-tl-2xl focus:font-bold focus:border-opacity-40 focus:bg-opacity-30 hover:bg-opacity-25 focus:text-opacity-60"
          style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
        >
         <p className="rotate-180"> The Creators </p>
        </button>
        <button
          className="w-auto h-1/3 flex justify-center items-center bg-purple-600 bg-opacity-20 border-2 border-white border-opacity-20 rounded-tl-2xl focus:font-bold focus:border-opacity-40 focus:bg-opacity-30 hover:bg-opacity-25 focus:text-opacity-60"
          style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
        >
         <p className="rotate-180"> System Overview </p>
        </button>
        <button
          className="w-auto h-1/3 flex justify-center items-center bg-purple-600 bg-opacity-20 border-2 border-white border-opacity-20 rounded-tl-2xl focus:font-bold focus:border-opacity-40 focus:bg-opacity-30 hover:bg-opacity-25 focus:text-opacity-60"
          style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
        >
         <p className="rotate-180"> Project Description </p>
        </button>
      </div>
    </div>
  );
}

export default Trial;
