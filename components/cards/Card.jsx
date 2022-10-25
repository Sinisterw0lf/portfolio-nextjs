import React from "react";

export default function Card({ img,title }) {
  return (
    <div className="card w-80 bg-white  shadow-xl space-y-5 px-5">
      <img className="p-10 " src={img} alt="{title}" />
      <p className="font-bold text-center flex justify-center items-center text-lg p-5">{title}</p>
    </div>
  );
}
