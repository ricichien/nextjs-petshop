import React from "react";

import Image from "next/image";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import DogImg from "../public/img/newsletter/dog.png";

const Newsletter = () => {
  return (
    <section>
      <div className="h-[800px] flex flex-1 flex-col lg:flex-row lg:h-[324px]">
        {/* input div */}
        <div className="bg-newsletterOrange bg-center bg-cover bg-no-repeat flex-1 flex flex-col justify-center items-center px-8 lg:px-0h-full">
          <div>
            <h2 className="h2 mb-12">
              Subscribe & Get Pet <br /> Updatenews
            </h2>
            {/* input */}
            <div className="flex relative">
              <input
                className="bg-transparent border-b-2 placeholder:text-white text-white outline-none absolute w-full pr-12"
                type="text"
                placeholder="Mail"
              />
              <HiOutlineArrowNarrowRight className="absolute top-0 right-0 text-white text-3xl cursor-pointer" />
            </div>
          </div>
        </div>
        {/* image div */}
        <div className="bg-newsletterYellow bg-center bg-no-repeat bg-cover flex-1 flex justify-center items-end h-full">
          <Image src={DogImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
