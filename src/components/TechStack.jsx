import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";

function TechStack() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full mt-24 lg:mt-48"
      data-aos="fade-down"
    >
      <p className=" text-[1.5rem] text-white dark:text-[#2D2E32] font-semibold linkItem after:bg-cyan-400 relative md:text-[1.75rem]">
        Tech Stack
      </p>

      <div className=" w-[80%] flex flex-col gap-20 py-5 items-center justify-center mt-5  md:flex-row   md:h-28">
        <div className="flex items-center justify-center gap-3">
          <div className="tooltip" data-tip="Next Js">
            <RiNextjsFill size={75} className="text-white dark:text-black" />
          </div>
          <div className="tooltip" data-tip="Typescript">
            <SiTypescript size={60} className="text-blue-600" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="tooltip" data-tip="React Js">
            <FaReact
              size={60}
              color="cyan"
              className="tooltip"
              data-tip="React Js"
            />
          </div>
          <div className="tooltip" data-tip="Javascript">
            <IoLogoJavascript color="yellow" size={60} />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="tooltip" data-tip="MongoDB">
            <DiMongodb color="green" size={60} />
          </div>
          <div className="tooltip" data-tip="Express Js">
            <SiExpress size={60} className="text-white dark:text-black" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="tooltip" data-tip="Tailwind CSS">
            <RiTailwindCssFill color="cyan" size={60} />
          </div>
          <div className="tooltip" data-tip="Shadcn - Ui Library">
            <SiShadcnui size={60} className="text-white dark:text-black" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
