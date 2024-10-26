import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";

function Hero() {
  return (
    <section id="hero" className="pb-28 mt-14 flex px-6 lg:px-10">
      <div className="self-center">
        <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle">
        </div>
        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          <div className="lg:w-[100%] text-zinc-900 dark:text-zinc-100 self-center">
            <h2 className="text-xl ">{user_info.main.role}</h2>
            <h1 className="font-black mt-3 text-5xl lg:w-[85%] text-primaryDark dark:text-primaryMedium">
              {user_info.main.name}
            </h1>
            <div className="flex flex-col-reverse lg:flex-row">
              <p className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[75%] leading-7 text-justify">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {user_info.main.description}
              </p>
              <div className="sm:w-[25%] flex justify-center py-4">
                <img
                  src={user_info.main.photo}
                  className="lg:mb-6"
                  alt="Profile Picture"
                />
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-white border border-white hover:bg-white hover:text-primary hover:border-primary hover:shadow-lg dark:border-none font-medium transition-all duration-300 rounded-lg"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="pl-6 pr-4 py-3 text-primary hover:text-primary dark:text-white dark:hover:text-primary dark:hover:bg-white dark:hover:border-none transition-all duration-300 flex gap-3 hover:gap-4 rounded-lg hover:border hover:border-primary"
              >
                <span className="self-center font-medium">Contact</span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
