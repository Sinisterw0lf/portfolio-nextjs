import React from "react";
import Card from "../cards/Card";

export default function SectionCard() {
  const cards = [
    {
      id: "1",
      img: "HTML_CSS.png",
      title: "HTML5 and CSS3",
    },
    {
      id: "2",
      img: "Bootstrap_logo.svg.png",
      title: "Bootstrap",
    },
    {
      id: "3",
      img: "Php.png",
      title: "Php logo",
    },
    {
      id: "4",
      img: "mysql.svg",
      title: "MYSQL",
    },
    {
      id: "5",
      img: "738px-Laravel.svg.png",
      title: "Laravel",
    },
    {
      id: "6",
      img: "Wordpress-Logo.svg.png",
      title: "Wordpress",
    },
  ];

  return (
    <div className="bg-gradient-to-b relative -z-10 from-cyan-200 to-white py-40">
      <h2 className="text-center font-bold text-3xl py-5">Mes compétences</h2>
      <div className="p-10">
        <div className="grid grid-cols-3 justify-items-center gap-10">
          {cards.map((card) => (
            <Card key={card.id} img={card.img} title={card.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
