import React, { useState, useEffect, useRef } from "react";
import { Button, Dropdown } from "antd";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import mainLogo from "../assets/mainLogo2.png";

const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Blog", to: "blog" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [selectedLang, setSelectedLang] = useState("En");
    const [activeTab, setActiveTab] = useState("home");
    const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });

    const linkRefs = useRef({});

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Update underline position when active tab changes
    useEffect(() => {
        const currentEl = linkRefs.current[activeTab];
        if (currentEl) {
            const { offsetLeft, offsetWidth } = currentEl;
            setUnderlineProps({ left: offsetLeft, width: offsetWidth });
        }
    }, [activeTab]);

    const items = [
        {
            key: "uz",
            label: <p>Uzbek</p>,
            onClick: () => setSelectedLang("Uz"),
        },
        {
            key: "ru",
            label: <p>Russian</p>,
            onClick: () => setSelectedLang("Ru"),
        },
        {
            key: "en",
            label: <p>English</p>,
            onClick: () => setSelectedLang("En"),
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
                        onSetActive={() => setActiveTab("home")}>

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

                    {/* Animated underline */}
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
                        <Button>{selectedLang}</Button>
                    </Dropdown>
                    <Button type="primary">Contact Me</Button>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
