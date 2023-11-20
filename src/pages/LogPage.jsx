import React from "react";
import "./loginpage.css"
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="login">
            <div><h1>Automatic Weather Station</h1></div>
            <div><h4>Caloocan</h4></div>
            <div class="input-box">
                <input type="text" placeholder="Username"/>
            </div>

            <div class="input-box">
                <input type="text" placeholder="Email"/>
            </div>

            <div class="input-box">
                <input type="password" placeholder="Password"/>
            </div>

            <div class="logbutton">
                <Link to={/dashboard}  type="button" class="btn">LOG IN </Link>
            </div>

        </div>
    )
}

export default LoginPage

