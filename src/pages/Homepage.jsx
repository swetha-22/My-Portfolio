import { AppContext } from "../App.jsx";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineDownload } from 'react-icons/ai';

import ToggleTheme from "../components/ToggleTheme.jsx";

import Hero from "../components/sections/Hero.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import EducationAndExperience from "../components/sections/EducationAndExperience.jsx";
import Skills from "../components/sections/Skills.jsx";

const pdfFilePath = '/assets/Swetha_Paspunuri_Java.pdf';

function Homepage() {
  const { theme, switchTheme } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }; 

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900">
      <div className="md:pt-12 xl:w-[1200px] md:mx-auto h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <ToggleTheme switchTheme={switchTheme} />
        <div className="absolute ml-5 md:ml-10 md:top-12">
          <button onClick={handleDownload} className="flex w-[170px] p-1 px-3 py-3 text-primaryDark border border-primaryDark hover:bg-primary hover:text-white hover:border-primary dark:bg-primaryLightest font-medium transition-all duration-300 rounded-lg">
            <div className=" mx-2 text-2xl">
              <AiOutlineDownload />
            </div>
            <div>
              Download CV
            </div>
          </button>
        </div>
        <Hero />
        <Projects />
				<EducationAndExperience />
        <Skills />
        <Contact />

        <hr className="mt-12 border border-zinc-300 dark:border-zinc-800" />
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default Homepage;