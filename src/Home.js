import React from "react";
// import "./Home.css";
import { Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";

const Home = () => {
  return (
    <div className="bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen flex">
      <section>
        <div className="flex-col pt-20 pl-16 flex-grow items-center justify-start text-[#C5A4D5] w-[40vw] h-[100vh] bg-[#090909] bg-opacity-5">
          <div className="title">
            <h1 className="font-bold text-5xl">Automatic Weather Station</h1>
          </div>
          <div className="locationtitle">
            <h4 className="font-bold text-1.5xl mt-3">Caloocan</h4>
          </div>

          <LoginForm />
        </div>
      </section>
      <section className="flex justify-center items-center">
        <div className=" border-l-1 border-black w-[60vw] h-[100vh] justify-center flex items-center">
            <img src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.15752-9/370236256_188280324275435_1807418197420257246_n.png?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGzdnQ6LBrQ3c1T0QTIUjaVBYciduSvaSQFhyJ25K9pJFuIU_R5H7vGq31a2Nj7wAxnJKH03YeJ6H8MMP2c5taT&_nc_ohc=gkY6qxttooYAX-ohySW&_nc_ht=scontent.fmnl4-1.fna&oh=03_AdS7Bf9L97QPV-nTywwPyFWHYa4CeN6zISsKZntAGKVLjQ&oe=658713E6" className="h-[70vh] opacity-70 relative" />


            <div className="bg-black bg-opacity-80 border border-gray-500 border-opacity-5 rounded-full absolute flex items-center justify-center">
            <img src="https://scontent.fmnl5-2.fna.fbcdn.net/v/t1.15752-9/369034377_1409327419679665_1168268981160908960_n.png?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGKiXmkWQ1I90f4sqQ3JE_eK9Ji9_h7vTgr0mL3-Hu9OLKKNB6T3mRIAEGWWMB7LNDMwHLksefcwlI5mUS_FZ1T&_nc_ohc=uqmeni3iNbEAX8953KQ&_nc_oc=AQnwmFHWJkHxItgZSr7ETRi9hBX34k_GQQJfL5pa2sjRrjAovUcblQ-rNozr_9tZJogoqj5Z8kBxa2kl8OGeYNkO&_nc_ht=scontent.fmnl5-2.fna&oh=03_AdQ_bIC5RLZPOQgMQu-KbTo5sHura8s8_6GHF_x4UYTK5A&oe=6582858C" className="w-[50vh]"/>
          </div>

        </div>

      </section>
    </div>
  );
};

export default Home;
