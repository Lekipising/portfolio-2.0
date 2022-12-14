import React, { useEffect } from "react";

import { event } from "nextjs-google-analytics";

export const scrollIntoId = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

export default function NavBar() {
  // track project clicks
  useEffect(() => {
    // listen for clicks on the project
    const downloadElement = document.getElementById(`download-resume`);
    downloadElement?.addEventListener("click", () => {
      event("download-resume", {
        category: "Resume",
        label: "Downloaded Resume",
      });
    });
  }, []);

  return (
    <header className="relative m-auto flex h-[55px] w-full items-center rounded-[8px] border-[1px] border-gray-200 bg-dark-300 pl-2 text-gray-100 md:pl-8">
      <nav className="md:w-[10vw]">
        <span
          role="link"
          onClick={() => scrollIntoId("_hello")}
          className="cursor-pointer font-bold leading-[120.4%] tracking-wider transition-all duration-150 ease-in hover:text-yellow"
        >
          @lekipising
        </span>
      </nav>
      <div className="hidden h-full items-center md:flex">
        <OneNavItem text="_hello" />
        <OneNavItem text="_about-me" />
        <OneNavItem text="_projects" />
        <OneNavItem text="_contact-me" />
      </div>

      <a
        id="download-resume"
        href="/Lekipising_Liplan_Resume_Jan.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-8 flex w-max items-center justify-center rounded-full border-[2px] border-white py-2 px-4 font-medium text-white transition-all duration-150 ease-in hover:border-yellow hover:text-yellow"
      >
        View resume
      </a>
    </header>
  );
}

function OneNavItem({ text }: { text: string }) {
  return (
    <nav
      role="link"
      onClick={() => scrollIntoId(text)}
      className={`flex h-full cursor-pointer items-center justify-center border-[0.5px]  border-gray-200  px-4 font-medium transition-all duration-150 ease-in hover:text-yellow`}
    >
      {text}
    </nav>
  );
}
