import React from "react";
import SlideInWhenVisible from "../effects/SlideInWhenVisible";

import blogs from "../data/Blog.json";

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="bg-blue-600 text-sm w-fit mx-auto px-4 py-1 rounded-full font-semibold mb-3">
          My Blog
        </p>
        <h2 className="text-4xl font-bold mb-8">
          Latest <span className="text-blue-500">Articles</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <SlideInWhenVisible key={post.id} direction="up" delay={index * 0.1}>
              <div className="bg-[#1e293b] rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-5 text-left">
                  <p className="text-sm text-gray-400">{post.date}</p>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{post.description}</p>
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
                  <button className="text-blue-400 hover:underline text-sm">
                    Read More →
                  </button>
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
