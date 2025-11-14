import React from "react";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";
import project4 from "../assets/img/project4.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      title: "Modern look for the software development company",
      tags: ["WORDPRESS", "PWA"],
    },
    {
      id: 2,
      image: project2,
      title: "Corporate website for an assemble modular houses enterprise",
      tags: ["BUILDING STYLE GUIDE", "REACT"],
    },
    {
      id: 3,
      image: project3,
      title: "Corporate website for houses enterprise",
      tags: ["WORDPRESS", "PWA"],
    },
    {
      id: 4,
      image: project4,
      title: "Another creative project design",
      tags: ["REACT", "UI/UX"],
    },
  ];

  return (
    <section className="bg-[#06172A] text-white py-16">
      <div className="text-center mb-10 w-[95%] mx-auto">
        <p className="text-sm uppercase text-gray-400 tracking-wide">
          Our Projects
        </p>
        <h2 className="text-4xl font-bold mt-2">Case Studies</h2>
        <p className="text-gray-400 max-w-xl mx-auto mt-3 leading-relaxed">
          When it comes to creating a high quality website and adjusting the
          marketing strategy, experience matters a lot. Explore our portfolio to
          view some of the projects we've successfully completed!
        </p>
      </div>

      <div className="w-[95%] mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <div
            key={p.id}
            className="
              bg-[#0A223A] p-6 rounded-xl shadow-lg text-center cursor-pointer
              transition-all duration-300 ease-out
              hover:scale-[1.04] hover:shadow-2xl hover:shadow-sky-600/10
            "
          >
            <img
              src={p.image}
              alt={p.title}
              className="
                rounded-lg w-full mb-4 object-cover cursor-pointer
                transition-all duration-300 ease-out
                hover:brightness-110
              "
            />

            <div className="flex justify-center gap-2 mb-2 flex-wrap">
              {p.tags.map((tag, index) => (
                <span
                  key={index}
                  className="
                    text-xs bg-gray-800 px-3 py-1 rounded-full uppercase text-gray-300 cursor-pointer
                    transition-colors duration-300 hover:bg-gray-700
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-semibold cursor-pointer transition-colors duration-300 hover:text-sky-400">
              {p.title}
            </h3>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          className="
            bg-sky-500 text-white px-8 py-2 rounded-full font-medium cursor-pointer
            transition-all duration-300 ease-out
            hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/40
            active:scale-95
          "
        >
          See more →
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
