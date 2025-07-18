import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-scroll';
import inCity2 from '../assets/inCityNight2.png'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t} = useTranslation();
  return (
    <footer className="bg-gray-900  text-gray-300 py-10">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col items-center md:justify-between md:flex-row md:items-start gap-6">
        
        {/* Logo / Name */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white">{t("name")}</h2>
          <p className="text-sm mt-2">{t("Frontend Developer Portfolio")}</p>

        </div>
          <img src={inCity2} alt="Azamat Pulatov" className="mt-4 w-32 h-32 rounded-full object-cover" />

        {/* Navigation */}
        <div className="mb-6 md:mb-0 text-center md:text-start">
          <h3 className="text-lg font-semibold text-white mb-2">{t("Sections")}</h3>
          <ul className="space-y-1 text-sm">
            
          <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white transition"
              >
                {t("Home")}
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white transition"
              >
                {t("About")}
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white transition"
              >
                {t("Projects")}
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white transition"
              >
                {t("Skills")}
              </Link>
            </li>
            <li>
              <Link
                to="blog"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white transition"
              >
                {t("Blog")}
              </Link>
            </li>
            
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Me</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://github.com/az1kkrich" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://uz.linkedin.com/in/azamat-pulatov-104359276" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="https://t.me/foragede" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Azamat Pulatov. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
