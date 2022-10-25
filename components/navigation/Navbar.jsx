import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="px-20 py-5 font-semibold fixed z-0 top-0 left-0 w-full">
      <div className="flex justify-between ">
        <Link href="/">Cyril B.</Link>
        <div className="space-x-5 uppercase">
          <Link href="/">
            <a
              data-replace="A propos de moi"
              className="text-black inline-block relative no-underline py-2.5 hover-1 after:absolute after:w-full after:h-[3px] after:bottom-0 after:left-0 after:bg-blue-500 after:transform after:scale-x-0 after:duration-300 after:transition-transform after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              A propos de moi
            </a>
          </Link>
          <Link href="/">
            <a className="text-black inline-block relative no-underline py-2.5 hover-1 after:absolute after:w-full after:h-[3px] after:bottom-0 after:left-0 after:bg-blue-500 after:transform after:scale-x-0 after:duration-300 after:transition-transform after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100">
              Mes réalisations
            </a>
          </Link>
          <Link href="/">
            <a className="text-black inline-block relative no-underline py-2.5 hover-1 after:absolute after:w-full after:h-[3px] after:bottom-0 after:left-0 after:bg-blue-500 after:transform after:scale-x-0 after:duration-300 after:transition-transform after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
