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
    SiTailwindcss,
} from "react-icons/si";
import SlideInWhenVisible from "../effects/SlideInWhenVisible";

const levels = [
    {
        name: "JavaScript",
        icon: SiJavascript,
        color: "bg-yellow-400",
        textcolor: "text-yellow-400",
        level: 85,
    },
    {
        name: "React",
        icon: SiReact,
        color: "bg-cyan-400",
        textcolor: "text-cyan-400",
        level: 90,
    },
    {
        name: "Redux",
        icon: SiRedux,
        color: "bg-cyan-600",
        textcolor: "text-cyan-600",
        level: 80,
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        color: "bg-blue-400",
        textcolor: "text-blue-400",
        level: 65,
    },{
        name: "NextJS",
        icon: SiNextdotjs,
        color: "bg-white",
        textcolor: "text-white",
        level: 85,
    },{
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "bg-teal-400",
        textcolor: "text-teal-400",
        level: 90,
    },{
        name: "MySQL",
        icon: SiMysql,
        color: "bg-yellow-400",
        textcolor: "text-yellow-400",
        level: 65,
    },

    {
        name: "NodeJS",
        icon: SiNodedotjs,
        color: "bg-green-400",
        textcolor: "text-green-400",
        level: 25,
    },
];

const SkillLevel = () => {
    return (
        <section className="py-20 bg-[#0a0a23] text-white overflow-hidden" id="skill-level">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">
                    My <span className="text-blue-500">Proficiency</span>
                </h2>

                <div className="space-y-6">
                    {levels.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <SlideInWhenVisible key={index} direction="left" delay={index * 0.05}>
                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="flex items-center gap-2 text-lg font-semibold">
                                            <Icon className={`text-4xl ${skill.textcolor}`} />
                                            <span >{skill.name}</span>
                                            
                                        </div>
                                        <span className={skill.textcolor}>{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div
                                            className={`${skill.color} h-2 rounded-full transition-all duration-700`}
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            </SlideInWhenVisible>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SkillLevel;
