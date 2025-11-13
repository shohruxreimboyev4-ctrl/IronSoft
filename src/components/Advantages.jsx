import React from "react";
import Avatar1 from "../assets/svg/Avatar1.svg";
import Avatar2 from "../assets/svg/Avatar2.svg";
import Avatar3 from "../assets/svg/Avatar3.svg";

const Advantages = () => {
  const testimonials = [
    {
      id: 1,
      text: "I've worked with them several times and have always been happy with the results.",
      name: "Olexander Danilkovych",
      position: "co‑owner of S–B Trading",
      image: Avatar1,
    },
    {
      id: 2,
      text: "We were impressed by how promptly they could go from approval of the project to delivering final outputs.",
      name: "Vitaliy Stetsenko",
      position: "founder of Vital Interiors",
      image: Avatar2,
    },
    {
      id: 3,
      text: "Their team really listens and researches the best ways to make our partnership the best it can possibly be.",
      name: "Oleg Bolebrukh",
      position: "founder at Trident Modular",
      image: Avatar3,
    },
  ];

  const advantages = [
    {
      id: "04.",
      title: "Highly process-oriented",
      desc: "We follow battle-tested, unique processes for everything that we do, ensuring high-quality, efficient, and debt-free delivery.",
    },
    {
      id: "05.",
      title: "Technical excellency",
      desc: "Our engineering practices will bring website and marketing craftsmanship, quality, and consistency to the table, all in a flexible state to guarantee ever-changing requirements.",
    },
    {
      id: "06.",
      title: "Full transparency",
      desc: "We provide transparent and clear communication, project management, and budgeting.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 sm:px-12 lg:px-20 max-w-[95%] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
        <div className="lg:col-span-2 space-y-3">
          <p className="uppercase text-xs font-semibold text-gray-400 tracking-wider">
            OUR ADVANTAGES
          </p>
          <h2 className="text-4xl font-extrabold leading-tight">
            Why{" "}
            <span className="text-[#007FBE]">
              Iron<span className="text-[#0097E0]">Soft</span>
            </span>
          </h2>
          <p className="text-sm text-gray-700 max-w-xs">
            Team of 12 passionate engineers developing and setting with care to
            make sure our clients are 100% happy.
          </p>
          <a
            href="#"
            className="text-[#007FBE] font-semibold text-xs flex items-center gap-1 hover:underline"
          >
            MORE ABOUT US
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#007FBE"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#D9F0FF] rounded-xl p-6 shadow-md flex flex-col justify-between min-h-[190px]"
            >
              <p className="text-xs text-[#333] mb-6 leading-relaxed">
                “{t.text}”
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-sm text-[#222]">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-500">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-4 gap-6">
        {advantages.map((adv) => (
          <div
            key={adv.id}
            className="border border-gray-300 rounded-xl p-6 bg-white text-[#222] hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-[#007FBE] font-semibold text-xl mb-2">
              {adv.id}
            </h3>
            <h4 className="font-semibold text-lg mb-2">{adv.title}</h4>
            <p className="text-xs leading-relaxed">{adv.desc}</p>
          </div>
        ))}

        <div className="bg-[#007FBE] rounded-xl flex flex-col justify-center items-center p-6 cursor-pointer hover:bg-[#005f87] transition-colors duration-300">
          <h3 className="text-white font-semibold text-lg text-center mb-3">
            Get a free consultation
          </h3>
          <button
            className="bg-white rounded-full p-3 hover:bg-gray-100 transition"
            aria-label="Get consultation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#007FBE]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#007FBE"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
