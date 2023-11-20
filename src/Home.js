import React from "react";
// import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen" >
            <div className="login flex-col max-w-2xl mt-20 ml-9 flex-grow items-center justify-start text-[#C5A4D5] w-1/2">
                <div className="title">
                    <h1 className="font-bold text-5xl">Automatic Weather Station</h1>
                </div>
                <div className="locationtitle">
                    <h4 className="font-bold text-1.5xl mt-3">Caloocan</h4>
                </div>

                <div className="input-box mt-16 w-80 border-b-4 border-[#813DAE]">
                    <input type="text" className="w-90 border-none outline-none bg-transparent text-[#C5A4D5] text-2xl placeholder-[#C5A4D5]" placeholder="Username" />
                </div>

                <div className="input-box mt-11 mb-16 w-80 border-b-4 border-[#813DAE]">
                    <input type="password" className="w-90 border-none outline-none bg-transparent text-[#C5A4D5] text-2xl placeholder-[#C5A4D5] " placeholder="Password" />
                </div>

                <div className="ml-2">
                    {/* Use to="/dashboard" instead of to={/dashboard} */}
                    <Link to="/dashboard" class="btn w-80 border-4 border-[#C5B5CF] px-9 py-2 bg-transparent text-[#C5A4D5] text-xl ml-16">LOG IN</Link>

                    <p className="text-xs text-[#C5A4D5] mt-12 justify-normal ml-14">
                        Not Yet Registered?&nbsp;
                        <Link to="/signup" class="underline bg-transparent text-[#C5A4D5] text-xs">Click Here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
