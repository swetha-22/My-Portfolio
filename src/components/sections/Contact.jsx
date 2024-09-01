import user_info from "../../data/user_info.js";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram, FaGithub  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    url: user_info.socials.github,
    icon: <FaGithub className="text-lg text-primary dark:text-primaryMedium" />,
    text: "Find me on GitHub"
  },
  {
    url: user_info.socials.instagram,
    icon: <FaInstagram className="text-lg text-primary dark:text-primaryMedium" />,
    text: "Find me on Instagram"
  },
  {
    url: user_info.socials.linkedin,
    icon: <FaLinkedin className="text-lg text-primary dark:text-primaryMedium" />,
    text: "Find me on LinkedIn"
  },
  {
    url: user_info.main.email,
    icon: <MdEmail className="text-lg text-primary dark:text-primaryMedium" />,
    text: user_info.main.email
  }
];

function Contact() {
  return (
    <section id="contact" className="mt-16 pt-12 px-6 lg:px-24">
      {/* =========== TITLE =========== */}
      <h4 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
        Find Me On:{" "}
        <span className="text-primary dark:text-primaryMedium">
          Ways to Connect with Me
        </span>
      </h4>

      {/* =========== DESCCRIPTION =========== */}
      <p className="mt-8 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light">
        {user_info.contact.description}
      </p>

      {/* =========== LINKS =========== */}
      <div className="mt-12">
        {socialLinks.map(({ url, icon, text }, index) => (
          <a
            key={index}
            href={url}
            className={`flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 ${index > 0 ? 'mt-4' : ''}`}
          >
            {icon}
            <span className="self-center">{text}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
