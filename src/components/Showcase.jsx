import React from "react";
import logo1 from "../assets/svg/logo1.svg";
import aww from "../assets/svg/aww.svg";
import a from "../assets/svg/a.svg";
import haus from "../assets/svg/haus.svg";
import viva from "../assets/svg/viva.svg";
import lg1 from "../assets/img/lg1.png";
import lg2 from "../assets/img/lg2.png";
import lg3 from "../assets/img/lg3.png";
import web_development from "../assets/svg/web_development.svg";
import seo from "../assets/svg/seo.svg";
import ppc_smm from "../assets/svg/ppc_smm.svg";

const Showcase = () => {
  return (
    <section className="w-full bg-[#0c151c] text-slate-100 py-12">
      <div className="max-w-[95%] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-5">
        {/* LEFT SIDE */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <img src={logo1} alt="brand" className="w-[136px] h-[134px]" />
            <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
              Your Website
              <br />
              <span className="text-2xl lg:text-3xl text-sky-400">
                good enough?
              </span>
            </h2>
          </div>

          <div>
            <button className="inline-flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-xl shadow-md hover:scale-[1.02] transition-transform">
              <span>Check this now!</span>
              <span className="w-8 h-8 rounded-full bg-sky-500 inline-flex items-center justify-center text-white">
                ↗
              </span>
            </button>
          </div>

          {/* Trust Logos */}
          <div className="mt-10 lg:mt-12">
            <h4 className="text-xs text-slate-400 tracking-wider mb-3">
              THEY TRUST US
            </h4>
            <div className="flex flex-wrap gap-4 items-center opacity-70">
              <img src={aww} alt="aww" className="w-20 h-8 object-contain" />
              <img src={a} alt="a" className="w-16 h-8 object-contain" />
              <img src={haus} alt="haus" className="w-24 h-8 object-contain" />
              <img src={viva} alt="viva" className="w-24 h-8 object-contain" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <figure className="relative overflow-hidden rounded-sm border border-slate-800">
              <img
                src={lg1}
                alt="showcase 1"
                className="w-full h-[360px] object-cover"
              />
            </figure>

            <figure className="relative overflow-hidden rounded-sm border border-slate-800">
              <img
                src={lg2}
                alt="showcase 2"
                className="w-full h-[360px] object-cover"
              />
            </figure>

            <figure className="relative overflow-hidden rounded-sm border border-slate-800">
              <img
                src={lg3}
                alt="showcase 3"
                className="w-full h-[360px] object-cover"
              />
            </figure>
          </div>

          {/* Services */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800 pt-4">
            <div className="flex items-center gap-4 py-4 px-2">
              <div className="w-10 h-10 flex items-center justify-center rounded border border-slate-700 bg-slate-900/50">
                <img src={web_development} alt="dev" className="w-6 h-6" />
              </div>
              <div className="text-sm">
                <div className="font-medium">Web Development</div>
              </div>
            </div>

            <div className="flex items-center gap-4 py-4 px-2">
              <div className="w-10 h-10 flex items-center justify-center rounded border border-slate-700 bg-slate-900/50">
                <img src={seo} alt="seo" className="w-6 h-6" />
              </div>
              <div className="text-sm">
                <div className="font-medium">SEOptimisation</div>
              </div>
            </div>

            <div className="flex items-center gap-4 py-4 px-2">
              <div className="w-10 h-10 flex items-center justify-center rounded border border-slate-700 bg-slate-900/50">
                <img src={ppc_smm} alt="ppc" className="w-6 h-6" />
              </div>
              <div className="text-sm">
                <div className="font-medium">PPC and SMM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
