import React from "react";
import user from "../assets/svg/user.svg";
import email from "../assets/svg/email.svg";
import phone from "../assets/svg/phone.svg";
import message from "../assets/svg/message.svg";
import arrow1 from "../assets/svg/arrow1.svg";

const About = () => {
  return (
    <section className="bg-[#0B131A] text-white py-20 px-6 flex justify-center items-center">
      <div className="w-full max-w-2xl">
        {/* Sarlavha */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight text-center">
          <span className="text-[#00AEEF]">Tell us</span> about your
          <br /> amazing project
        </h2>

        {/* Forma */}
        <form className="space-y-6">
          {/* Name */}
          <div className="relative border-b border-gray-700 hover:border-[#00AEEF] transition-all duration-300 cursor-text">
            <input
              type="text"
              placeholder="NAME"
              className="bg-transparent w-full py-3 text-sm tracking-wider placeholder-gray-400 focus:outline-none"
            />
            <img
              src={user}
              alt="user"
              className="absolute right-2 top-3 w-4 h-4 opacity-70"
            />
          </div>

          {/* Email va Phone */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative flex-1 border-b border-gray-700 hover:border-[#00AEEF] transition-all duration-300 cursor-text">
              <input
                type="email"
                placeholder="EMAIL"
                className="bg-transparent w-full py-3 text-sm tracking-wider placeholder-gray-400 focus:outline-none"
              />
              <img
                src={email}
                alt="email"
                className="absolute right-2 top-3 w-4 h-4 opacity-70"
              />
            </div>
            <div className="relative flex-1 border-b border-gray-700 hover:border-[#00AEEF] transition-all duration-300 cursor-text">
              <input
                type="tel"
                placeholder="PHONE"
                className="bg-transparent w-full py-3 text-sm tracking-wider placeholder-gray-400 focus:outline-none"
              />
              <img
                src={phone}
                alt="phone"
                className="absolute right-2 top-3 w-4 h-4 opacity-70"
              />
            </div>
          </div>

          {/* Message */}
          <div className="relative border-b border-gray-700 hover:border-[#00AEEF] transition-all duration-300 cursor-text">
            <textarea
              placeholder="MESSAGE"
              className="bg-transparent w-full py-3 text-sm tracking-wider placeholder-gray-400 focus:outline-none resize-none h-20"
            ></textarea>
            <img
              src={message}
              alt="message"
              className="absolute right-2 top-3 w-4 h-4 opacity-70"
            />
          </div>

          {/* Privacy va attach */}
          <div className="flex items-center justify-between text-xs text-gray-400">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="accent-[#00AEEF]" />
              <span>
                I agree to the{" "}
                <a
                  href="#"
                  className="underline text-[#00AEEF] hover:text-[#0095d4] transition-colors"
                >
                  Privacy Policy
                </a>
              </span>
            </label>
            <a
              href="#"
              className="text-[#00AEEF] hover:underline hover:text-[#0095d4] transition-colors cursor-pointer"
            >
              ATTACH FILES
            </a>
          </div>

          {/* Submit tugma */}
          <div className="pt-6">
            <button
              type="submit"
              className="bg-[#00AEEF] hover:bg-[#0095d4] transition-all text-white font-semibold w-full md:w-auto px-8 py-4 rounded-lg flex items-center justify-center space-x-2 mx-auto cursor-pointer"
            >
              <span>Get a free consultation</span>
              <img src={arrow1} alt="arrow" className="w-3 h-3" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default About;
