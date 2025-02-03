"use client";
import Link from "next/link";
import { useState } from "react";
import Login from "./Login";

const Navbar = () => {

  const [ham, setHam] = useState(false);

  const handleHam = () => {
    setHam(!ham);
  };

  const side = ham ? "left-0" : "-left-[20rem]";

  return (
    <>
      <header className="flex justify-between items-center px-8 md:px-12 lg:px-24 py-8 fixed left-0 right-0 top-0 bg-white">
        <div>
          <h1 className="text-xl sm:text-2xl hidden sm:block lg:text-3xl font-bold ">DRead</h1>
        </div>
        <div onClick={handleHam} className="absolute rounded-full w-8 h-8 bg-black sm:hidden"></div>
        <nav className={`px-8 absolute sm:static top-[4.5rem] ${side} sm:left-0 transition-all`}>
          <div className="md:static flex py-2 px-6 pl-8 bg-black rounded-full items-center gap-12 ">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26px"
                viewBox="0 -960 960 960"
                width="26px"
                fill="#fff"
                className={` sm:fill-white`}
              >
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
              </svg>
            </Link>

            <Link href="/page/about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
              </svg>
            </Link>

            <Link href="/page/shop">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
              </svg>
            </Link>
          </div>
        </nav>

        <div className="">
          <Login/>
        </div>
      </header>
      {/* Versi Destop */}

    </>
  );
};

export default Navbar;
