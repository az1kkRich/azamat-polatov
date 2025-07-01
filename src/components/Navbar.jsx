import React, { useState, useEffect, useRef } from "react";
import { Button, Dropdown } from "antd";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import mainLogo from "../assets/mainLogo2.png";
import { useTranslation } from "react-i18next";



const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [selectedLang, setSelectedLang] = useState("uz");
    const [activeTab, setActiveTab] = useState("home");
    const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });

    const { t } = useTranslation();

    const navLinks = [
        { name: t("Home"), to: "home" },
        { name: t("About"), to: "about" },
        { name: t("Projects"), to: "projects" },
        { name: t("Skills"), to: "skills" },
        { name: t("Blog"), to: "blog" },
      ];
    
    const linkRefs = useRef({});

    // Scroll event
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Underline update
    useEffect(() => {
        const currentEl = linkRefs.current[activeTab];
        if (currentEl) {
            const { offsetLeft, offsetWidth } = currentEl;
            setUnderlineProps({ left: offsetLeft, width: offsetWidth });
        }
    }, [activeTab]);


    const { i18n } = useTranslation();


    // Load saved language from localStorage
    useEffect(() => {
        const savedLang = localStorage.getItem("lang");
        if (savedLang) {
            setSelectedLang(savedLang);
        } else {
            localStorage.setItem("lang", "en"); // Default to Uzbek if no language is saved
        }
    }, []);

    const handleLangChange = (lang) => {
        setSelectedLang(lang);
        localStorage.setItem("lang", lang);
        i18n.changeLanguage(lang); // <-- MUHIM QISM
        console.log(`Language changed to: ${lang}`, i18n.language);
        
    };

    const items = [
        {
            key: "uz",
            label: <p>O‘zbek</p>,
            onClick: () => handleLangChange("uz"),
        },
        {
            key: "ru",
            label: <p>Русский</p>,
            onClick: () => handleLangChange("ru"),
        },
        {
            key: "en",
            label: <p>English</p>,
            onClick: () => handleLangChange("en"),
        },
    ];

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out 
      ${scrolled ? "backdrop-blur-md bg-gray-800/70 h-14 shadow-md" : "backdrop-blur-3xl h-16"}`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between h-full">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={mainLogo} alt="Logo" className="w-12 h-11 rounded-full" />
                    <ScrollLink
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-58}
                        duration={500}
                        onSetActive={() => setActiveTab("home")}
                    >
                        <h1 className="text-md font-bold cursor-pointer">Azamat Po'latov</h1>
                    </ScrollLink>
                </div>

                {/* Nav Links */}
                <div className="relative hidden md:flex gap-6">
                    {navLinks.map((link) => (
                        <ScrollLink
                            key={link.to}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            offset={-56}
                            duration={500}
                            onSetActive={() => setActiveTab(link.to)}
                        >
                            <div
                                ref={(el) => (linkRefs.current[link.to] = el)}
                                className={`cursor-pointer py-1 px-1 text-white`}
                            >
                                {link.name}
                            </div>
                        </ScrollLink>
                    ))}

                    {/* Underline */}
                    <motion.div
                        className="absolute bottom-0 h-[2px] bg-blue-500"
                        layout
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        animate={{
                            left: underlineProps.left,
                            width: underlineProps.width,
                        }}
                    />
                </div>

                {/* Lang & Button */}
                <div className="flex gap-2">
                    <Dropdown menu={{ items }} arrow>
                        <Button className="text-[18px]!">{selectedLang}</Button>
                    </Dropdown>
                    <a href="https://uz.linkedin.com/in/azamat-pulatov-104359276">
                    <Button type="primary">Bog‘lanish</Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
