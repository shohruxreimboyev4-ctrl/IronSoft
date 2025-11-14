import React from "react";

import logo from "../assets/svg/logo.svg";
import facebook from "../assets/svg/facebook.svg";
import linkedin from "../assets/svg/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0B131A] text-white w-full">
      <div className="container max-w-[1400px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 border-b border-gray-800">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer hover:opacity-90 transition-opacity duration-300">
          <img src={logo} alt="IRONSOFT" className="w-28 md:w-32" />
        </div>

        {/* Menu */}
        <ul className="flex flex-wrap justify-center space-x-8 text-sm text-gray-300">
          {["Services", "Our works", "About us", "Contact us"].map(
            (item, idx) => (
              <li
                key={idx}
                className="relative font-normal text-xl leading-[1.3]"
              >
                <a className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300">
                  {item}
                  {/* Hover underline */}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00AEEF] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            )
          )}
        </ul>

        {/* Button */}
        <button className="bg-white text-xs leading-[1.7] tracking-[-0.02em] uppercase text-center text-[#0189be] hover:bg-gray-200 transition-all border w-[163px] h-[57px] px-5 py-3 rounded-[20px] border-solid border-black cursor-pointer hover:scale-105 duration-300">
          GET STARTED
        </button>
      </div>

      {/* Pastki qism */}
      <div className="container max-w-[1400px] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-gray-400 text-xs space-y-4 md:space-y-0">
        <p>© IRONSOFT, ALL RIGHTS RESERVED</p>

        {/* Ijtimoiy tarmoqlar */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="hover:opacity-80 transition-opacity duration-300 cursor-pointer"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a
            href="#"
            className="hover:opacity-80 transition-opacity duration-300 cursor-pointer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
