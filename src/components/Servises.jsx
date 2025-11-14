import React from "react";

import product from "../assets/img/product.png";
import code from "../assets/svg/code.svg";

const Servises = () => {
  return (
    <div>
      <section className="py-16 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">
            Our servises
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Partners in every phase of the product lifecycle
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-md transition">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  WEB DEVELOPMENT
                </h3>
                <p className="text-gray-600 text-sm max-w-md">
                  The visualized product concept is being implemented and
                  executed. We will choose the technology that matches the
                  requirements.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  SEO OPTIMISATION
                </h3>
                <p className="text-gray-600 text-sm max-w-md">
                  We observe how real users interact with the product and
                  identify opportunities for optimization.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  PCC, SMM
                </h3>
                <p className="text-gray-600 text-sm max-w-md">
                  Our paid media efforts engage audiences when they are most
                  receptive, increasing leads and revenue.
                </p>
              </div>
            </div>

            <div className="space-y-6 bg-gray-50 p-8 rounded-3xl shadow-md">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={product}
                    alt="Product Design"
                    className="w-12 h-12"
                  />
                  <h3 className="text-xl font-bold text-gray-900">
                    Product Design
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-5">
                  Product design is where we bring the idea to life with a
                  functional and aesthetic touch.
                </p>
              </div>

              <hr className="my-6 border-gray-300" />

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img src={code} alt="Web Dev" className="w-12 h-12" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Web Development
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-5">
                  The goal of front-end development is to create an intuitive
                  and enjoyable user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servises;
