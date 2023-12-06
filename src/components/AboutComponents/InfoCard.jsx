import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Info = [
  {
    type: 1,
    image:
      "https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.15752-9/377278001_892876215584318_2321976139463398671_n.png?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeG626i6cb7WW7SVb0XEbS00WOXCG12xlFtY5cIbXbGUWxmB4ybWhYWOP7_9PmqccWygeruYAhR67X4dhaai216d&_nc_ohc=FgfKD9FMXEEAX8KW3xf&_nc_ht=scontent.fmnl4-3.fna&oh=03_AdRsrRKDmIJ2-MwehNqHtrO6yR2VL5yydTmI7qDmRrufSw&oe=65882A82",
    name: "ACERADO, Jhon Kenneth A.",
    role: "Logistics",
    grp: "6",
    contrib:
      "‘pag pinakikinggan ko mga kantang sinulat mo pinat-tibok mo nang kay bilis ang puso ko ‘pag pinakikinggan ko mga kantang sinulat mo pinat-tibok mo nang kay bilis ang puso ko",
    fb: "",
    ig: "",
    x: "",
    linkedin: "",
    email: "",
  },
  {
    type: 2,
    image:
      "https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.15752-9/371449675_330998986308830_9073205373293815841_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeE34Rky7aWjFjBBccB1eEDrGjWba6UQcJcaNZtrpRBwlzDeLyiT06mY7o40CqVY8McLp4DlL2N2N8tjuUO6UYkA&_nc_ohc=ZGxzFe4beSgAX9GaAjd&_nc_ht=scontent.fmnl9-3.fna&oh=03_AdRI8LPrR6JwPGa0unC45G8TvBjJcos4FffeIxo1d-Q4nA&oe=658C04DB",
    name: "BUTAC, Aloysius Atheos",
    role: "Software",
    grp: "7",
    contrib: "Hakdog hakdog hakdigididog",
    fb: "",
    ig: "",
    x: "",
    linkedin: "",
    email: "",
  },
  {
    type: 3,
    image:
      "https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.15752-9/400541304_283811200794902_5177226881643282807_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGJMJZgpRq2CMmyj8Jk47z4CZUuWRI8lqQJlS5ZEjyWpFkwEDhyHT_Z1Tnun_G4ysesBF9UmnhVjuXfaQZipz7h&_nc_ohc=dCsOVO9s3rAAX-gRZwg&_nc_ht=scontent.fmnl9-3.fna&oh=03_AdTpGqkaEbLFIGu3jx7Nd7g7lWwdCysyFRTlLELsivh5-Q&oe=658C02A8",
    name: "CUSTODIO, Justin Chyle",
    role: "Software",
    grp: "6",
    contrib:
      "Oh, 'di ba? Nakakaputang ina tayo'y lumilipad, at ako'y iniwan mo. Oh, 'di ba? Pinagmukha mo 'kong tanga  tayo'y lumilipad, at ako'y iniwan mo sa ereeee~~",
    fb: "",
    ig: "",
    x: "",
    linkedin: "",
    email: "",
  },
  {
    type: 4,
    image:
      "https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/369540218_2987200271415654_119379260026683366_n.png?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGyYYRP5YjDYcQBntdYqpNd8xh90S3vaPHzGH3RLe9o8RkKbwnjjAUfAAtc9WJfgJu0Ow2d0FtlfChPjHNYE73j&_nc_ohc=tjX4tqaeGgsAX-nC-jE&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdQjqmysEi6pcTVh6h2RcWrdwaAVZnZQfN44oqz5qrUUUw&oe=658BFC0F",
    name: "ESTEBAN, Kelly Brend",
    role: "Software",
    grp: "4",
    contrib:
      "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.",
    fb: "",
    ig: "",
    x: "",
    linkedin: "",
    email: "",
  },
  {
    type: 5,
    image:
      "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.15752-9/377151208_902187908135620_5687387580835267525_n.png?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEnZ9LZXbHfZNEcsKEG8O8fbICMN0rw9LVsgIw3SvD0tZPvWU1OI8Mp-4AOmvhWo0UtTVLoiWcDWYyYcV3XJF7f&_nc_ohc=ywDllYfZcTIAX_nUlKc&_nc_ht=scontent.fmnl4-1.fna&oh=03_AdSvEmlOBrD7IWhx2f2d6ficgS3KpGM814w1ZaN7j_j3jA&oe=658BFEE7",
    name: "GESTOSO, Mishca Ella",
    role: "Hardware",
    grp: "4",
    contrib: "YUYUYUYUYUYUYUYUYUYUYUYUYYUYUYUYU",
    fb: "",
    ig: "",
    x: "",
    linkedin: "",
    email: "",
  },
  {
    type: 6,
    image:
      "https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/367369523_2953119724824852_6433658846559169968_n.png?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHE2s3ToSlJ42vL5KJ_91oT3caDNgC9HSrdxoM2AL0dKvMTARxrR1ga2LO1YaXul5qPyBxCjM61V4H_Z4-S0C2R&_nc_ohc=uTQG_znmGZMAX9QpCW-&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdTEz86MYvsDNcl5eJQKcexJJ_RnB2Aztwg0zSSmbUfQkw&oe=658BE42F",
    name: "NAZRAN, Satnam S.",
    role: "Hardware",
    grp: "6",
    contrib:
      "I was a girl in the village doing alright then I became a princess overnight now I gotta figure out how to do it right so much to learn and see up in the castle with my new family in a school that's just for royalty a whole enchanted world is waiting for me I'm so excited to be (Sofia the First)",
    fb: "",
    ig: "",
    x: "",
    linkedin: "",
    email: "",
  },
  {
    type: 7,
    image:
      "https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/373461949_1094110211764097_7432342566880177425_n.png?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHi9YrjOZwacMMKWt34-X9DDthlobW3susO2GWhtbey67_hTWZ19ORxHUBoxI804G-cCW-9DfqY4T7fOH1F3OjO&_nc_ohc=JCtbXeP6kM8AX9NCF6g&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdTySPqUCvVGvuxfAiGJh4cCZdqWv7TlxBJU7Qz4U83SBA&oe=658C173D",
    name: "PUBLEO, Ray Tristan",
    role: "Hardware",
    grp: "4",
    contrib:
      "This one is for the boys with the booming system Top down, AC with the cooler system When he come up in the club, he be blazin' up Got stacks on deck like he savin' up And he ill, he real, he might gotta deal He pop bottles and he got the right kind of build He cold, he dope, he might sell coke",
    fb: "",
    ig: "",
    x: "",
    linkedin: "",
    email: "",
  },
  {
    type: 8,
    image:
      "https://scontent.fmnl9-4.fna.fbcdn.net/v/t1.15752-9/386476764_1283902992195621_3947930693518286391_n.png?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeE3BZCgBSUnlINMFEyK5oUZuhqKzek1OYG6GorN6TU5gXBeH0GYfJcZY59LzxtApur9naPIHZMzCozRQvleH8-P&_nc_ohc=S4BEEydRoqcAX8DAZd4&_nc_ht=scontent.fmnl9-4.fna&oh=03_AdRziOGY16YwMWEVPE1GlpcJ0SgzCaXiBC9lqdOTloHusw&oe=658BFCC0",
    name: "RIEGO DE DIOS, Celyssa Chryse",
    role: "Hardware",
    grp: "4",
    contrib:
      "I'm a Barbie girl in the Barbie world Life in plastic, it's fantastic You can brush my hair, undress me everywhere Imagination, life is your creation Come on, Barbie, let's go party I'm a Barbie girl in the Barbie world Life in plastic, it's fantastic You can brush my hair, undress me everywhere Imagination, life is your creation",
    fb: "",
    ig: "",
    x: "",
    linkedin: "",
    email: "",
  },
  {
    type: 9,
    image:
      "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.15752-9/371514090_308412168757434_3028382590205959507_n.png?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeH9KtB8XHNc3yBgXKTg6kIALOlZxhEMRqks6VnGEQxGqc-fA2qjwe1nwgK2wnpeRw3e1IpT56M6pQUyuJSl5UrS&_nc_ohc=AbjgbX4Zp3kAX9uQZWr&_nc_ht=scontent.fmnl4-1.fna&oh=03_AdQd0EIdPQTo7jwazKZOoqgcUnRLrjpWimI1PVN1XRCicQ&oe=658C2BD6",
    name: "RIEGO DE DIOS, Poncholo T.",
    role: "Software & Hardware",
    grp: "6",
    contrib:
      "Sa'n ka punta? To the moon Road trip, vroom, vroom Skrr, skrr, zoom, zoom Sa fake, no room Mga mata namumula Asa'n ang three's, nadala mo ba? Bawal ang tuss at peke sa byahe Kung isa ka d'yan, ika'y bumaba Sa'n ka punta? To the moon Road trip, vroom, vroom Skrr, skrr, zoom, zoom Sa fake, no room",
    fb: "",
    ig: "",
    x: "",
    linkedin: "",
    email: "",
  },
  {
    type: 10,
    image:
      "https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.15752-9/368391891_1536645203824857_4034874118570600887_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVgWCQcAxcsByVTvyymxl6_C-S9A1f1Hf8L5L0DV_Ud_Z30f7NAejkMOFuR9rHA_O-aTPQX-98VYK7hHM28kmg&_nc_ohc=I-rDd6j6L-IAX_XuMj0&_nc_ht=scontent.fmnl9-2.fna&oh=03_AdS-8RTYOFOZt_FbwT_I4SnZbzZoUL-WeW7GhlaAuKbI7w&oe=658BF15C",
    name: "RIZARE, John Dale",
    role: "Hardware",
    grp: "4",
    contrib:
      "It really hurts ang magmahal nang ganito Kung sino pa'ng pinili ko hindi makuha nang buo Hanggang gano'n na lang nga kailangan ko 'tong tanggapin Na sa puso mo mayro'n na ngang ibang umaangkin At alam ko na rin na mayro'n nang nagmamay-ari Sa pag-ibig sa iyo ako itong nakikihati At ano man ang mangyari 'di ko kayang manumbat At kahit pa ilihim mo ako sa lahat",
    fb: "",
    ig: "",
    x: "",
    linkedin: "",
    email: "",
  },
  {
    type: 11,
    image:
      "https://scontent.fmnl9-4.fna.fbcdn.net/v/t1.15752-9/370202366_365183209371505_5342591145745771997_n.png?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFAvAKetri1S9TSru9mj8u_lVhY6xzS7P6VWFjrHNLs_mstFov7TkwK_CwkSppahonf46guEgxPOCKtfVuzo8F6&_nc_ohc=UFm52iD4IQUAX8pxEIj&_nc_ht=scontent.fmnl9-4.fna&oh=03_AdSGNkDlvD1PxyYERnOqpwutXkSCk26WhHP-4ZFFt0c5-w&oe=658BFE19",
    name: "UMITEN, Benedict Aaron",
    role: "Hardware",
    grp: "4",
    contrib:
      "May tatlong bibe akong nakita Mataba mapayat mga bibe Ngunit ang may pakpak Sa likod na iisa Siya ang lider na nagsabi ng Kwak, kwak, Kwak, kwak, Kwak, kwak",
    fb: "",
    ig: "",
    x: "",
    linkedin: "",
    email: "",
  },
  {
    type: 12,
    image:
      "https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.15752-9/387477732_858270162454672_6316177058677256617_n.png?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeECiUYgb6Dk1eTKgyuNUIOG6mPgpNNFe6rqY-Ck00V7qnvL28OADDaJmRy3I9xkTAtAVvFwOOqptV-ojYJZ4lxA&_nc_ohc=MQthf8q0mbYAX8EIaO8&_nc_ht=scontent.fmnl4-5.fna&oh=03_AdT5PfaeWKD10LYT2gBTEyWSTLIGyavJ3_-ewka8rULD5w&oe=658C106B",
    name: "VILLASOR, Vince Kazer M.",
    role: "Software & Logistics",
    grp: "7",
    contrib:
      "I wanna be the very best Like no one ever was To catch them is my real test To train them is my cause I will travel across the land Searching far and wide Teach Pokémon to understand The power that's inside (Pokémon    Gotta catch 'em all) It's you and me I know it's my destiny (Pokémon) Oh, you're my best friend In a world we must defend",
    fb: "",
    ig: "",
    x: "",
    linkedin: "",
    email: "",
  },
];

const InfoCard = ({ type }) => {
  return (
    <>
      {Info.map((btn, index) =>
        type === btn.type ? (
          <div key={index}>
            <div className="">
              <img
                className="-ml-[9.5vw] mt-7 h-[65vh] object-cover absolute z-10 origin-right"
                src={btn.image}
                alt="Project Image"
              />
            </div>

            <article className="ml-[16vw] h-[100%] z-50 text-white text-opacity-70 py-4 pr-6">
              <p className="font-bold text-md">NAME:</p>
              <p className="text-sm mb-1">{btn.name}</p>

              <p className="font-bold text-md">ROLE:</p>
              <p className="text-sm mb-1">{btn.role}</p>

              <p className="font-bold text-md">Original Group:</p>
              <p className="text-sm mb-1">Group {btn.grp}</p>

              <p className="font-bold text-md">Contributions:</p>
              <p className="text-sm mb-1 text-justify">{btn.contrib}</p>

              <p className="font-bold text-md -mb-0">SOCIALS:</p>
              <section className="flex flex-row z-40 absolute text-[#BC00FF] text-[6vh] text-opacity-50">
                <Link to={btn.fb} className="w-auto h-auto">
                  <Icon
                    icon="ic:baseline-facebook"
                    className="border-none bg-transparent"
                  />
                </Link>

                <Link to={btn.ig} className="w-auto h-auto">
                  <Icon
                    icon="mdi:instagram"
                    className="border-none bg-transparent"
                  />
                </Link>

                <Link to={btn.x} className="w-auto h-auto">
                  <Icon
                    icon="mdi:twitter"
                    className="border-none bg-transparent"
                  />
                </Link>

                <Link to={btn.linkedin} className="w-auto h-auto">
                  <Icon
                    icon="mdi:linkedin"
                    className="border-none bg-transparent"
                  />
                </Link>

                <button className="w-auto h-auto group">
                  <div className="text-xs text-white shadow-purple-700 absolute w-[12vh] h-[3vh]  bg-purple-800 bg-opacity-30 -mb-[5vh] rounded-2xl opacity-30 bottom-[2vh] -right-[1.5vw] border-2 hidden  group-hover:block">
                  <p className="">Click to Copy</p>
                  </div>
                  <CopyToClipboard text={btn.email}>
                    <Icon
                      icon="ic:outline-email"
                      className="border-none bg-transparent"
                    />
                  </CopyToClipboard>
                </button>
              </section>
            </article>
          </div>
        ) : null
      )}
    </>
  );
};

export default InfoCard;
