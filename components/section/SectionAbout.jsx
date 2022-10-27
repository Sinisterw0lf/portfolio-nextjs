import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Link from "next/link";

export default function SectionAbout() {
  return (
    <div className="px-40 py-80 bg-gradient-to-b from-white to-cyan-200">
      <div className="flex justify-between gap-x-[20rem]">
        <div className=" space-y-5">
          <h2 className="text-4xl font-bold">Qui suis-je ?</h2>
          <div className="flex gap-5">
            <Link className="" href="/">
              <>
                <FontAwesomeIcon
                  className="fa-beat"
                  size="2x"
                  color="white"
                  icon={faTwitter}
                />
              </>
            </Link>
            <Link className="" href="/">
              <>
                <FontAwesomeIcon
                  className="fa-beat"
                  size="2x"
                  color="white"
                  icon={faLinkedin}
                />
              </>
            </Link>
          </div>
          <p className=" text-lg">
            Lorem ipsum dolor sit amet. Cum vitae quod et nihil provident sit
            quia aliquid qui nesciunt porro laudantium sunt! In saepe maiores
            hic eius nesciunt vel galisum nihil qui porro quos a quia autem aut
            aspernatur voluptatem
          </p>
          <Link
            href="/"
            class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <>
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  class="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  class="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Mon CV
              </span>
            </>
          </Link>
        </div>
        <div>
          <img src="undraw_web_developer.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
