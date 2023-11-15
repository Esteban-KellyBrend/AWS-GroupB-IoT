import React from "react";
import "./loginpage.css"

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

            <div>
                <button type="button" class="btn">LOG IN</button>
            </div>

        </div>
    )
}

export default LoginPage

