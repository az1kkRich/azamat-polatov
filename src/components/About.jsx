// components/About.jsx
import { motion } from "framer-motion";
import profileImg from "../assets/inCityNight-3-4.png"; // kerak bo‘lsa
import SlideInWhenVisible from "../effects/SlideInWhenVisible";
import HowIWork from "./HowIWork";
import { useEffect, useLayoutEffect, useState } from "react";

const About = () => {
    
    
    return (
        
        <section id="about" className="bg-slate-950 text-white overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row pt-10 pb-7 px-4 items-center gap-10">

                {/* Chap taraf - rasm */}
                <SlideInWhenVisible direction="left" className="w-full md:w-1/2">
                    <img
                        src={profileImg}
                        alt="Azamat Po'latov"
                        className="rounded-2xl shadow-lg w-full max-w-sm mx-auto"
                    />

                </SlideInWhenVisible>

                {/* O'ng taraf - matn */}
                <SlideInWhenVisible direction='right' delay={0.2} className="w-full md:w-1/2">

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        I'm <span className="font-semibold text-white">Azamat Po‘latov</span>, a passionate frontend developer with a strong focus on TypeScript React, Redux-Toolkit, Next.js, TailwindCSS, and modern UI/UX design.
                        I enjoy building beautiful, interactive, and responsive websites that bring ideas to life.
                    </p>
                    <p className="text-gray-400">
                        With experience in component-based development, data fetching, animations, and performance optimization, I aim to deliver clean code and a great user experience.
                    </p>
                </SlideInWhenVisible>
            </div>
            
        </section>
    );
};

export default About;
