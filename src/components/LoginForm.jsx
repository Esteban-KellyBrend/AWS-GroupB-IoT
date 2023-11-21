import React, { useState } from "react";
import { signInWithEmailAndPassword  } from "firebase/auth";
import { Link, useNavigate  } from "react-router-dom";
import { auth } from "./auth/firebase";

const LoginForm = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("Email");
    const [password, setPassword] = useState("Password");

    const [authUser, setAuthUser] = useState("");
    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
            /** Tasks if Login success */
            console.log(userCredential); 
            navigate("/dashboard");
        })
        .catch((error) => { 
            /** Tasks if Login failed */
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    };

    return (
        <form className="login" onSubmit={ signIn }>
            <div className="input-box mt-16 w-80 border-b-4 border-[#813DAE]">
                <input name="username" type="text" onChange={(e) => setEmail(e.target.value)} className="w-90 border-none outline-none bg-transparent text-[#C5A4D5] text-2xl placeholder-[#C5A4D5]" placeholder={email} />
            </div>

            <div className="input-box mt-11 mb-16 w-80 border-b-4 border-[#813DAE]">
                <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} className="w-90 border-none outline-none bg-transparent text-[#C5A4D5] text-2xl placeholder-[#C5A4D5] " placeholder={password} />
            </div>

            <div className="ml-2">
                <button type="submit" className="btn w-80 border-4 border-[#C5B5CF] px-9 py-2 bg-transparent text-[#C5A4D5] text-xl ml-16">LOG IN</button>

                <p className="text-xs text-[#C5A4D5] mt-12 justify-normal ml-14">
                    Not Yet Registered?&nbsp;
                    <Link to="/signup" className="underline bg-transparent text-[#C5A4D5] text-xs">Click Here</Link>
                </p>
            </div>
        </form>
    );
}

export default LoginForm;