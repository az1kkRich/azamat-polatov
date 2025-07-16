import FadeInWhenVisible from "../effects/FadeInWhenVisible";
import headerLogo from "../assets/Header.png";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import { FaLinkedin } from "react-icons/fa";



const Header = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="min-h-screen Header flex flex-col justify-center items-center text-center px-4">
        <FadeInWhenVisible delay={0.8}>
            <h2 className="bg-green-200/20 px-4 py-2 mb-3 rounded-xl font-bold font-mono">{t("software")}</h2>        
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0} >            
                <img src={headerLogo} alt="Header Logo" className="w-[60vw]  md:w-[30vw] md:h-[30vw] xl:w-[12vw] xl:h-[12vw] mb-6 rounded-full shadow-lg" />
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
          <Button
            href="https://uz.linkedin.com/in/azamat-pulatov-104359276"
            target="blank"
            icon={<FaLinkedin />}
            className="px-6 py-5 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition"
          >
            {t("mylinkedin")}
          </Button>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

export default Header;
