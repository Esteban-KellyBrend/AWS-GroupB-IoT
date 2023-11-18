import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="login flex-col max-w-2xl mt-30 ml-6">
          <div className="mt-24">
            <div className="title">
              <h1 className="font-bold text-4xl">Automatic Weather Station</h1>
            </div>
            <div className="locationtitle">
              <h4 className="font-bold text-1.5xl mt-3">Caloocan</h4>
            </div>

            <div className="input-box">
                <input type="text" placeholder="Username"/>
            </div>

            <div className="input-box">
                <input type="text" placeholder="Email"/>
            </div>

            <div className="input-box">
                <input type="password" placeholder="Password"/>
            </div>

            <div>
                {/* Use to="/dashboard" instead of to={/dashboard} */}
                <Link to="/dashboard" className="btn">LOG IN</Link>
            </div>
            </div>
        </div>
    );
}

export default Home;
