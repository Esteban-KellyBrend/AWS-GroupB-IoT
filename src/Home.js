import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
      <div className="flex justify-center items-center mt-[40vh]">
        <Link to="/dashboard" className="text-white bg-purple-600 text-3xl px-3 py-1 rounded-md border-white border-2">
          Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Home;
