import React, { useState, useEffect, useRef } from "react";
import { Button, Dropdown, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import mainLogo from "../assets/mainLogo2.png";
import { useTranslation } from "react-i18next";
import FadeInWhenVisible from "../effects/FadeInWhenVisible";
import SlideInWhenVisible from "../effects/SlideInWhenVisible";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [selectedLang, setSelectedLang] = useState("uz");
    const [activeTab, setActiveTab] = useState("home");
    const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
    const [drawerVisible, setDrawerVisible] = useState(false);

    const { t, i18n } = useTranslation();

    const navLinks = [
        { name: t("Home"), to: "home" },
        { name: t("About"), to: "about" },
        { name: t("Projects"), to: "projects" },
        { name: t("Skills"), to: "skills" },
        { name: t("Blog"), to: "blog" },
    ];

    const linkRefs = useRef({});

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const currentEl = linkRefs.current[activeTab];
        if (currentEl) {
            const { offsetLeft, offsetWidth } = currentEl;
            setUnderlineProps({ left: offsetLeft, width: offsetWidth });
        }
    }, [activeTab]);

    useEffect(() => {
        const savedLang = localStorage.getItem("lang");
        if (savedLang) {
            setSelectedLang(savedLang);
        } else {
            localStorage.setItem("lang", "en");
        }
    }, []);

    const handleLangChange = (lang) => {
        setSelectedLang(lang);
        localStorage.setItem("lang", lang);
        i18n.changeLanguage(lang);
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
                        <h1 className="text-md font-bold cursor-pointer">{t("name")}</h1>
                    </ScrollLink>
                </div>

                {/* Nav Links (Desktop) */}
                <div className="relative hidden md:flex gap-6">
                    {navLinks.map((link, index) => (

                        <ScrollLink
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

                {/* Lang & Contact (Desktop) */}
                <div className="hidden md:flex gap-2">
                    <Dropdown menu={{ items }} arrow>
                        <Button className="text-[18px]!">{selectedLang}</Button>
                    </Dropdown>
                    <a href="https://uz.linkedin.com/in/azamat-pulatov-104359276">
                        <Button type="primary">{t("Contact")}</Button>
                    </a>
                </div>

                {/* Menu Button (Mobile) */}
                <div className="md:hidden">
                    <Button
                        type="text"
                        icon={<MenuOutlined style={{ fontSize: "24px", color: "white" }} />}
                        onClick={() => setDrawerVisible(true)}
                    />
                </div>

                {/* Mobile Drawer */}
                <Drawer
                    title="Menu"
                    placement="right"
                    onClose={() => setDrawerVisible(false)}
                    open={drawerVisible}
                >
                    <div className="h-full pb-10 flex flex-col justify-between gap-4">
                        <div>
                            {navLinks.map((link, index) => (
                                <SlideInWhenVisible delay={index * 0.05}>
                                    <ScrollLink
                                        key={link.to}
                                        to={link.to}
                                        spy={true}
                                        smooth={true}
                                        offset={-56}
                                        duration={500}
                                        onSetActive={() => {
                                            setActiveTab(link.to);
                                            setDrawerVisible(false);
                                        }}
                                    >
                                        <div className="cursor-pointer text-center text-white text-4xl mb-14">{link.name}</div>
                                    </ScrollLink>
                                </SlideInWhenVisible>
                            ))}

                        </div>
                        <div className="flex gap-2">
                            <Dropdown menu={{ items }} arrow className="w-1/2">
                                <Button>Current Language : <span className="text-green-600">{selectedLang}</span></Button>
                            </Dropdown>
                            <a href="https://uz.linkedin.com/in/azamat-pulatov-104359276" className="w-1/2">
                                <Button type="primary" block>{t("Contact")}</Button>
                            </a>

                        </div>
                    </div>
                </Drawer>
            </div>
        </div>
    );
};

export default Navbar;
