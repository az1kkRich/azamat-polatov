import React from "react";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiRedux,
    SiNextdotjs,
    SiNodedotjs,
    SiGit,
    SiMongodb,
    SiMysql,
    SiFigma,
} from "react-icons/si";

import SlideInWhenVisible from "../effects/SlideInWhenVisible";
import SkillLevel from "./SkillLevel";

const skills = [
    { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Redux", icon: SiRedux, color: "text-cyan-600" },
    { name: "NextJS", icon: SiNextdotjs, color: "text-white" },
    { name: "Git", icon: SiGit, color: "text-red-500" },
    { name: "NodeJS", icon: SiNodedotjs, color: "text-green-300" },
    { name: "MongoDB", icon: SiMongodb, color: "text-yellow-500" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
    { name: "Figma", icon: SiFigma, color: "text-pink-400" },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-[#0f172a] text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <SlideInWhenVisible direction="down" delay={0.3}>
                    <p className="font-bold bg-blue-800/50 w-fit mx-auto px-4 py-1 rounded-2xl">My Skills</p>
                </SlideInWhenVisible>
                <SlideInWhenVisible direction="up" className="mb-10">
                    <h1 className="text-center text-2xl xl:text-4xl font-bold "><span className="text-blue-500">Technologies</span> I Use </h1>
                </SlideInWhenVisible>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center mb-10">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <SlideInWhenVisible
                                key={index}
                                direction="up"
                                delay={index * 0.08}
                            >
                                <div className="group flex flex-col items-center gap-2 w-24 md:w-40 p-4 bg-slate-800 md:bg-transparent rounded-xl hover:bg-slate-800 transition">
                                    <Icon className={`text-4xl ${skill.color} group-hover:scale-110 transition`} />
                                    <p className="text-sm text-gray-300 group-hover:text-white transition">
                                        {skill.name}
                                    </p>
                                </div>
                            </SlideInWhenVisible>
                        );
                    })}
                </div>

                <SkillLevel />
            </div>
        </section>
    );
};

export default Skills;
