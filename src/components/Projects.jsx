import React, { useState } from "react";
import FadeInWhenVisible from "../effects/FadeInWhenVisible";
import SlideInWhenVisible from "../effects/SlideInWhenVisible";
import ProjectsData from "../data/Projects.json"
import { Button } from "antd";
import { MdOutlineNavigateNext } from "react-icons/md";



const Projects = () => {

    const [loadings, setLoadings] = useState([]);

    const enterLoading = (index, url) => {

    
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = true;
          return newLoadings;
        });
    
        setTimeout(() => {

            window.open(url, "_blank");
          setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            return newLoadings;
          });
        }, 1000);
      };

    
    const projects = ProjectsData;
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
                    {/* <div className=" absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600 z-0" /> */}

                    {projects.map((item, index) => (
                        <FadeInWhenVisible key={index} delay={0.2}>
                            <div className="projectCard h-full rounded-xl shadow z-10 overflow-hidden transition ">
                                <div className="p-6">
                                    <div className="projectImageContainer">
                                        <div className="projectImage">
                                            <img src={item.image} alt={item.name} className="w-full " />
                                        </div>
                                        <span className="projectCategory">
                                            <p>{item.category}</p>
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                                    <p className="text-gray-300 text-sm">{item.description}</p>
                                    <div className="mt-4 flex gap-2">
                                        {item.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="bg-gray-600 text-amber-200  font-semibold font-sans px-3 py-1 rounded-full text-[9px]">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Button
                                        type="primary"
                                        icon={<MdOutlineNavigateNext />}
                                        loading={loadings[index] || false}
                                        onClick={() => enterLoading(index, item.url) }
                                        iconPosition="end"
                                        className="mt-4"
                                    >
                                        See Project
                                    </Button>
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
