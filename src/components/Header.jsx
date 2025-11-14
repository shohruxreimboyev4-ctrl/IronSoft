import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const btnMain =
    "bg-gradient-to-r from-sky-500 to-cyan-600 text-white text-[12px] font-semibold px-6 py-2 rounded-full shadow-md \
   transition-all duration-300 ease-out cursor-pointer \
   hover:brightness-110 hover:shadow-lg hover:shadow-sky-500/40 active:scale-95";

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0c151c] shadow-sm">
        <div className="max-w-[95%] mx-auto px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 select-none cursor-pointer">
            <img
              src={logo}
              alt="IronSoft Logo"
              className="w-[120px] h-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center text-sm font-medium gap-8">
            {[
              { href: "#services", label: "Services" },
              { href: "#works", label: "Our works" },
              { href: "#about", label: "About us" },
              { href: "#contact", label: "Contact us" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-xl text-white transition hover:text-sky-400 cursor-pointer
                  after:content-[''] after:absolute after:left-0 after:-bottom-[3px]
                  after:w-0 after:h-[2px] after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button className={`hidden md:block ${btnMain}`}>GET STARTED</button>

          <div
            className="md:hidden text-white text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          >
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen
            ? "visible bg-black/40 backdrop-blur-sm"
            : "invisible bg-transparent"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <aside
        className={`fixed top-0 left-0 h-full bg-[#0c151c] w-[70%] z-50 p-8 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="text-right mb-8 text-white text-2xl cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>

        <nav className="flex flex-col gap-6">
          {[
            { href: "#services", label: "Services" },
            { href: "#works", label: "Our works" },
            { href: "#about", label: "About us" },
            { href: "#contact", label: "Contact us" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="relative text-lg text-white font-medium transition hover:text-sky-400 cursor-pointer
                after:content-[''] after:absolute after:left-0 after:-bottom-[3px]
                after:w-0 after:h-[2px] after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}

          <button className={`mt-8 w-fit ${btnMain}`}>GET STARTED</button>
        </nav>
      </aside>
    </>
  );
};

export default Header;
