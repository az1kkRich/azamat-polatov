import React from "react";
import FadeInWhenVisible from "../effects/FadeInWhenVisible";
import SlideInWhenVisible from "../effects/SlideInWhenVisible";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description:
            "We start by understanding your business, goals, and requirements to create a solid foundation for your project.",
        color: "bg-cyan-500",
    },
    {
        number: "02",
        title: "Planning",
        description:
            "Based on the discovery phase, we create a detailed plan including timeline, milestones, and deliverables.",
        color: "bg-purple-500",
    },
    {
        number: "03",
        title: "Design",
        description:
            "Our designers create beautiful, user-friendly interfaces that align with your brand and meet your users' needs.",
        color: "bg-pink-500",
    },
    {
        number: "04",
        title: "Development",
        description:
            "Our developers bring the designs to life with clean, efficient code that follows best practices and standards.",
        color: "bg-orange-400",
    },
    {
        number: "05",
        title: "Testing",
        description:
            "We thoroughly test every aspect of your project to ensure it works flawlessly across all devices and browsers.",
        color: "bg-green-500",
    },
    {
        number: "06",
        title: "Launch",
        description:
            "Once everything is perfect, we launch your project and provide support to ensure a smooth transition.",
        color: "bg-rose-500",
    },
];

const HowIWork = () => {
    return (
        <section className="Proccess pt-10 pb-15 px-4" id="about">
            <div className="container mx-auto  px-4">

                <SlideInWhenVisible direction="down" delay={0.3}>
                    <p className="font-bold bg-blue-800/50 w-fit mx-auto px-3 py-1 text-sm xl:text-md rounded-2xl">My Proccess</p>
                </SlideInWhenVisible>
                <SlideInWhenVisible direction="up" className="mb-10">
                    <h1 className="text-center text-2xl xl:text-4xl font-bold ">How I <span className="text-blue-500">Work</span></h1>
                </SlideInWhenVisible>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                    {/* Vertical Line */}
                    <div className=" absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600 z-0" />

                    {steps.map((step, index) => (
                        <FadeInWhenVisible key={index} delay={0.2}>
                            <div className="relative howIWorkCard group bg-[#1a1a35] rounded-xl shadow z-10 overflow-hidden hover:shadow-blue-500/80 transition">
                                <SlideInWhenVisible
                                    direction="specialWork"
                                    delay={0.1 + index * 0.1}
                                    className="relative z-10 howIWorkRight top-[-8px] right-[-12px] transition-all duration-300 group-hover:top-[-1rem] group-hover:right-[-2rem]"
                                >
                                    <div className={`absolute ${step.color} w-30 h-30 top-[-2rem] right-[-3rem] rounded-full`} />
                                </SlideInWhenVisible>

                                <div className="p-6">
                                    <div
                                        className={`w-14 h-14 relative howIWorkScope flex items-center justify-center ${step.color} text-white rounded-full text-xl font-bold mb-4 transition-transform duration-300 group-hover:scale-110`}
                                    >
                                        {step.number}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-gray-300 text-sm">{step.description}</p>
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowIWork;
