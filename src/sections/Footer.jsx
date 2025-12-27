import { socials } from "../utils/data";

const Footer = () => {
  return (
    <footer className="bg-[#6E57E0] dark:bg-[#100E1B] text-white  h-[17rem] py-[3rem]">
      <div className="flex justify-between max-w-4xl w-full mx-auto mb-[3rem]">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">Tathagata</h1>
          <h1 className="text-3xl font-semibold">Chakraborty</h1>
          <p className="mt-[1rem] text-sm">Full Stack developer</p>
        </div>
        <div className="flex gap-4">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
        <div className="flex gap-4 justify-end items-center">
          {socials.map((item) => (
            <a key={item.name} href={item.href} target="_blank">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <p className="text-sm text-slate-300 text-center">
        {new Date().getFullYear()} © Tathagata Chakraborty. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
