import React from "react";
import FadeInWhenVisible from "../effects/FadeInWhenVisible";
import SlideInWhenVisible from "../effects/SlideInWhenVisible";

const steps = [
    {
      "title": "E-Commerce Platform",
      "description": "loyihalar yuklanish jarayonida",
      "category": "Web Development",
      "technologies": ["React", "Node.js", "Next.js", "+8 Texnologiyalar"],
      "image": "/images/ecommerce1.png",
      "url": "#"
    },
    {
      "title": "E-Commerce Platform",
      "description": "loyihalar yuklanish jarayonida",
      "category": "Web Development",
      "technologies": ["React", "Node.js", "Next.js", "+8 Texnologiyalar"],
      "image": "/images/ecommerce2.png",
      "url": "#"
    },
    {
      "title": "E-Commerce Platform",
      "description": "loyihalar yuklanish jarayonida",
      "category": "Web Development",
      "technologies": ["React", "Node.js", "Next.js", "+8 Texnologiyalar"],
      "image": "/images/ecommerce3.png",
      "url": "#"
    }
  ]
  

const Projects = () => {
    return (
        <section className="Proccess pt-10 pb-15 px-4" id="projects">
            <div className="container mx-auto  px-4">

                <SlideInWhenVisible direction="down" delay={0.3}>
                    <p className="font-bold bg-blue-800/50 w-fit mx-auto px-4 py-1 rounded-2xl">My Projects</p>
                </SlideInWhenVisible>
                <SlideInWhenVisible direction="up" className="mb-10">
                    <h1 className="text-center text-2xl xl:text-4xl font-bold "><span className="text-blue-500">Projects</span> I Created </h1>
                </SlideInWhenVisible>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                    {/* Vertical Line */}
                    <div className=" absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600 z-0" />

                    {steps.map((step, index) => (
                        <FadeInWhenVisible key={index} delay={0.2}>
                            <div className="relative bg-[#1a1a35] rounded-xl shadow z-10 overflow-hidden hover:shadow-blue-500/80 transition ">
                                <SlideInWhenVisible direction="specialWork" delay={0.1 + index * 0.1} className="relative z-10">
                                <div className={`absolute ${step.color} w-30 h-30 top-[-2rem] right-[-3rem] rounded-full`} />
                                </SlideInWhenVisible>

                                <div className="p-6 ">
                                    <div
                                        className={`w-14 h-14 flex items-center justify-center ${step.color} text-white rounded-full text-xl font-bold mb-4`}
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

export default Projects;
