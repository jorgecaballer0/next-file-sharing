import Constantes from "@/utils/Constantes";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-32 mx-auto lg:flex">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <span className="text-primary">Upload, Save</span> and easily{" "}
              <span className="text-primary">Share</span> your files in one
              place
            </h1>
            <p className="mt-4 text-gray-500 sm:text-xl/relaxed">
              {Constantes.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-primary hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/get-started"
              >
                Get Started
              </a>
              <a
                className="block w-full px-12 py-3 text-sm font-medium rounded shadow text-primary hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
