import React from "react";
import "./loginpage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate();

    return (
        <form className="login" onSubmit={ () => navigate("dashboard") }>
            <div><h1>Automatic Weather Station</h1></div>
            <div><h4>Caloocan</h4></div>
            <div class="input-box">
                <input name="username" type="text" placeholder="Username"/>
            </div>

            <div class="input-box">
                <input name="email" type="text" placeholder="Email"/>
            </div>

            <div class="input-box">
                <input name="password" type="password" placeholder="Password"/>
            </div>

            <div class="logbutton">
                {/* <Link to={/auth}  type="button" class="btn">LOG IN </Link> */}
                <button type="submit">LOG IN</button>
            </div>

        </form>
    )
}

export default LoginPage

