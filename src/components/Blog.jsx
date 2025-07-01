import React, { useState } from "react";
import SlideInWhenVisible from "../effects/SlideInWhenVisible";
import { Button, Modal } from 'antd';

import blogs from "../data/Blog.json";


const BlogSection = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <section id="blog" className="py-24 Proccess text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <SlideInWhenVisible direction="down" delay={0.3}>
          <p className="font-bold bg-blue-800/50 w-fit mx-auto px-4 py-1 rounded-2xl">My Blog</p>
        </SlideInWhenVisible>
        <SlideInWhenVisible direction="up" className="mb-10">
          <h1 className="text-center text-2xl xl:text-4xl font-bold "><span className="text-blue-500">Latest</span> Texnologies </h1>
        </SlideInWhenVisible>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <SlideInWhenVisible key={post.id} direction="up" delay={index * 0.1}>
              <div className="bg-[#1e293b] rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300">
                <img src={post.thumbnail} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-5 text-left">
                  <p className="text-sm text-gray-400">{post.date}</p>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  {/* <p className="text-gray-300 text-sm mb-4 h-18">{post.description}</p> */}
                  {/* <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-700 px-2 py-1 rounded-full text-white"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div> */}
                  <Button
                    type="text"
                    className="text-blue-500! text-sm py-5!  group "
                    onClick={() => setIsOpen(true)}
                  >
                    <span className="flex items-center gap-1">
                      Read More
                      <span className="transform transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </Button>
                  <Modal
                    title={post.title}
                    open={isOpen}
                    onOk={() => setIsOpen(false)}
                    onCancel={() => setIsOpen(false)}
                     >
                    <img src={post.thumbnail} alt={post.title} className="w-full h-48 object-cover" />
                    <p className="text-sm text-gray-400">{post.date}</p>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-300 text-sm font-semibold mb-1 ">{post.description}</p>
                    <p className="text-gray-200 text-sm mb-4 ">{post.content}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-blue-700 px-2 py-1 rounded-full text-white"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </Modal>
                </div>
              </div>
            </SlideInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
