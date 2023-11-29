import React, { useState } from "react";
import Member from "../components/Member";
import InfoCard from "./InfoCard";

function Creators() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const MemberBtn = [
    {
      image:
        "https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.15752-9/377278001_892876215584318_2321976139463398671_n.png?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeG626i6cb7WW7SVb0XEbS00WOXCG12xlFtY5cIbXbGUWxmB4ybWhYWOP7_9PmqccWygeruYAhR67X4dhaai216d&_nc_ohc=FgfKD9FMXEEAX8KW3xf&_nc_ht=scontent.fmnl4-3.fna&oh=03_AdRsrRKDmIJ2-MwehNqHtrO6yR2VL5yydTmI7qDmRrufSw&oe=65882A82",
      DisplayCard: "Acerado",
    },
    {
      image:
        "https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.15752-9/371449675_330998986308830_9073205373293815841_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeE34Rky7aWjFjBBccB1eEDrGjWba6UQcJcaNZtrpRBwlzDeLyiT06mY7o40CqVY8McLp4DlL2N2N8tjuUO6UYkA&_nc_ohc=ZGxzFe4beSgAX9GaAjd&_nc_ht=scontent.fmnl9-3.fna&oh=03_AdRI8LPrR6JwPGa0unC45G8TvBjJcos4FffeIxo1d-Q4nA&oe=658C04DB",
      DisplayCard: "Butac",
    },
    {
      image:
        "https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.15752-9/400541304_283811200794902_5177226881643282807_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGJMJZgpRq2CMmyj8Jk47z4CZUuWRI8lqQJlS5ZEjyWpFkwEDhyHT_Z1Tnun_G4ysesBF9UmnhVjuXfaQZipz7h&_nc_ohc=dCsOVO9s3rAAX-gRZwg&_nc_ht=scontent.fmnl9-3.fna&oh=03_AdTpGqkaEbLFIGu3jx7Nd7g7lWwdCysyFRTlLELsivh5-Q&oe=658C02A8",
      DisplayCard: "Custodio",
    },
    {
      image:
        "https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/369540218_2987200271415654_119379260026683366_n.png?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGyYYRP5YjDYcQBntdYqpNd8xh90S3vaPHzGH3RLe9o8RkKbwnjjAUfAAtc9WJfgJu0Ow2d0FtlfChPjHNYE73j&_nc_ohc=tjX4tqaeGgsAX-nC-jE&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdQjqmysEi6pcTVh6h2RcWrdwaAVZnZQfN44oqz5qrUUUw&oe=658BFC0F",
      DisplayCard: "Esteban",
    },
    {
      image:
        "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.15752-9/377151208_902187908135620_5687387580835267525_n.png?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEnZ9LZXbHfZNEcsKEG8O8fbICMN0rw9LVsgIw3SvD0tZPvWU1OI8Mp-4AOmvhWo0UtTVLoiWcDWYyYcV3XJF7f&_nc_ohc=ywDllYfZcTIAX_nUlKc&_nc_ht=scontent.fmnl4-1.fna&oh=03_AdSvEmlOBrD7IWhx2f2d6ficgS3KpGM814w1ZaN7j_j3jA&oe=658BFEE7",
      DisplayCard: "Gestoso",
    },
    {
      image:
        "https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/367369523_2953119724824852_6433658846559169968_n.png?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHE2s3ToSlJ42vL5KJ_91oT3caDNgC9HSrdxoM2AL0dKvMTARxrR1ga2LO1YaXul5qPyBxCjM61V4H_Z4-S0C2R&_nc_ohc=uTQG_znmGZMAX9QpCW-&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdTEz86MYvsDNcl5eJQKcexJJ_RnB2Aztwg0zSSmbUfQkw&oe=658BE42F",
      DisplayCard: "Nazran",
    },
    {
      image:
        "https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/373461949_1094110211764097_7432342566880177425_n.png?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHi9YrjOZwacMMKWt34-X9DDthlobW3susO2GWhtbey67_hTWZ19ORxHUBoxI804G-cCW-9DfqY4T7fOH1F3OjO&_nc_ohc=JCtbXeP6kM8AX9NCF6g&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdTySPqUCvVGvuxfAiGJh4cCZdqWv7TlxBJU7Qz4U83SBA&oe=658C173D",
      DisplayCard: "Publeo",
    },
    {
      image:
        "https://scontent.fmnl9-4.fna.fbcdn.net/v/t1.15752-9/386476764_1283902992195621_3947930693518286391_n.png?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeE3BZCgBSUnlINMFEyK5oUZuhqKzek1OYG6GorN6TU5gXBeH0GYfJcZY59LzxtApur9naPIHZMzCozRQvleH8-P&_nc_ohc=S4BEEydRoqcAX8DAZd4&_nc_ht=scontent.fmnl9-4.fna&oh=03_AdRziOGY16YwMWEVPE1GlpcJ0SgzCaXiBC9lqdOTloHusw&oe=658BFCC0",
      DisplayCard: "Celyssa",
    },
    {
      image:
        "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.15752-9/371514090_308412168757434_3028382590205959507_n.png?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeH9KtB8XHNc3yBgXKTg6kIALOlZxhEMRqks6VnGEQxGqc-fA2qjwe1nwgK2wnpeRw3e1IpT56M6pQUyuJSl5UrS&_nc_ohc=AbjgbX4Zp3kAX9uQZWr&_nc_ht=scontent.fmnl4-1.fna&oh=03_AdQd0EIdPQTo7jwazKZOoqgcUnRLrjpWimI1PVN1XRCicQ&oe=658C2BD6",
      DisplayCard: "Cholo",
    },
    {
      image:
        "https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.15752-9/368391891_1536645203824857_4034874118570600887_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVgWCQcAxcsByVTvyymxl6_C-S9A1f1Hf8L5L0DV_Ud_Z30f7NAejkMOFuR9rHA_O-aTPQX-98VYK7hHM28kmg&_nc_ohc=I-rDd6j6L-IAX_XuMj0&_nc_ht=scontent.fmnl9-2.fna&oh=03_AdS-8RTYOFOZt_FbwT_I4SnZbzZoUL-WeW7GhlaAuKbI7w&oe=658BF15C",
      DisplayCard: "Rizare",
    },
    {
      image:
        "https://scontent.fmnl9-4.fna.fbcdn.net/v/t1.15752-9/370202366_365183209371505_5342591145745771997_n.png?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFAvAKetri1S9TSru9mj8u_lVhY6xzS7P6VWFjrHNLs_mstFov7TkwK_CwkSppahonf46guEgxPOCKtfVuzo8F6&_nc_ohc=UFm52iD4IQUAX8pxEIj&_nc_ht=scontent.fmnl9-4.fna&oh=03_AdSGNkDlvD1PxyYERnOqpwutXkSCk26WhHP-4ZFFt0c5-w&oe=658BFE19",
      DisplayCard: "Umiten",
    },
    {
      image:
        "https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.15752-9/372062900_315358547956321_2697810666400805843_n.png?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHKTbfZFl4kTnmT1N8W5A9LdYjMnyldsg91iMyfKV2yDxTgbktm6bFuKrZi-QVa4NYYDjFlODpeQZrOM6q2T4RJ&_nc_ohc=yzX5BUDkvIwAX_vg0Gf&_nc_ht=scontent.fmnl4-3.fna&oh=03_AdRaGlhyzuHPEuLltwhjvQnnqpsLD7lNGexFP_fExjeSyQ&oe=658BEBA2",
      DisplayCard: "Villasor",
    },
  ];

  const CardShow = [
    {
      type: 1,
      id: "Acerado",
    },
    {
      type: 2,
      id: "Butac",
    },
    {
      type: 3,
      id: "Custodio",
    },
    {
      type: 4,
      id: "Esteban",
    },
    {
      type: 5,
      id: "Gestoso",
    },
    {
      type: 6,
      id: "Nazran",
    },
    {
      type: 7,
      id: "Publeo",
    },
    {
      type: 8,
      id: "Celyssa",
    },
    {
      type: 9,
      id: "Cholo",
    },
    {
      type: 10,
      id: "Rizare",
    },
    {
      type: 11,
      id: "Umiten",
    },
    {
      type: 12,
      id: "Villasor",
    },
  ];

  return (
    <div className=" transition-all pl-[2vw] mt-[3vh] duration-100">
      <section className="flex max-w-[48vw]">
        <section className="flex flex-wrap gap-3 items-center">
          {MemberBtn.map((btn, index) => (
            <button onClick={() => handleButtonClick(btn.DisplayCard)}>
              <Member image={btn.image} />
            </button>
          ))}
        </section>

        <div className="border-2 border-white w-[36vw] h-[63vh] absolute -ml-5 rounded-3xl border-opacity-30 left-[60vw] overflow-hidden ">
          <div className="opacity-20">
            <div className="bg-gradient-to-r from-purple-500 to-transparent from-5% bg-opacity-5 w-full h-full absolute z-10" />
          </div>

          {CardShow.map((btn, index) => (
            <div
              id={btn.id}
              className={`${activeButton === btn.id ? "" : "hidden"}`}
            >
              <InfoCard type={btn.type} />
            </div>
          ))}
        </div>

        {/* <Bang /> */}
      </section>
    </div>
  );
}

export default Creators;
