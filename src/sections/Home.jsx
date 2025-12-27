import { IconContext } from "react-icons";
import { BsMouse } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import Typed from "react-typed";
import Button from "../components/Button";
import { socials } from "../utils/data";

const Home = () => {
  return (
    <section
      className="items-center justify-center dark:text-white dark:bg-[#191627] h-[92vh] mt-[4rem]"
      id="home"
    >
      <div className="container grid pt-[20vh]">
        <div className="home_content grid grid-cols-4 gap-1 md:gap-4">
          <IconContext.Provider value={{ color: "#5A43CB", size: "1.5rem" }}>
            <div className="flex flex-col col-span-2 md:col-span-1 justify-center items-center sm:items-start gap-6 pl-2 md:pl-0">
              {socials.map((item) => (
                <a key={item.name} href={item.href} target="_blank">
                  {item.icon}
                </a>
              ))}
            </div>
          </IconContext.Provider>

          <div className="flex flex-col gap-4 col-span-2 md:col-span-3">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
              Hi, I'm Tathagata
            </h1>
            <h3 className="text-[#6D6A7C] dark:text-gray-300 text-base md:text-lg lg:text-xl">
              <Typed
                strings={[
                  "I engineer full-stack systems powered by applied AI.",
                  "From backend foundations to intelligent automation, I build end-to-end solutions.",
                  "I turn LLMs and data workflows into products that actually ship.",
                  "My focus is reliability, scalability, and real business impact — not demos.",
                  "If AI needs to work in production, that’s where I come in.",
                ]}
                typeSpeed={90}
                backSpeed={50}
                loop
              />{" "}
            </h3>

            <p className="text-[#6D6A7C] dark:text-gray-300 max-w-64">
              Building Software to solve real life problems
            </p>
            <Button
              title="Contact Me"
              href="#contact"
              icon={<IoSend size={20} />}
              className="mt-2 md:mt-4 text-sm md:text-lg hover:shadow-xl transition duration-150 ease-in-out"
            />
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="w-[10rem] sm:flex hover:animate-bounce flex-row items-center gap-2 py-10 hidden "
      >
        <IconContext.Provider value={{ color: "#5A43CB" }}>
          <BsMouse size={30} />
          <span className="text-sm md:text-base ">Scroll Down</span>
          <FaArrowDown size={20} />
        </IconContext.Provider>
      </a>
    </section>
  );
};

export default Home;
