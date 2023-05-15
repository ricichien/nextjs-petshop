import React from "react";

import Image from "next/image";

import pretitleImg from "../public/img/hero/pretitle-img.svg";

import Header from "./Header";

const Hero = () => {
  return (
    <section
      className="bg-cream lg:bg-hero lg:bg-cover
  lg:bg-no-repeat min-h-[400px] lg:min-h-[805px]"
    >
      <Header />
      <div className="container mx-auto flex justify-start items-center min-h-[400px] lg:h-[805px]">
        <div className="lg:max-w-[650px] text-center mx-auto lg:text-left lg:mx-0">
          {/* image */}
          <div className="hidden xl:flex mb-6 ml-5">
            <Image src={pretitleImg} width={"100%"} height={"auto"} alt="" />
          </div>
          <h1 className="text-5l lg:text-8xl uppercase font-bold -tracking-[0.05em] mb-10">
            A pet first <br />
            <span className="text-orange font-normal">approach to</span> <br />
            wellness
          </h1>
          <button className="btn btn-orange mx-auto lg:mx-0">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
