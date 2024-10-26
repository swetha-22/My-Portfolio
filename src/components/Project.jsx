import { CiLink } from "react-icons/ci";

function Project({ title, description, technologies, app_photo, github }) {
  return (
    <div className="border border-primaryLight hover:shadow-md hover:bg-primaryLightest hover:dark:bg-zinc-900 transition-all duration-300 p-4 mt-3 md:rounded-xl ">
        {/* =========== Images =========== */}
        <div className="w-full h-[10rem] border mb-2">
          <img 
            src= {app_photo}
            alt="app_photo" 
            className="w-full h-full"
          />
        </div>
      <div className="flex gap-2 overflow-x-scroll py-2">
        {/* =========== TECHNOLOGIES USED =========== */}
        {technologies.split(",").map((tech, index) => (
          <span
            className="inline-flex items-center  py-1.5 px-3 rounded-full text-xs font-medium bg-primaryLight text-primary dark:bg-primaryLight dark:text-primary"
            key={index}
          >
            {tech}
          </span>
        ))}
      </div>
      {/* =========== PROJECT TITLE =========== */}
      <h3 className="font-bold text-lg text-primaryDark dark:text-zinc-300 mt-2">
        {title}
      </h3>
      {/* =========== PROJECT DESCRIPTION =========== */}
      <p className="leading-7 text-zinc-500 dark:text-zinc-300 font-light text-base mt-4">
        {description}
      </p>

      <div className="flex gap-6 text-zinc-800 dark:text-zinc-300 font-medium ">
        {/* =========== PROJECT GITHUB =========== */}
        <a href={github} className="flex gap-2 mt-4 hover:dark:text-red-500 cursor-pointer transition-all duration-300 p-1 px-3 rounded-2xl bg-primary text-white hover:text-blue-100">
          <CiLink className="text-xl self-center" />
          <span className="text-xs self-center">
            View Github
          </span>
        </a>
      </div>
    </div>
  );
}

export default Project;
