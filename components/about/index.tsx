import React from "react";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.section
      id="_about-me"
      className="cursor-default bg-dark-100/20 p-6 text-[13px] font-medium leading-[150%] md:mb-32 text-gray-100 shadow-lg transition-all duration-300 ease-in hover:bg-dark-100/40 md:relative  md:m-auto md:w-max  md:rounded-[30px] md:p-16 md:text-[16px]"
    >
      <h2 className="text-yellow transition-all duration-300 ease-in">
        About me
      </h2>
      <br />

      <p className="transi-+tion-all duration-300 ease-in hover:text-white/70">
        I am a software engineer with 3+ years of experience in web
        development. <br />I enjoy building everything from small business
        sites to rich interactive web apps.
      </p>
      <br />
      <p></p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        If you are a business looking for a strong web product, recruiter
        looking to <br />hire or a developer looking for mentorship, feel free
        to contact me.
      </p>
      <br />
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        I build awesome products using:
      </p>
      <div className="grid w-full grid-cols-2 gap-1 gap-x-5 pl-4 md:grid-cols-3">
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          TypeScript
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          React
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Next.js
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Tailwind CSS
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Styled components
        </p>
      </div>
    </motion.section>
  );
}
