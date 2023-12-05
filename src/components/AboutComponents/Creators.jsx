import React, { useState } from "react";
import Member from "./Member";
import InfoCard from "./InfoCard";

function Creators() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const MemberBtn = [
    {
      image:
        "https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.15752-9/379658420_196978513467616_8680073330147374325_n.png?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeE7weypwC6T5VSSFq1W1ODeSjGSv4qrzCJKMZK_iqvMIi-PjhVDwYLko6KumI7aNMJSNSIsmkEvOHYaJiwPk6MJ&_nc_ohc=h-U1mnieurgAX-wDqEA&_nc_ht=scontent.fmnl4-2.fna&oh=03_AdRxi8t7KN_B5LKlCXszDYdR7Gc1VI9-Zd2rFonereJPrw&oe=6590295F",
      DisplayCard: "Acerado",
      name: "Jhon Kenneth Acerado",
    },
    {
      image:
        "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.15752-9/399898186_686940816747175_2667997964298029790_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHknGKnAQO9h2DLlHA1wQh1VjTyIvkOlIFWNPIi-Q6UgTbdiGMOPD6qy09JpzmXe0lH2EmUZtS9dTw9aDdaXkov&_nc_ohc=wqn_4zK4gAsAX--O6QV&_nc_ht=scontent.fmnl4-1.fna&oh=03_AdS38zOC8YLXOqyZqcRc1DL0S7_0U6ehK3GEK4N7HuoywA&oe=65902935",
      DisplayCard: "Butac",
      name: "Aloysius Atheos Butac",
    },
    {
      image:
        "https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.15752-9/406962633_1265731447438874_4615564523703720872_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHqVDfWelMv55YyyTgYXknxAJBUonNCJU4AkFSic0IlTqyIq8UPkfSDLtsxFrp2DfmpxJSyIKJuH5Y_3nv1Xadj&_nc_ohc=k5UeCQjzvbcAX_h91vW&_nc_ht=scontent.fmnl4-6.fna&oh=03_AdSL4OB5I9y5QDSb8LqB4B2Y8s2YsLsIJqq1b7UN_LvE-Q&oe=65901687",
      DisplayCard: "Custodio",
      name: "Justin Chyle Custodio",
    },
    {
      image:
        "https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.15752-9/372419450_308274968714590_9179892046090233952_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeH7O4l25BexD_YnwNQ6wmbRjtqimb_HCliO2qKZv8cKWIAWjw306RD6J7Clo02Vp4P-xW6zdHuYh-66xRP8iD7g&_nc_ohc=9bL700JUvBwAX9p6SpV&_nc_ht=scontent.fmnl4-2.fna&oh=03_AdQMKPbz32HpTbL3JLualDFtYAoMaMWjBVDXhSh7DnX2VQ&oe=65902B53",
      DisplayCard: "Esteban",
      name: "Kelly Brend Esteban",
    },
    {
      image:
        "https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.15752-9/371521094_1444855736070756_554261058322310388_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeENjR2YGrFNb17CLR8gZqEh3RDycQSpLGjdEPJxBKksaDxP-Iyqbk9FHQsUkONnavSsZhq1gb8tRbqkypIlrESA&_nc_ohc=iTi6wTI2DLkAX8LOSnV&_nc_ht=scontent.fmnl4-2.fna&oh=03_AdSi7FPNnmpyZ0ugzYEc3VL2AOYniSlhAOPEtFEnsmpNfQ&oe=659034BE",
      DisplayCard: "Gestoso",
      name: "Mishca Ella Gestoso",
    },
    {
      image:
        "https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.15752-9/400460716_1017604926127104_7568099792272295044_n.png?_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFVIhJ4hUZIgW8M5a-Y2ktlLpbYDyreryUultgPKt6vJUjthIjcLiITpAfKTa2Xe1-WcmsFmdUCna7oEBZ4rRld&_nc_ohc=2SmDp5fH0KEAX8zf_ok&_nc_ht=scontent.fmnl4-6.fna&oh=03_AdR0uU6OE1q3LwkXx8jE_ed2zKKkuD_dPdNrV1B5DYsmGw&oe=659002A1",
      DisplayCard: "Nazran",
      name: "Satnam Nazran",
    },
    {
      image:
        "https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.15752-9/400041940_110377705503644_2591316552881556896_n.png?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEVe6CuVauA8_CPhE-DSWzCBvlZOO-qlYMG-Vk476qVg6XBCqMtYd8pSVaMG3MgNMDL20vS9DPQRDS2bE5WAzPe&_nc_ohc=HgMq84lnWlQAX9ww6P3&_nc_ht=scontent.fmnl4-3.fna&oh=03_AdR5QUcKGj2WTplnrrBZcNbi7nq9Wwh7fhp9dubMuWPjZQ&oe=6590257C",
      DisplayCard: "Publeo",
      name: "Ray Tristan Publeo",
    },
    {
      image:
        "https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.15752-9/399909596_880391260339172_6533367473732133309_n.png?_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHg-j2qTE4HhmWfPxKuts0y1pDsUTn_AVrWkOxROf8BWvqBnHqdMjmO3Gx4AgpJqBOBixBu_8P7w8-XGXSNgUpU&_nc_ohc=6S1-07vEfE8AX-uSJMf&_nc_ht=scontent.fmnl4-6.fna&oh=03_AdQhybNLPUxGz2XlMHjCshIf6Pc6vIPYabWW6rqIfJoowQ&oe=65903753",
      DisplayCard: "Celyssa",
      name: "Celyssa Chryse Riego de Dios",
    },
    {
      image:
        "https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.15752-9/387333526_3469500043365251_7092975426587709962_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGQ7mSb9qNi3ufFZTHsChlGY0BzN-QISetjQHM35AhJ6_AQw9WUw9MYifXJk2iS1plgNgNMAZNUZTBVNoCJM2lF&_nc_ohc=d2kPlBC0sC4AX_X4H2u&_nc_ht=scontent.fmnl4-2.fna&oh=03_AdR_507__VNKNNyPCa2t0aFHdpSMkjPnOD-vxjRE9yhtNg&oe=65900399",
      DisplayCard: "Cholo",
      name: "Poncholo Riego de Dios",
    },
    {
      image:
        "https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.15752-9/368058975_361328259705892_1754404830248608064_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFNMwkkca3sAMcMyywt_zqZsrcIlejQjLSytwiV6NCMtF-E2KeRKUaOGzPtMumSvo-RmsELdGYlKH77VoveG4T7&_nc_ohc=56clbQj4v-YAX-wDl0R&_nc_ht=scontent.fmnl4-2.fna&oh=03_AdQ6lO1U49CYrmjntfAc_sJPoY0impjz_HYoIh7g1cNnSw&oe=6590053E",
      DisplayCard: "Rizare",
      name: "John Dale Rizare",
    },
    {
      image:
        "https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.15752-9/395698964_720851222934160_8024239727381989478_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFiOY8dqtLXVgyslsmdYIt4oeO-Y3drcFah475jd2twViKGfIX6gC8EelioIrJRXyU879LwS0vpBZSjfXMN5CYB&_nc_ohc=xZbWeuFngBUAX_wFSJ5&_nc_ht=scontent.fmnl4-2.fna&oh=03_AdRQqCnMNMAIqQEDP8nsmO2RzE6qdPoZpRtYsEacj4VaEQ&oe=659038C3",
      DisplayCard: "Umiten",
      name: "Benedict Aaron Umiten",
    },
    {
      image:
        "https://scontent.fmnl4-4.fna.fbcdn.net/v/t1.15752-9/385564968_297386269936430_478600248430488019_n.png?_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFiiDgRjNcMko7yGvPlH-UIsKok0lzevpywqiTSXN6-nBOmmw9GKwojo4M1ViWcQSOSk6NlrhsxYYTGy5tpkHOY&_nc_ohc=mERQZrJKVk4AX8pxspe&_nc_ht=scontent.fmnl4-4.fna&oh=03_AdSs68Ie77Pa0LM1Fc0byQt9uOaOMaAHTzgLePnWAiTh2w&oe=65902AE5",
      DisplayCard: "Villasor",
      name: "Vince Kazer Villasor",
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
              <Member image={btn.image} name={btn.name} />
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
