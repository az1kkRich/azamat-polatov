import FadeInWhenVisible from "../effects/FadeInWhenVisible";
import headerLogo from "../assets/Header.png";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";



const Header = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="min-h-screen Header flex flex-col justify-center items-center text-center px-4">
        <FadeInWhenVisible delay={0.8}>
            <h2 className="bg-green-200/20 px-4 py-2 mb-3 rounded-xl font-bold font-mono">{t("software")}</h2>        
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0} >            
                <img src={headerLogo} alt="Header Logo" className="w-42 h-42 md:w-[10vw] md:h-[10vw] mb-6 rounded-full shadow-lg" />
        </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-4">
          {t("hi")}
        </h1>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.4}>
        <p className="text-lg md:text-xl xl:text-2xl text-gray-300 mb-6 max-w-xl">
          {t("aboutMe")}
        </p>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.5}>
        <div className="flex gap-4">
            <ScrollLink
              to="projects"
              smooth={true}
              offset={-56}
              duration={500}              
              className="px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
            >
              {t("viewProjects")}
            </ScrollLink>
          <a
            href="#contact"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition"
          >
            {t("Contact")}
          </a>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

export default Header;
