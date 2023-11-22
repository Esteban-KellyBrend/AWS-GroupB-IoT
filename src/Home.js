import React from "react";
// import "./Home.css";
import { Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";

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

                <LoginForm />

            </div>
        </div>
    );
}

export default Home;
