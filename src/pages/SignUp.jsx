import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../components/auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();

  /**
   *
   * As of now, names and username are not stored into
   * the database, i.e. we are only using email and password
   * to authenticate w/ firebase. Looking into how to
   * store user data.
   *
   * by: Butac
   */

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      }) // Log user credentials
      .catch((error) => {
        console.log(error);
      }); // Log error

    navigate("/");
  };

  return (
    <div className="bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
      <form
        className="login max-w-2xl mt-20 mx-auto flex-grow items-center justify-start text-[#C5A4D5]"
        onSubmit={signUp}
      >
        <div className="title">
          <h1 className="font-bold text-5xl text-center">
            Automatic Weather Station
          </h1>
        </div>
        <div className="locationtitle">
          <h4 className="font-bold text-1.5xl mt-3 text-center">Caloocan</h4>
        </div>
        <section className="flex flex-row gap-32">
          <div className="input-box mt-11 mx-auto w-80 border-b-4 border-[#813DAE]">
            <input
              type="text"
              className="w-90 border-none outline-none bg-transparent placeholder-[#C5A4D5] text-[#C5A4D5] text-2xl"
              placeholder="First Name"
            />
          </div>

          <div className="input-box mt-11 mx-auto w-80 border-b-4 border-[#813DAE]">
            <input
              type="text"
              className="w-90 border-none outline-none bg-transparent placeholder-[#C5A4D5] text-[#C5A4D5] text-2xl"
              placeholder="Last Name"
            />
          </div>
        </section>
        {/* <div className="input-box mt-11 mx-auto w-80 border-b-4 border-[#813DAE]">
                    <input type="text" className="w-90 border-none outline-none bg-transparent placeholder-[#C5A4D5] text-[#C5A4D5] text-2xl" placeholder="Username" />
                </div> */}
        <section className="flex flex-row gap-32 mb-10">
          <div className="input-box mt-11 mx-auto w-80 border-b-4 border-[#813DAE]">
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="w-90 border-none outline-none bg-transparent placeholder-[#C5A4D5] text-[#C5A4D5] text-2xl"
              placeholder="Email"
            />
          </div>
          
          <div className="input-box mt-11 mx-auto w-80 border-b-4 border-[#813DAE]">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-90 border-none outline-none bg-transparent placeholder-[#C5A4D5] text-[#C5A4D5] text-2xl"
              placeholder="Password"
            />
          </div>
          </section>

        <div className="text-center">
          <button
            type="submit"
            className="btn w-50 border-4 border-[#C5B5CF] px-9 py-2 bg-transparent text-[#C5A4D5] text-xl "
          >
            SIGN UP
          </button>

          <p className="text-xs text-[#C5A4D5] mt-16 justify-normal text-center">
            Already registered?&nbsp;
            <Link
              to="/"
              className="underline bg-transparent text-[#C5A4D5] text-xs"
            >
              Click Here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
