import Image from "next/image";
import React from "react";

export default function FirstScreen() {
  return (
    <section
      id="_hello"
      className="relative flex h-auto flex-col items-center justify-start gap-32 pb-16 pt-16 md:h-full md:flex-row md:justify-center md:pb-0 md:pt-0 "
    >
      <div className="flex w-[90%] flex-col gap-16 md:w-auto">
        <div>
          <p className="text-[18px] font-medium text-white">Hi. I am</p>
          <h1
            id="title"
            className="title text-[48px] tracking-tighter text-white md:text-[62px]"
          >
            Liplan Lekipising
          </h1>
          <p className="text-[23px] font-medium tracking-tight text-green md:text-[32px]">
            &gt; Front-end developer
          </p>
        </div>
        <div className="flex flex-col gap-2 italic text-gray-100 md:gap-1">
          <p>
            I craft interactive and beautiful web apps, and I love what I do.
          </p>
          <p>
            With every line of code, I strive to make the web a better place.{" "}
          </p>
        </div>
      </div>
      <div className="pic-shadow relative z-50 hidden h-[25vw] w-[25vw] overflow-hidden rounded-full outline outline-green md:block">
        <Image
          src={
            "https://res.cloudinary.com/dpnbddror/image/upload/v1642927649/liplan/liplan_img_ftb9xn.webp"
          }
          height="300"
          width="300"
          quality={100}
          priority={true}
          alt="Liplan Lekipising - Portfolio"
          className="rounded-full transition-all duration-300 ease-in hover:scale-[1.025]"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      {/* background blur */}
      <div className="bg-blur-one absolute top-[10vh] right-[20vw] z-40 h-[20vw] w-[20vw]" />
    </section>
  );
}
