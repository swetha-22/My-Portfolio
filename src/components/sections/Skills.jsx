import { BiLogoTypescript } from "react-icons/bi";
import { CgVercel } from "react-icons/cg";
import { DiGithubAlt, DiMongodb, DiNetbeans } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaDocker, FaAws, FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact, FaJava, FaAngular, FaBootstrap } from "react-icons/fa6";
import { SiExpress, SiTailwindcss, SiOracle , SiSpring, SiSpringboot, SiSpringsecurity, SiJquery, SiHibernate, SiApachemaven, SiGradle, SiJenkins, SiEclipseide, SiMysql, SiMicrosoftsqlserver, SiApachecassandra, SiCodeship, SiSelenium, SiApachetomcat, SiJunit5, SiPostman} from "react-icons/si";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { VscJersey } from "react-icons/vsc";


const skills = [
  { icon: <FaJava  className="text-2xl" />, name: "Java" },
  { icon: <BiSolidCoffeeBean  className="text-2xl" />, name: "Java Beans" },
  { icon: <SiSpring   className="text-2xl" />, name: "Spring" },
  { icon: <SiSpringboot   className="text-2xl" />, name: "Spring Boot" },
  { icon: <SiSpringsecurity   className="text-2xl" />, name: "Spring Security" },
  { icon: <SiHibernate   className="text-2xl" />, name: "Hibernate" },
  { icon: <FaHtml5 className="text-2xl" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-2xl" />, name: "CSS" },
  { icon: <FaBootstrap className="text-2xl" />, name: "Bootstrap" },
  { icon: <SiTailwindcss className="text-2xl" />, name: "Tailwind" },
  { icon: <IoLogoJavascript className="text-2xl" />, name: "JavaScript" },
  { icon: <BiLogoTypescript className="text-2xl" />, name: "TypeScript" },
  { icon: <SiJquery  className="text-2xl" />, name: "JQuery" },
  { icon: <FaReact className="text-2xl" />, name: "React" },
  { icon: <FaAngular  className="text-2xl" />, name: "Angular" },
  { icon: <SiExpress className="text-2xl" />, name: "Express" },
  { icon: <FaNodeJs className="text-2xl" />, name: "NodeJS" },
  { icon: <SiApachemaven className="text-2xl" />, name: "Maven" },
  { icon: <SiJenkins className="text-2xl" />, name: "Jenkins" },
  { icon: <SiGradle  className="text-2xl" />, name: "Gradle" },
  { icon: <DiNetbeans  className="text-2xl" />, name: "Net Beans" },
  { icon: <SiSelenium   className="text-2xl" />, name: "Selenium " },
  { icon: <SiApachetomcat   className="text-2xl" />, name: "Apache Tomcat " },
  { icon: <SiApachecassandra    className="text-2xl" />, name: "Apache Cassandra " },
  { icon: <FaDocker className="text-2xl" />, name: "Docker" },
  { icon: <FaAws className="text-2xl" />, name: "AWS EC2" },
  { icon: <VscJersey className="text-2xl" />, name: "Jersey Framework" },
  { icon: <SiCodeship  className="text-2xl" />, name: "Code Ship" },
  { icon: <SiJunit5   className="text-2xl" />, name: "JUnit" },
  { icon: <SiMysql  className="text-2xl" />, name: "MySQL" },
  { icon: <SiMicrosoftsqlserver   className="text-2xl" />, name: "SQL Server" },
  { icon: <SiOracle  className="text-2xl" />, name: "Oracle DB" },
  { icon: <DiMongodb className="text-2xl" />, name: "MongoDB" },
  { icon: <SiEclipseide  className="text-2xl" />, name: "Eclipse" },
  { icon: <FaGitAlt className="text-2xl" />, name: "Git" },
  { icon: <DiGithubAlt className="text-2xl" />, name: "Github" },
  { icon: <CgVercel className="text-2xl" />, name: "Vercel" },
  { icon: <SiPostman className="text-2xl" />, name: "Postman" },
];

function Skills() {
  return (
    <section id="skills" className="mx-4 lg:mx-20">
      {/* =========== SKILLS TITLE =========== */}
      <h4 className="text-4xl font-bold text-center mt-20 dark:text-white">
        Technologies I Use.
      </h4>
      {/* =========== LIST OF SKILLS =========== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
        {skills.map(({ icon, name }) => (
          <span
            key={name}
            className="inline-flex items-center justify-between gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-primaryLight text-primaryDark dark:primaryLightest dark:text-primaryDark"
          >
            {icon} {name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
