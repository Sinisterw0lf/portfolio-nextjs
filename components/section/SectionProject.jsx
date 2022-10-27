import Link from "next/link";
import React from "react";
import Card2 from "../cards/Card2";

export default function SectionProject({ projets }) {
  console.log(projets);
  // const cards = [
  //   {
  //     id: "1",
  //     img: "LaraGigs.png",
  //     title: "LaraGigs",
  //   },

  // ];

  return (
    <div className="py-48 bg-white relative z-0 ">
      <h2 className="text-center font-bold text-3xl py-10">
        Mes projets réalisés
      </h2>
      <div>
        <div className="grid grid-cols-3 justify-items-center gap-10">
          {projets.map((projet) => (
            <Link href={`projets/${projet.fields.slug}`} key={projet.sys.id}>
              <>
                <a>
                  <Card2 projet={projet} />
                </a>
              </>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
